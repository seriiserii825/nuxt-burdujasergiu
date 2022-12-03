<template>
  <div class="page-about">
    <Skills/>
    <section-header title="Обо мне"></section-header>
    <About :show_btn="false"/>
  </div>
</template>
<script>
import Skills from "@/sections/Skills";
import SectionHeader from "@/ui/SectionHeader";
import About from "@/sections/About";

export default {
  components: {Skills, SectionHeader, About},
  layout: 'default',
  head() {
    return {
      title: this.siteTitle + " | Обо мне",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Помимо созданных сайтов в портфолио, мной также разработаны различные калькуляторы, сложные формы обратной связи, многоуровневое меню, слайдера изображений, отзывов и тд'
        }
      ]
    }
  },
  computed: {
    siteTitle() {
      return this.$store.state.site_title;
    }
  },
}
</script>
<style lang="scss">
.page-about {
}
</style>

