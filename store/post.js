export const state = () => {
  return {
    data: [],
    error: null,
    limit: 4,
    offset: 0,
    post_category_id: 0,
    load_posts: false,
  };
};

export const mutations = {
  setData(state, data) {
    state.data = data;
  },
  setLimit(state, limit) {
    state.limit = limit;
  },
  setOffset(state, offset) {
    state.offset = offset;
  },
  setPostCategoryId(state, post_category_id) {
    state.post_category_id = post_category_id;
  },
  setLoadPosts(state, load_posts) {
    state.load_posts = load_posts;
  },
};

export const actions = {
  async fetchData({ commit }, payload) {
    const { post_category_id, limit, offset, search } = payload;
    let search_url = "";
    if (search) {
      search_url = `&search=${search}`;
    }
    try {
      const data = await this.$axios.$get(
        `${process.env.apiUrl}/post?limit=${limit}&offset=${offset}&post_category_id=${post_category_id}${search_url}`
      );
      console.log(data, "data");
      commit("setData", data);
      commit("setLimit", limit);
      commit("setOffset", offset);
      commit("setPostCategoryId", post_category_id);
    } catch (e) {
      console.log(e, "e");
    }
  },
  async fetchSingle({ commit }, payload) {
    try {
      const { slug } = payload;
      const data = await this.$axios.$get(process.env.apiUrl + "/post/" + slug);
      commit("setData", data);
    } catch (e) {
      console.log(e, "e");
    }
  },
  setLoadPosts({ commit }, payload) {
    commit("setLoadPosts", payload);
  },
};
