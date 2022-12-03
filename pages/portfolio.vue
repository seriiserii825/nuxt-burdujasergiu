<template>
  <div class="page-portfolio">
    <section-header title="Все работы"/>
    <div class="page-portfolio__wrap">
      <div class="page-portfolio__filter" v-if="taxonomies && taxonomies.length">
        <btn><span @click="filterByTaxonomy(0)">All</span></btn>
        <btn
            v-for="category in taxonomies"
            :key="category.id"
        >
          <span
              @click="filterByTaxonomy(category.id)"
          >{{ category.title }}</span>
        </btn>
      </div>
      <div class="portfolios">
        <PortfolioComponent v-for="item in portfolios" :item="item" :key="item.id"/>
      </div>
    </div>
  </div>
</template>
<script>
import PortfoliosComponent from "~/components/elements/PortfoliosComponent";
import Btn from "~/components/ui/Btn";
import SectionHeader from "~/components/ui/SectionHeader";
import PortfolioComponent from "@/elements/PortfolioComponent";

export default {
  components: {PortfolioComponent, SectionHeader, Btn, PortfoliosComponent},
  async asyncData({store}) {
    try {
      await store.dispatch("taxonomy/fetchData");
      await store.dispatch("portfolio/fetchData", {taxonomy_id: 0});
      let data = store.state["taxonomy"].data;
      let portfolios = store.state["portfolio"].data;

      return {
        taxonomies: data.data,
        portfolios: portfolios.data
      };
    } catch (e) {
      return {error: e.response.data.error.message};
    }
  },
  methods: {
    async filterByTaxonomy(id) {
      await this.$store.dispatch("portfolio/fetchData", {taxonomy_id: id});
      this.portfolios = await this.$store.state["portfolio"].data.data;
    }
  },
};
</script>
<style lang="scss">
.page-portfolio {
  &__wrap {
    padding: 6rem 10rem;
  }
  &__filter {
    margin-bottom: 6rem;
  }
  .btn {
    margin-right: 1rem;
  }
}
.portfolios {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  grid-gap: 4rem;
}
</style>
