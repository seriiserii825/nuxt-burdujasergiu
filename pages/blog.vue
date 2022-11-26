<template>
  <div class="page-blog">
    <section-header title="Блог"></section-header>
    <div class="page-blog__wrap">
      <main class="page-blog__content">
        <blogs-component v-if="posts" :posts="posts"/>
        <client-only>
          <vue-paginate
              :hide-prev-next="true"
              :page-count="total_pages"
              :page-range="5"
              :margin-pages="2"
              :click-handler="goToPage"
              :prev-text="'<<'"
              :next-text="'>>'"
              :container-class="'pagination'"
              :page-class="'page-item'"
              v-model="page"
          >
          </vue-paginate>
        </client-only>
      </main>
      <aside class="page-blog__sidebar">
        <CategoryListComponent :categories="post_categories.data"/>
      </aside>
    </div>
  </div>
</template>
<script>
import BlogComponent from "@/elements/BlogComponent";
import BlogsComponent from "@/elements/BlogsComponent";
import CategoryListComponent from "@/elements/CategoryListComponent";
import SectionHeader from "@/ui/SectionHeader";
import VuePaginate from "vuejs-paginate/src/components/Paginate.vue";

export default {
  components: {
    BlogsComponent,
    CategoryListComponent,
    BlogComponent,
    SectionHeader,
    VuePaginate,
  },
  layout: "default",
  data() {
    return {
      page: 1,
      per_page: 4
    };
  },
  async asyncData({store}) {
    try {
      let data = await store.state["post-categories"].data;
      let posts = await store.state["post"].data;
      if (!data.length) {
        await store.dispatch("post-categories/fetchData");
        data = await store.state["post-categories"];
      }
      if (!posts.length) {
        await store.dispatch("post/fetchData", {
          limit: 4,
          offset: 0,
        });
        posts = await store.state["post"];
      }
      return {
        post_categories: data,
        posts: posts.data.data,
        total: posts.data.total
      };
    } catch (e) {
      return {error: e.response.data.error.message};
    }
  },
  methods: {
    async goToPage(page) {
      this.page = page;
      await this.$store.dispatch("post/fetchData", {
        limit: this.per_page,
        offset: (page - 1) * this.per_page,
      });
      let posts = await this.$store.state["post"];
      this.posts = posts.data.data;
    },
  },
  created() {
    this.total_pages = Math.ceil(this.total / this.per_page);
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
