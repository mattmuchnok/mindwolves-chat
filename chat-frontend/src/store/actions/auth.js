import AuthService from '../../services/authService'
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

export const login = (params, history) => dispatch => {
  return AuthService.login(params)
    .then(data => {
      console.log(data)
      dispatch({ type: LOGIN, payload: data })
      history.push('/')
    })
    .catch(err => {

    })
}

export const register = (params, history) => dispatch => {
  return AuthService.register(params)
    .then(data => {
      console.log(data)
      dispatch({ type: REGISTER, payload: data })
      history.push('/')
    })
    .catch(err => {

    })
}