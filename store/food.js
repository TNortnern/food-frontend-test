const state = () => ({
  current: null
})

const mutations = {
  setCurrent (state, item) {
    state.current = item
  }
}

export default {
  state,
  mutations
}
