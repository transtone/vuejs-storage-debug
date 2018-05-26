import Vue from "vue"
import Vuex from "vuex"
import VuexORM from "@vuex-orm/core"
import database from "./database"

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
    VuexORM.install(database, { namespace: "api" }),
    vuejsStorage({
      keys: ["login"],
      namespace: "planx"
    })
  ]
})

export default store
