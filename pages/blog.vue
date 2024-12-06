<template>
  <div class="page-blog">
    <section-header title="Блог"></section-header>
    <div class="page-blog__wrap">
      <main class="page-blog__content">
        <div>
          <div class="admin-search">
            <input ref="search" type="text" placeholder="Search..." v-model="search" @input="onSearch"/>
          </div>
          <blogs-component v-if="posts" :posts="posts"/>
        </div>
        <client-only>
          <vue-paginate
              v-if="total_pages > 1"
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
  head() {
    return {
      title: this.siteTitle + " | Блог",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Блог – это личный дневник в Интернете. Блог нужен для того, чтобы писать каждый день или раз в неделю о своей личной жизни, работе или хобби. Чтобы публиковать мысли, заметки, фотографии и видеозаписи.'
        }
      ]
    }
  },
  data() {
    return {
      page: 1,
      per_page: 4,
      post_category_id: 0,
      search: ""
    };
  },
  async asyncData({store}) {
    try {
      await store.dispatch("post-categories/fetchData");
      let data = await store.state["post-categories"];
      console.log("data", data);
      const post_category_id = store.state["post"].post_category_id;
      await store.dispatch("post/fetchData", {
        limit: 4,
        offset: 0,
        post_category_id: post_category_id
      });
      const posts = await store.state["post"];
      console.log("posts", posts);
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
      const post_category_id = this.$store.state["post"].post_category_id;
      await this.$store.dispatch("post/fetchData", {
        limit: this.per_page,
        offset: (page - 1) * this.per_page,
        post_category_id: post_category_id
      });
      let posts = await this.$store.state["post"];
      this.posts = posts.data.data;
    },
    onSearch() {
      this.$store.dispatch("post/fetchData", {
        limit: this.per_page,
        offset: 0,
        post_category_id: this.post_category_id,
        search: this.search
      });
      let posts = this.$store.state["post"];
      this.posts = posts.data.data;
    }
  },
  computed: {
    siteTitle() {
      return this.$store.state.site_title;
    },
    load_posts() {
      return this.$store.state["post"].load_posts;
    },
    total_pages() {
      return Math.ceil(this.total / this.per_page);
    }
  },
  watch: {
    load_posts(val) {
      this.posts = this.$store.state["post"].data.data;
      this.page = 1;
      this.total = this.$store.state["post"].data.total;
      this.per_page = this.$store.state["post"].limit;
      this.$store.dispatch("post/setLoadPosts", false);
    },
  },
  mounted() {
    this.$refs.search.focus();
  }
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
