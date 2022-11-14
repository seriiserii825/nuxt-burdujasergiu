<template>
  <div class="portfolios">
    <PortfolioComponent v-for="item in current_count" :key="item" />
  </div>
</template>
<script>
import PortfolioComponent from "~/components/elements/PortfolioComponent";

export default {
  props: {
    count: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      current_count: 0
    }
  },
  components: {PortfolioComponent},
  mounted() {
    this.current_count = this.count;
  }
}
</script>
<style lang="scss">
.portfolios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 32rem));
  grid-gap: 4rem;
}
</style>
