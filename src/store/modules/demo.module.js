export const state = {
  count: 0
}

const getters = {
  doubleCount (state) {
    return state.count * 2
  }
}

export const mutations = {
  SET_COUNT (state, count) {
    state.count = count
  }
}

export const actions = {
  increment ({ commit, state }) {
    commit('SET_COUNT', state.count + 1)
  },
  decrease ({ commit, state }) {
    commit('SET_COUNT', state.count - 1)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
