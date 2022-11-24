<template>
  <div class="page-portfolio">
    <section-header title="Все работы" />
    <div class="page-portfolio__wrap">
      <div class="page-portfolio__filter" v-if="post_categories && post_categories.length">
        <btn v-for="category in post_categories" :key="category.id">
          <span>{{ category.title }}</span>
        </btn>
      </div>
      <PortfoliosComponent />
    </div>
  </div>
</template>
<script>
import PortfoliosComponent from "~/components/elements/PortfoliosComponent";
import Btn from "~/components/ui/Btn";
import SectionHeader from "~/components/ui/SectionHeader";

export default {
  components: { SectionHeader, Btn, PortfoliosComponent },
  async asyncData({ store }) {
    try {
      let data = await store.state["post-categories"].data;
      if (!data.length) {
        await store.dispatch("post-categories/fetchData");
        data = await store.state["post-categories"].data;
      }
      return {
        post_categories: data,
      };
    } catch (e) {
      return { error: e.response.data.error.message };
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
}
</style>
