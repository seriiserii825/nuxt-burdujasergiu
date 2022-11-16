<template lang="pug">
  ul.admin-menu
    AdminMenuItem(label='Dashboard', icon='/svg/dashboard.svg', url='/admin', :link='true')
    AdminMenuItem(label='Post category', icon='/svg/category.svg', :items="[{ url: '/admin/post-category/create' }, { url: '/admin/post-category' }]")
    AdminMenuItem(label='Post', icon='/svg/category.svg', :items="[{ url: '/admin/post/create' }, { url: '/admin/post' }]")
</template>
<script>
import AdminMenuItem from "./AdminMenuItem.vue";

export default {
  name: "AdminMenu",
  components: {
    AdminMenuItem,
  },
};
</script>
<style lang="scss">
</style>
