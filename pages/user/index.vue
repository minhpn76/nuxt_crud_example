<template>
  <div class="container">
    <div>
      <h5 class="title">
        {{title}}
      </h5>
      <span> show object user: {{user.userName}} - {{user.role}}</span>
      <br />
      <span> total Link: {{counterLinks}}</span>
      <span>total link - 1: {{counterLinksDemiss}}</span>
      <br>
      <button class="btn btn-danger" @click="removeLinkAll">Xoá tất cả</button>
      <br>
      <i v-if="links.length == 0">Không tìm thấy dữ liệu</i>
      <ul v-if="links.length > 0">
        <li v-for="(item, index) in links" v-bind:key="index">
          index: {{index}} - item: {{item}} -
          <a href="#" @click="deleteLink(index)">delete</a>
        </li>
      </ul>
      <hr/>
      <form @submit.prevent="addLink">
        <input class="link-input" type="text" placeholder="Add a Link" v-model="newLink" />
      </form>

    </div>
  </div>
</template>

<script>
import Header from '~/components/Header/Header.vue';
import {
  mapState, mapGetters, mapMutations, mapActions
} from 'vuex';
export default {
  components: {
    Header
  },
  data() {
    return {
      newLink: ''
    }
  },
  computed: {
    ...mapState({
      title: state => state.user.titleUser,
      user: state => state.user.user,
      links: state => state.user.links
    }),
    ...mapGetters({
      counterLinks: 'user/counterLinks',
      counterLinksDemiss: 'user/counterLinksDemiss'
    })
  },
  async fetch({ store }) {
    await store.dispatch('user/getListLink')
  },
  methods: {
    ...mapMutations({
      ADD_LINK: 'user/ADD_LINK',
    }),
    ...mapActions({
      'removeLink' : 'user/removeLink',
      'removeLinkAll' : 'user/removeLinkAll'
    }),
    addLink() {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
    deleteLink(index) {
      this.removeLink(index)
    },
    removeAll: () => {
      this.removeLinkAll()
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
