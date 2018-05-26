export const token = state => state.login.token

export const checkToken = state => {
  const token = state.login.token
  if (token === null) {
    return false
  } else {
    return true
  }
}
