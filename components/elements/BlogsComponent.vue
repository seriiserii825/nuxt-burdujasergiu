<template>
  <div class="blogs" v-if="posts" :style="`justify-content: ${align}`">
    <div class="blogs__item" v-for="post in posts" :key="post.id">
      <blog-component
        :title="post.title"
        :date="post.created_at"
        img_url="/images/css.jpg"
      />
    </div>
  </div>
</template>
<script>
import BlogComponent from "~/components/elements/BlogComponent";

export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    count: {
      type: Number,
      default: 0,
    },
    align: {
      type: String,
      default: "center",
    },
  },
  data() {
    return {
      //
    };
  },
  components: { BlogComponent },
  mounted() {
    console.log(this.posts, "this.posts");
  },
};
</script>
<style lang="scss">
.blogs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 25rem));
  justify-content: center;
  grid-gap: 2rem;
}
</style>
