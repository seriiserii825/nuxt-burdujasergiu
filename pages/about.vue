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
  layout: 'default'
}
</script>
<style lang="scss">
.page-about {
}
</style>

