<template>
  <div class="single-post" v-if="title && text">
    <div class="section-header">
      <h2 class="section-header__title" v-if="title">{{ title }}</h2>
    </div>
    <div class="single-post__content" v-if="text">
      <client-only>
        <vue-simple-markdown :source="text"></vue-simple-markdown>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.siteTitle + " | Блог",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Текс для блога'
        }
      ]
    }
  },
  async asyncData({store, params}) {
    try {
      await store.dispatch("post/fetchSingle", {slug: params.slug})
      const {title, text} = store.state.post.data.data;
      return {title, text};
    } catch (e) {
      console.log(e, 'e')
    }
  },
  computed: {
    siteTitle() {
      return this.$store.state.site_title;
    },
  }
}
</script>
