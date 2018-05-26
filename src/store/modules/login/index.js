import * as actions from "./actions"

const state = {
  token: null,
  user: {},
  userinfo: {}
}
const mutations = {
  setToken(state, token) {
    state.token = token
  },

  setUser(state, user) {
    state.user = user
  },

  setUserInfo(state, userinfo) {
    state.userinfo = userinfo
  },

  clearData(state) {
    state.token = null
    state.user = {}
    state.userinfo = {}
  }
}

export default {
  state,
  actions,
  mutations
}
