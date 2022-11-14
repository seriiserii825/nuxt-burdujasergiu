<template>
  <div class="page-portfolio">
    <section-header title="Все работы"/>
    <div class="page-portfolio__wrap">
      <div class="page-portfolio__filter">
        <btn>
          <a href="#">Catalog</a>
        </btn>
        <btn>
          <a href="#">Ecommerce</a>
        </btn>
        <btn>
          <a href="#">Landing</a>
        </btn>
        <btn>
          <a href="#">Builder</a>
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
  components: {SectionHeader, Btn, PortfoliosComponent}
}
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
