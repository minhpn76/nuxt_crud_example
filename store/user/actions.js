import * as type from './type'

const actions = {
  getListLink: (context) => {
    const data = [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com'
    ]
    context.commit(type.GET_LIST_LINK, data)
  },
  removeLink: (context, link) => {       // Add this:
    context.commit(type.REMOVE_LINK, link)
  },
  removeLinkAll(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(type.REMOVE_LINK_ALL)
        resolve()
      }, 1500)
    })
    
  }
}

export default actions
