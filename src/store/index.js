import { createStore } from 'vuex';

const store = createStore({
  state: {
    isAuthenticated: false,
    token: null,
  },
  mutations: {
    setAuthentication(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
      state.token = payload.token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  actions: {
    login({ commit }, token) {
      commit('setAuthentication', { isAuthenticated: true, token });
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    getToken: (state) => state.token,
  },
});

export default store;