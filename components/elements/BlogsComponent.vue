<template>
  <div
      class="blogs"
      v-if="posts  && posts.length > 0"
      :style="`justify-content: ${align}`"
  >
    <div class="blogs__item" v-for="post in posts" :key="post.id">
      <blog-component
          :id="post.id"
          :slug="post.slug"
          :title="post.title"
          :date="post.created_at"
          :img_url="`${siteUrl}/${post.category.image}`"
      />
    </div>
  </div>
  <h3 v-else>No posts found</h3>
</template>
<script>
import BlogComponent from "~/components/elements/BlogComponent";

export default {
  props: {
    posts: {
      type: Array,
      default() {
        return [];
      },
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
  components: {BlogComponent},
  computed: {
    siteUrl() {
      return process.env.siteUrl;
    },
  },
  mounted() {
    // console.log(this.posts, "this.posts");
  },
};
</script>
<style lang="scss">
.blogs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  justify-content: center;
  grid-gap: 2rem;
}
</style>
