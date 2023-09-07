export const state = () => ({
  currentPage: 1,
  itemsPerPage: 20
})

export const getters = {
  getPage (state) {
    return state.currentPage
  }
}

export const mutations = {
  setPage (state, page) {
    state.currentPage = page
  },
  nextPage (state) {
    state.currentPage++
  },
  prevPage (state) {
    state.currentPage--
  }
}

/* export const actions = {
  async fetchPage({ state }) {
    // make request
    const res = { data: 10 };
    state.currentPage = res.data;
    return res.data;
  }
} */
