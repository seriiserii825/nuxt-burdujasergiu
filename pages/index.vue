<template>
  <div class="home">
    <Intro/>
    <section-header title="Обо мне"/>
    <About/>
    <section-header title="Последние посты"/>
    <div class="last-posts">
      <blogs-component :posts="posts" align="center"/>
      <div class="last-posts__btn">
        <btn>
          <router-link to="/blog">Посмотреть все посты</router-link>
        </btn>
      </div>
    </div>
    <section-header title="Последние работы порртфолио"/>
    <div class="last-portfolio">
      <PortfoliosComponent v-if="portfolios && portfolios.length" :portfolios="portfolios"/>
    </div>
  </div>
</template>

<script>
import BlogsComponent from "@/elements/BlogsComponent";
import PortfoliosComponent from "@/elements/PortfoliosComponent";
import About from "@/sections/About";
import Intro from "@/sections/Intro";
import Btn from "@/ui/Btn";
import SectionHeader from "@/ui/SectionHeader";

export default {
  head() {
    return {
      title: this.siteTitle + " | Главная",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ' На моем сайте фрилансера веб-разработчика в портфолио представлены проекты, которые я разработал в течение последних шести лет как в сотрудничестве с веб-студиями так и для частных клиентов, а также несколько личных проектов.'
        }
      ]
    }
  },
  components: {
    PortfoliosComponent,
    Btn,
    BlogsComponent,
    SectionHeader,
    About,
    Intro,
  },
  layout: "default",
  computed: {
    siteTitle() {
      return this.$store.state.site_title;
    }
  },
  async asyncData({store}) {
    try {
      await store.dispatch("post/fetchData", {
        limit: 5,
        offset: 0,
        post_category_id: 0
      });
      await store.dispatch("portfolio/fetchData", {taxonomy_id: 0, offset: 0, limit: 4});
      const posts = await store.state["post"];
      let portfolios = store.state["portfolio"];
      return {
        posts: posts.data.data,
        portfolios: portfolios.data.data
      };
    } catch (e) {
      return {error: e.response.data.error.message};
    }
  },
};
</script>
<style lang="scss">
.last-posts {
  padding: 10rem;
  &__btn {
    margin-top: 6rem;
    text-align: center;
  }
}
.last-portfolio {
  padding: 10rem;
}
</style>
