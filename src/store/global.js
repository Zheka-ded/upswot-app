const store = {
  state: {
    user: null,
  },
  getters: {
    isAuthenticated: state => !!state.user,
    user: state => state.user,
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
  },
  actions: {
    login ({ commit }, data) {
      commit('SET_USER', data)
    },
  },
}

export default store
