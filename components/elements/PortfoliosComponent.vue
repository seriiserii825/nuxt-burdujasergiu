<template>
  <div class="portfolios" v-if="portfolios && portfolios.length">
    <div class="portfolios__wrap">
      <PortfolioComponent v-for="item in portfolios" :item="item" :key="item.id"/>
    </div>
  </div>
</template>
<script>
import PortfolioComponent from "~/components/elements/PortfolioComponent";

export default {
  props: {
    portfolios: {
      type: Array,
      required: true
    }
  },
  components: {PortfolioComponent},
}
</script>
<style lang="scss">
.portfolios {
  &__wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
    grid-gap: 4rem;
  }
}
</style>