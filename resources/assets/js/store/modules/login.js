import jwtToken from '../../helpers/jwt'

export default {
  actions: {
    loginRequest({dispatch}, formData) {
      return axios.post('/api/login', formData).then(response => {
        console.log("response.data---", response.data);
        jwtToken.setToken(response.data.token);
        dispatch('setAuthUser');
      }).catch(error => {
        console.log("error---", error);
      })
    },
    logoutRequest({dispatch}) {
      return axios.post('/api/logout').then(response => {
        jwtToken.removeToken();
        dispatch('unsetAuthUser');
      })
    }
  }
}