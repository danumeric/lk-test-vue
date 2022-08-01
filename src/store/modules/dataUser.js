import { apiUrlLogin } from '../index.js'
import router from '@/router'
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import Cookies from 'js-cookie'

const fpPromise = FingerprintJS.load({ monitoring: false });
const md5FP = (async () => {
  const fp = await fpPromise;
  const result = await fp.get();
  return result.visitorId;
}
)();


export default ({
  state: {
    dataUser: Object,
    errorMsg: '',
  },
  getters: {
    getLoginName(state) {
      return state.dataUser.id_login || Cookies.get("pid");
    },
    getErrorMsg(state) {
      return state.errorMsg
    },
  },
  mutations: {
    fillDataUser(state, data) {//
      state.dataUser = data;
      console.log(state.dataUser);
    },
    clearDataUser(state) {
      state.dataUser = {}
    },
    setErrorMsg(state, msg) {
      state.errorMsg = 'Ошибка с сервера: ' + msg;
    }
  },
  actions: {
    async reqDataUser(ctx, { username, password }) {
      const loginData = {
        login: username,
        password: password,
        Name_app: "connect",
        IMEI: md5FP,
      }
      const jsonLoginData = JSON.stringify(loginData);


      const res = await fetch(`${apiUrlLogin}?json=${jsonLoginData}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });

      if (res.ok) {
        const json = await res.json();
        const recievedUserData = json[0];
        if (recievedUserData.id_login == 0) {
          ctx.commit('setErrorMsg', recievedUserData.err_text);
          return;
        }

        if (recievedUserData.id_login != 0) {
          ctx.commit('fillDataUser', recievedUserData);
          router.push('/pa');

          const date = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
          document.cookie = "TK=" + ctx.state.dataUser.TK + "; path=/; expires=" + date
            .toUTCString();
          document.cookie = "pid=" + ctx.state.dataUser.id_login + "; path=/; expires=" + date
            .toUTCString();
        }

      } else {
        console.log('error reqDataUser', res.error);
      }
    },







  },

})