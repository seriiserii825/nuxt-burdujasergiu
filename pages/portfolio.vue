<template>
  <div class="page-portfolio">
    <section-header title="Все работы"/>
    <div class="page-portfolio__wrap">
      <div class="page-portfolio__filter" v-if="taxonomies && taxonomies.length">
        <btn v-for="category in taxonomies" :key="category.id">
          <span>{{ category.title }}</span>
        </btn>
      </div>
      <PortfoliosComponent/>
    </div>
  </div>
</template>
<script>
import PortfoliosComponent from "~/components/elements/PortfoliosComponent";
import Btn from "~/components/ui/Btn";
import SectionHeader from "~/components/ui/SectionHeader";

export default {
  components: {SectionHeader, Btn, PortfoliosComponent},
  async asyncData({store}) {
    try {
      let data = await store.state["taxonomy"].data;
      if (!data.length) {
        await store.dispatch("taxonomy/fetchData");
        data = await store.state["taxonomy"].data;
      }
      console.log(data, 'data')
      return {
        taxonomies: data.data,
      };
    } catch (e) {
      return {error: e.response.data.error.message};
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
</style>
