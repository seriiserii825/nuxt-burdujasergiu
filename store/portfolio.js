export const state = () => {
  return {
    data: [],
    error: null,
  };
};

export const mutations = {
  setData(state, data) {
    state.data = data;
  },
};

export const actions = {
  async fetchData({ commit }, payload) {
    try {
      const offset = payload.offset ? payload.offset : "";
      const limit = payload.limit ? payload.limit : "";
      let search_url = "";
      if (payload.search) {
        search_url = `&search=${payload.search}`;
      }
      const data = await this.$axios.$get(
        process.env.apiUrl +
          "/portfolio?taxonomy_id=" +
          payload.taxonomy_id +
          "&limit=" +
          limit +
          "&offset=" +
          offset +
          search_url
      );
      commit("setData", data);
    } catch (e) {
      console.log(e, "e");
    }
  },
  async fetchSingle({ commit }, payload) {
    try {
      const { slug } = payload;
      const data = await this.$axios.$get(
        process.env.apiUrl + "/portfolio/" + slug
      );
      commit("setData", data);
    } catch (e) {
      console.log(e, "e");
    }
  },
};
