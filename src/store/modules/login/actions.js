export function Login({ commit }) {
  return setTimeout(() => {
    commit("setToken", "imtoken")
    commit("setUser", { name: "token", value: "debug" })
    return "logined"
  }, 5000)
}
