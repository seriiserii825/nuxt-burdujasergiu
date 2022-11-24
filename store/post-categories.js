export const state = () => {
  return {
    data: [],
  }
}

export const mutations = {
  setData(state, data) {
    state.data = data;
  },
}

export const actions = {
  async fetchData({ commit }) {
    try {
      const data = await this.$axios.$get(process.env.API_URL + '/post-category');
      commit('setData', data);
    } catch (e) {
      console.log(e, 'e')
    }

  }
}
