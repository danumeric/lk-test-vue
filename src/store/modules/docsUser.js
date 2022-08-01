import { apiUrlDocs, baseUrl } from '../index.js'
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import Cookies from 'js-cookie'
import router from '@/router/index.js';

const fpPromise = FingerprintJS.load({ monitoring: false });
const md5FP = (async () => {
  const fp = await fpPromise;
  const result = await fp.get();
  return result.visitorId;
}
)();

export default ({
  state: {
    docsUser: [],
  },
  getters: {
    getListDocs(state) {
      return state.docsUser;
    }
  },
  mutations: {
    fillDocsUser(state, data) {//
      state.docsUser = data;
      console.log('fillDocsUser', state.docsUser);
    },
    clearDocsUser(state) {
      state.dataUser = {}
      Cookies.remove('TK');
      Cookies.remove('pid')
    }
  },

 
  actions: {
    async reqDocsUser(ctx) {
      const TK = Cookies.get("TK");
      const pid = Cookies.get("pid");

      if (typeof (TK) === "undefined" || typeof (pid) === "undefined") {
        console.log('cookie undef', TK, pid);
        router.push('/')
      }

      const reqData = {
        id_login: pid,
        id_people: pid,
        TK: TK,
        IMEI: md5FP,
        Name_app: "connect",
        Name_event: "list_load"
      }

      const jsonReqData = JSON.stringify(reqData);
      const res = await fetch(`${apiUrlDocs}?json=${jsonReqData}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      if (res.ok) {
        const json = await res.json();
        if (json.errorType > 0) {
          ctx.commit('setErrorMsg', json.errorText);
          router.push('/')
        }
        const recievedUserDocs = json.body;
        console.log('recievedUserDocs', recievedUserDocs);
        ctx.commit('fillDocsUser', recievedUserDocs);
      } else {
        router.push('/')
        console.log('error reqDocsUser', res.error);
      }

    },
    async downloadDoc(ctx, { idDoc, docType, nameDoc, dateDoc }) {
      const reqData = {
        id_login: Cookies.get("pid"),
        id_people: Cookies.get("pid"),
        TK: Cookies.get("TK"),
        IMEI: md5FP,
        Name_app: "connect",
        Name_event: "get_pic_path",
        id_document: idDoc,
        doc_type: docType
      }
      const jsonReqData = JSON.stringify(reqData);
      const res = await fetch(`${apiUrlDocs}?json=${jsonReqData}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        if (json.errorType > 0) {
          ctx.commit('setErrorMsg', json.errorText);
          router.push('/')
        }
        const save = document.createElement('a');
        save.href = baseUrl + '/' + json.body[0]["hash"];
        save.download = `${nameDoc} от ${dateDoc}`;
        save.target = '_blank';
        document.body.appendChild(save);
        save.click();
        document.body.removeChild(save);

      } else {
        router.push('/')
        console.log('error reqDocsUser', res.error);
      }
    },
  },

})