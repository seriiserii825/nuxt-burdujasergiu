<template>
  <div class="page-blog">
    <section-header title="Блог"></section-header>
    <div class="page-blog__wrap">
      <main class="page-blog__content">
        <blogs-component v-if="posts" :posts="posts" />
      </main>
      <aside class="page-blog__sidebar">
        <CategoryListComponent :categories="post_categories" />
      </aside>
    </div>
  </div>
</template>
<script>
import BlogComponent from "@/elements/BlogComponent";
import BlogsComponent from "@/elements/BlogsComponent";
import CategoryListComponent from "@/elements/CategoryListComponent";
import SectionHeader from "@/ui/SectionHeader";

export default {
  components: {
    BlogsComponent,
    CategoryListComponent,
    BlogComponent,
    SectionHeader,
  },
  layout: "default",
  async asyncData({ store }) {
    try {
      let data = await store.state["post-categories"].data;
      let posts = await store.state["post"].data;
      if (!data.length) {
        await store.dispatch("post-categories/fetchData");
        data = await store.state["post-categories"].data;
      }
      if (!posts.length) {
        await store.dispatch("post/fetchData");
        posts = await store.state["post"].data;
      }
      return {
        post_categories: data,
        posts: posts,
      };
    } catch (e) {
      return { error: e.response.data.error.message };
    }
  },
};
</script>
<style lang="scss">
.page-blog {
  &__wrap {
    display: flex;
    justify-content: space-between;
    padding: 4rem;
  }
  &__content {
    width: 75%;
  }
  &__sidebar {
    width: 20%;
  }
}
</style>
