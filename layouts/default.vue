<template lang="pug">
  .default
    .default__wrap
      .default__menu
        .default__menu-logo
          Logo
        Menu
      .default__content
        Nuxt
    Footer
</template>
<script>
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default {
  components: {
    Menu,
    Logo,
    Footer
  }
}
</script>
<style lang="scss">
.default {
  &__wrap {
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
  }
  &__menu {
    padding: 15rem 4rem;
    flex: 0 0 23rem;
    background: red;
    &-logo {
      margin-bottom: 4rem;
      .logo {
        text-align: left;
      }
    }
  }
  &__content {
    flex: 1;
  }
}
</style>
