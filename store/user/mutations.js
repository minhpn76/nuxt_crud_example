import * as type from './type'

const mutations = {
  [type.GET_LIST_LINK](state, links) {
    state.links = links
  },
  [type.ADD_LINK](state, link) {
    state.links.push(link)
  },
  [type.REMOVE_LINK](state, index) {
    state.links.splice(index, 1)
  },
  [type.REMOVE_LINK_ALL](state) {
    state.links = []
  }
}

export default mutations
