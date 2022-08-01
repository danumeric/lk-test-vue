import { createStore } from 'vuex'
import dataUser from './modules/dataUser'
import docsUser from './modules/docsUser'
// import createPersistedState from "vuex-persistedstate";

const apiUrlLogin = 'https://host1.medsafe.tech:40443/api/client_login'
const apiUrlDocs = 'https://host1.medsafe.tech:40443/api/test'
const baseUrl = ' https://host1.medsafe.tech:40443'
export { apiUrlLogin, apiUrlDocs, baseUrl }
export default createStore({

  modules: {
    dataUser, docsUser
  }
  // }, plugins: [createPersistedState()],
})
