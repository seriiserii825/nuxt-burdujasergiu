<template>
  <div class="portfolios" v-if="portfolios && portfolios.length">
    <PortfolioComponent v-for="item in portfolios" :item="item" :key="item"/>
  </div>
</template>
<script>
import PortfolioComponent from "~/components/elements/PortfolioComponent";

export default {
  async asyncData({store}) {
    try {
      await store.dispatch("portfolio/fetchData");
      const portfolios = store.state["portfolio"].data;
      return {
        portfolios: portfolios ? portfolios.data.data : []
      };
    } catch (e) {
      return {error: e.response.data.error.message};
    }
  },
  components: {PortfolioComponent},
}
</script>
