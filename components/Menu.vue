<template lang="pug">
  ul.menu
    li
      nuxt-link(to="/") Главная
    li
      nuxt-link(to="/about") Обо мне
    li
      nuxt-link(to="/blog" :class="{'nuxt-link-exact-active': isRouteActive('post')}") Блог
    li
      nuxt-link(to="/services") Услуги
    li
      nuxt-link(to="/portfolio" :class="{'nuxt-link-exact-active': isRouteActive('portfolio')}") Портфолио
</template>
<script>
export default {
  methods: {
    isRouteActive(str) {
      const router_path = this.$route.path;
      return router_path.includes(str);
    },
  },
  mounted() {
    this.isRouteActive('blog');
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/partials/variables.scss";
.menu {
  a {
    position: relative;
    display: inline-block;
    margin-bottom: 3rem;
    font-size: 1.8rem;
    color: white;
    &:hover {
      &::before {
        opacity: 1;
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 1rem;
      right: -3rem;
      width: 2rem;
      height: 2px;
      background-color: $accent;
      opacity: 0;
      transition: all .4s;
    }
    &.nuxt-link-exact-active {
      color: $accent;
      &::before {
        opacity: 1;
      }
    }
  }
}
</style>
