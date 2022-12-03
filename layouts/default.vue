<template lang="pug">
  .default
    SearchPopup(v-if="is_visible_popup" @hide="hideSearch")
    .show-search(@click="showSearch")
      img(src="/svg/search.svg" width="50" alt="")
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
import SearchPopup from "@/SearchPopup";

export default {
  head() {
    return {
      link: [
        {rel: "canonical", href: "burdujasergiu.com" + this.$route.path}
      ]
    }
  },
  data() {
    return {
      is_visible_popup: false
    }
  },
  methods: {
    showSearch() {
      this.is_visible_popup = true;
    },
    hideSearch() {
      this.is_visible_popup = false;
    }
  },
  components: {
    Menu,
    Logo,
    Footer,
    SearchPopup
  },
  mounted() {
    document.addEventListener('keyup', (e) => {
      if (e.code === 'Escape' && this.is_visible_popup) {
        this.hideSearch();
      }
    });
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
    background: #191919;
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
.show-search {
  position: fixed;
  top: 3rem;
  right: 3rem;
  cursor: pointer;
  transition: all .4s;
  z-index: 99999;
  &:hover {
    transform: scale(0.9);
  }
}
</style>
