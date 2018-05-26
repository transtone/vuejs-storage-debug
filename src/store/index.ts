import Vue from "vue"
import Vuex from "vuex"
import vuejsStorage from "vuejs-storage"

const getters: any = require("./getters")
import login from "./modules/login"

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  modules: {
    login
  },
  plugins: [
    vuejsStorage({
      keys: ["login"],
      namespace: "planx"
    })
  ]
})

export default store
