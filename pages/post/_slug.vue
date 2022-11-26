<template>
  <div class="single-post">
    <div class="section-header">
      <h2 class="section-header__title" v-if="title">{{ title }}</h2>
    </div>
    <div class="single-post__content">{{text}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      text: "",
      slug: null,
      data: null
    }
  },
  methods: {
    getPost() {
      this.$axios.get(`/post/${this.slug}`)
          .then(res => {
            this.data = res.data.data;
            this.title = this.data.title;
            this.text = this.data.text;
            console.log(JSON.stringify(this.data, null, 4), 'this.data');
          })
          .catch(err => {
            console.log(err)
          })
    }
  },
  created() {
    this.slug = this.$route.params.slug
    this.getPost()
  }
}
</script>
