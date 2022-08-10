import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));
const initialState = user
  ? { status: { loggedIn: true }, user ,token:token}
  : { status: { loggedIn: false }, user: null ,token: null};

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        resp => {
          commit('loginSuccess', resp);
          return Promise.resolve(resp);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, resp) {
      state.status.loggedIn = true;
      state.user = resp.user;
      state.token = resp.token;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};
