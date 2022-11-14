<template>
  <div class="category-list">
    <h2 class="category-list__title">Категории</h2>
    <ul class="category-list__items">
      <li>Css</li>
      <li>React</li>
      <li>Vue</li>
      <li>Laravel</li>
      <li>Ubuntu</li>
      <li>Linux</li>
      <li>I3wm</li>
    </ul>
  </div>
</template>
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
    box-shadow: 4px 8px 16px -4px rgba(0, 0, 0, .3);
    border: 1px solid #444;
    transition: all .4s;
    cursor: pointer;
    &:hover {
      background-color: $accent;
      transform: translateX(-1rem);
    }
  }
}
</style>
