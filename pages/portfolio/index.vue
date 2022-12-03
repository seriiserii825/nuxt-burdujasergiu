<template>
  <div class="page-portfolio">
    <section-header title="Все работы"/>
    <div class="page-portfolio__wrap">
      <div class="admin-search">
        <input ref="search" type="text" placeholder="Search..." v-model="search" @input="onSearch"/>
      </div>
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
        <div class="portfolios__wrap">
          <PortfolioComponent v-for="item in portfolios" :item="item" :key="item.id"/>
        </div>

        <client-only>
          <vue-paginate
              v-if="total_pages > 1"
              :hide-prev-next="true"
              :page-count="total_pages"
              :page-range="5"
              :margin-pages="2"
              :click-handler="goToPage"
              :prev-text="'<<'"
              :next-text="'>>'"
              :container-class="'pagination'"
              :page-class="'page-item'"
              v-model="page"
          >
          </vue-paginate>
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
import PortfoliosComponent from "@/elements/PortfoliosComponent";
import Btn from "@/ui/Btn";
import SectionHeader from "@/ui/SectionHeader";
import PortfolioComponent from "@/elements/PortfolioComponent";
import VuePaginate from "vuejs-paginate/src/components/Paginate.vue";

export default {
  components: {
    PortfolioComponent, SectionHeader, Btn, PortfoliosComponent,
    VuePaginate,
  },
  data() {
    return {
      page: 1,
      per_page: 4,
      taxonomy_id: 0,
      search: ""
    }
  },
  async asyncData({store}) {
    try {
      await store.dispatch("taxonomy/fetchData");
      await store.dispatch("portfolio/fetchData", {taxonomy_id: 0, offset: 0, limit: 4});
      let data = store.state["taxonomy"].data;
      let portfolios = store.state["portfolio"].data;

      return {
        taxonomies: data.data,
        portfolios: portfolios.data ? portfolios.data : [],
        total: portfolios.total
      };
    } catch (e) {
      console.log(e, 'e')
      return {error: e};
    }
  },
  methods: {
    async filterByTaxonomy(id) {
      this.taxonomy_id = id;
      this.page = 1;
      await this.$store.dispatch("portfolio/fetchData", {
        limit: this.per_page,
        offset: 0,
        taxonomy_id: id
      });
      this.portfolios = await this.$store.state["portfolio"].data.data;
      this.total = this.$store.state["portfolio"].data.total;
    },
    async goToPage(page) {
      this.page = page;
      await this.$store.dispatch("portfolio/fetchData", {
        limit: this.per_page,
        offset: (page - 1) * this.per_page,
        taxonomy_id: this.taxonomy_id
      });
      this.portfolios = this.$store.state["portfolio"].data.data;
    },
    async onSearch() {
      await this.$store.dispatch("portfolio/fetchData", {
        limit: this.per_page,
        offset: (this.page - 1) * this.per_page,
        taxonomy_id: this.taxonomy_id,
        search: this.search
      });
      this.portfolios = this.$store.state["portfolio"].data.data;
      this.total = this.$store.state["portfolio"].data.total;
    }
  },
  computed: {
    total_pages() {
      return Math.ceil(this.total / this.per_page);
    }
  }
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
  &__wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
    grid-gap: 4rem;
  }
}
</style>
