<template>
  <div class="home">
    <Intro />
    <section-header title="Обо мне" />
    <About />
    <section-header title="Последние посты" />
    <div class="last-posts">
      <blogs-component :count="3" align="center" />
      <div class="last-posts__btn">
        <btn>
          <router-link to="/blog">Посмотреть все посты</router-link>
        </btn>
      </div>
    </div>
    <section-header title="Последние работы порртфолио" />
    <div class="last-portfolio">
      <PortfoliosComponent :count="3" />
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
  components: {
    PortfoliosComponent,
    Btn,
    BlogsComponent,
    SectionHeader,
    About,
    Intro,
  },
  layout: "default",
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
