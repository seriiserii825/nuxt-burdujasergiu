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
    async fetchData({commit}, payload) {
        const {limit, offset} = payload;
        try {
            const data = await this.$axios.$get(`${process.env.apiUrl}/post?limit=${limit}&offset=${offset}`);
            commit("setData", data);
        } catch (e) {
            console.log(e, "e");
        }
    },
    async fetchDataByCategory({commit}, payload) {
        try {
            const {category_id} = payload;
            const data = await this.$axios.$get(
                `${process.env.apiUrl}/post?post_category_id=${category_id} `
            );
            commit("setData", data);
        } catch (e) {
            console.log(e.response, "e");
        }
    },
};
