import api from "@/api";

const state = {
  token: localStorage.getItem("token") || undefined,
  page: undefined,
  pages: [],
  pageId: localStorage.getItem("pageId") || undefined
};

const actions = {
  login({ commit }, code) {
    return new Promise((resolve, reject) => {
      api.auth
        .fb(code)
        .then(res => {
          console.log("Passsss");
          console.log(res.data);
          const token = res.data.token;

          commit("auth_success", token);

          resolve(token);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  logout({ commit }) {
    commit("login");
  },

  me({ commit }) {
    return new Promise((resolve, reject) => {
      api.auth
        .me()
        .then(res => {
          commit("setUser", res.data.data);

          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  pages({ commit }) {
    return new Promise((resolve, reject) => {
      api.auth
        .pages()
        .then(res => {
          commit("setPages", res.data.pages);

          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

const mutations = {
  auth_success(state, token) {
    localStorage.setItem("token", token);

    state.token = token;
  },
  logout(state) {
    localStorage.removeItem("token");
    localStorage.removeItem("pageId");

    state.pageId = "";
    state.token = "";
  },
  setUser(state, data) {
    state.user = data;
  },
  setPages(state, data) {
    state.pages = data;
  },
  setPage(state, data) {
    state.page = data;

    const pageId = data.page_id;

    localStorage.setItem("pageId", pageId);

    state.pageId = pageId;
  }
};

const getters = {
  isLoggedIn: state => !!state.token,
  pageId: state => state.pageId,
  page: state => state.page,
  isPageLoggedIn: state => !!state.pageId,
  pages: state => state.pages,
  token: state => state.token,
  user: state => state.user
};

export default {
  state,
  actions,
  mutations,
  getters
};
