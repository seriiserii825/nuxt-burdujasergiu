<template>
  <div class="section-header">
    <h2 class="section-header__title">{{ title }}</h2>
    <h3 class="section-header__subtitle">{{ subtitle }}</h3>
  </div>
</template>
<script>
export default {
  props: ['title', 'subtitle']
}
</script>
<style lang="scss">
.section-header {
  padding: 2rem;
  text-align: center;
  background-color: #121212;
  &__title {
    margin-bottom: 0.8rem;
    font-size: 1.8rem;
    font-weight: normal;
  }
  &__subtitle {
    font-size: 3.2rem;
    font-weight: 700;
    text-transform: capitalize;
  }
}
</style>
