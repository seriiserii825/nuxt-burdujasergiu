<template>
  <div class="page-blog">
    <section-header title="Блог"></section-header>
    <div class="page-blog__wrap">
      <main class="page-blog__content">
        <blogs-component/>
      </main>
      <aside class="page-blog__sidebar">
        <CategoryListComponent/>
      </aside>
    </div>
  </div>
</template>
<script>
import BlogComponent from "@/elements/BlogComponent";
import BlogsComponent from "@/elements/BlogsComponent";
import CategoryListComponent from "@/elements/CategoryListComponent";
import SectionHeader from "@/ui/SectionHeader";

export default {
  components: {BlogsComponent, CategoryListComponent, BlogComponent, SectionHeader},
  layout: 'default'
}
</script>
<style lang="scss">
.page-blog {
  &__wrap {
    display: flex;
    justify-content: space-between;
    padding: 4rem;
  }
  &__content {
    width: 70%;
  }
  &__sidebar {
    width: 20%;
  }
}
</style>
