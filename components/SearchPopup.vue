<template>
  <div class="search-popup">
    <header class="search-popup__header">
      <input v-model="search" @input="onInput" ref="search" type="text" placeholder="Search...">
    </header>
    <ul v-if="search_list.length" class="search-popup__list">
      <li @click="hidePopup" v-for="item in search_list" :key="item.id">
        <nuxt-link :to="`/post/${item.slug}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      search_list: []
    }
  },
  methods: {
    onInput() {
      if (this.search.length > 1) {
        this.$axios.get(`/post?limit=20&offset=0&search=${this.search}`)
            .then(res => {
              const result = res.data.data;
              this.search_list = result;
            })
            .catch(error => {
              console.log(error.response, 'error.response')
            });
      } else {
        this.search_list = [];
      }
    },
    hidePopup() {
      this.$emit('hide');
    }
  },
  mounted() {
    this.$refs.search.focus();
  }
}
</script>

<style lang="scss">
.search-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  width: 98%;
  height: 96%;
  z-index: 9999999;
  background: #000;
  input {
    display: block;
    margin-bottom: 6rem;
    width: 100%;
    height: 6rem;
    font-size: 2rem;
    text-indent: 2rem;
    color: white;
    background: transparent;
    border: 1px solid orangered;
  }
  li {
    margin-bottom: 2rem;
    color: white;
    background: #222;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
    border: 1px solid transparent;
    &:focus {
      border-color: orangered;
      outline: 1px solid orangered;
    }
    a {
      display: block;
      padding: 2rem;
    }
  }
}
</style>
