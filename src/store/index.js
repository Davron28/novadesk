import { createStore } from 'vuex'

export default createStore({
  state: {
    language: localStorage.getItem("lang") || "en",
  },
  mutations: {
    SET_LANGUAGE(state, lang) {
      state.language = lang;
      localStorage.setItem("lang", lang);
    },
  },
  actions: {
    changeLanguage({ commit }, lang) {
      commit("SET_LANGUAGE", lang);
    },
  },
  getters: {
    currentLanguage: (state) => state.language,
  },
  modules: {
  },
})
