<template>
  <div class="single-post">
    <div class="section-header">
      <h2 class="section-header__title" v-if="title">{{ title }}</h2>
    </div>
    <div class="single-post__content">
      <div class="single-post__navigation">
        <span class="single-post__link" @click="goBack">Назад</span>
        <a class="single-post__link" target="_blank" :href="`${url}`">Посмотреть сайт</a>
      </div>
      <div class="single-post__img">
        <img :src="`${siteUrl}${image}`" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      text: "",
      slug: null,
      data: null,
      url: "",
      image: ""
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getPost() {
      this.$axios.get(`/portfolio/${this.slug}`)
          .then(res => {
            this.data = res.data.data;
            this.title = this.data.title;
            this.url = this.data.url;
            this.image = this.data.image;
          })
          .catch(err => {
            console.log(err)
          })
    }
  },
  computed: {
    siteUrl() {
      return process.env.siteUrl;
    }
  },
  created() {
    this.slug = this.$route.params.slug
    this.getPost()
  }
}
</script>
<style lang="scss">
a.single-post__link,
.single-post__link{
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