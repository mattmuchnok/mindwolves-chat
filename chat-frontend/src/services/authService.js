import API from './api'

const AuthService = {
  login: (data) => {
    return API.post('/login', data)
      .then(({ data }) => {
        API.defaults.headers['Authorization'] = `Bearer ${data.token}`
        return data
      })
      .catch(err => {
        console.log("Auth service err", err);
        throw err
      })
  },

  register: (data) => {

  },

  logout: () => {

  }
}

export default AuthService