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
        try {
            const data = await this.$axios.$get(process.env.apiUrl + "/portfolio");
            commit("setData", data);
        } catch (e) {
            console.log(e, "e");
        }
    },
};
