<template>
  <div class="single-post">
    <div class="section-header">
      <h2 class="section-header__title" v-if="title">{{ title }}</h2>
    </div>
    <div class="single-post__content">
      <div class="single-post__navigation">
        <span class="single-post__link" @click="goBack">Назад</span>
        <a class="single-post__link" v-if="url" target="_blank" :href="`${url}`">Посмотреть сайт</a>
      </div>
      <div class="single-post__img" v-if="image">
        <img :src="`${siteUrl}${image}`" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.siteTitle + " | Портфолио",
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
      await store.dispatch("portfolio/fetchSingle", {slug: params.slug})
      const {title, slug, url, image} = store.state.portfolio.data.data;
      return {title, slug, url, image};
    }catch (e) {
    	console.log(e, 'e')
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    siteUrl() {
      return process.env.siteUrl;
    },
    siteTitle() {
      return this.$store.state.site_title;
    },
  },
}
</script>
<style lang="scss">
a.single-post__link,
.single-post__link {
  display: inline-block;
  margin-bottom: 5rem;
  margin-right: 2rem;
  padding: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none !important;
  color: white;
  background: black;
  border: 2px solid #d2570a;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    color: white;
    background: #d2570a;
  }
}
</style>