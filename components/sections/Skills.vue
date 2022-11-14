<template>
  <div class="skills">
    <section-header title="Мои навыки"/>
    <div class="skills__wrap">
      <div class="skills__item">
        <ProgressComponent title="Vue" :percent="90" color="green"  logo_url="/svg/vue.svg"/>
      </div>
      <div class="skills__item">
        <ProgressComponent title="Wordpress" :percent="100" color="#28719A"  logo_url="/svg/wordpress.svg"/>
      </div>
      <div class="skills__item">
        <ProgressComponent title="React" :percent="60" color="#00D9FD" logo_url="/svg/react.svg"/>
      </div>
      <div class="skills__item">
        <ProgressComponent title="Laravel" :percent="50" color="#E72635" logo_url="/svg/laravel.png"/>
      </div>
    </div>
  </div>
</template>
<script>
import ProgressComponent from "~/components/elements/ProgressComponent";
import SectionHeader from "~/components/ui/SectionHeader";

export default {
  components: {ProgressComponent, SectionHeader},
}
</script>
<style lang="scss">
.skills {
  &__wrap {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 20rem 8rem;
  }
  &__item {
    margin-right: 6rem;
    margin-bottom: 6rem;
    text-align: center;
  }
}
</style>
