export const state = () => ({
  visited: []
})

export const getters = {
  getLatest (state) {
    return state.visited
  }
}

export const mutations = {
  addLatest (state, text) {
    if (state.visited) {
      if (!state.visited.includes(text)) {
        state.visited.unshift(text)
      } else {
        state.visited.splice(state.visited.indexOf(text), 1)
        state.visited.unshift(text)
      }
    }
  }
}
