export function Login({ commit }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit("setToken", "imtoken")
      commit("setUser", { name: "token", value: "debug" })
      resolve("logined")
    }, 1000)
  })
}
