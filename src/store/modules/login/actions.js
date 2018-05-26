export function Login({ commit }) {
  commit("setToken", "imtoken")
  commit("setUser", { name: "token", value: "debug" })
  return "logined"
}
