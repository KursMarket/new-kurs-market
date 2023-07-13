export const state = () => ({
  ratingMenus: []
});

export const mutations = {
  SET_MENU(state, menu) {
    state.ratingMenus = menu;
  }
}
export const actions = {
  async nuxtServerInit({ commit }) {
    const ratingMenus = await this.$axios.get('/rating/menu');
    commit('SET_MENU', ratingMenus.data);
  }
}
export const getters = {
  ratingMenu: (state) => {
    return state.ratingMenus;
  }
}
