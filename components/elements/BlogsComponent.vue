<template>
  <div class="blogs" :style="`justify-content: ${align}`">
    <div class="blogs__item" v-for="item in blogs_count" :key="item">
      <blog-component title="Text gradient" date="11 April 2022" img_url="/images/css.jpg"/>
    </div>
  </div>
</template>
<script>
import BlogComponent from "~/components/elements/BlogComponent";

export default {
  props: {
    count: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "center"
    },
  },
  data() {
    return {
      blogs_count: 0
    }
  },
  components: {BlogComponent},
  mounted() {
    this.blogs_count = this.count === 0 ? 10 : this.count;
  }
}
</script>
<style lang="scss">
.blogs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 25rem));
  justify-content: center;
  grid-gap: 2rem;
}
</style>
