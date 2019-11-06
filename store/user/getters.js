export default {
  counterLinks(state) {
    return state.links.length
  },
  counterLinksDemiss(state) {
    return state.links.length - 1
  }
}