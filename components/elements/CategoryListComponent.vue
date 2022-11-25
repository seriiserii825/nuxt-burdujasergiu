<template>
  <div class="category-list">
    <h2 class="category-list__title">Категории</h2>
    <ul v-if="categories && categories.length" class="category-list__items">
      <li v-for="category in categories" :key="category.id">{{category.title}}</li>
    </ul>
    <h3 v-else>No categories...</h3>
  </div>
</template>
<script>
export default {
  name: "CategoryListComponent",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/partials/variables.scss";
.category-list {
  &__title {
    margin-bottom: 2rem;
  }
  li {
    position: relative;
    margin-bottom: 1rem;
    padding: 1rem 3rem;
    color: #eee;
    background-color: #222;
    box-shadow: 4px 8px 16px -4px rgba(0, 0, 0, 0.3);
    border: 1px solid #444;
    transition: all 0.4s;
    cursor: pointer;
    &:hover {
      background-color: $accent;
      transform: translateX(-1rem);
    }
  }
}
</style>
