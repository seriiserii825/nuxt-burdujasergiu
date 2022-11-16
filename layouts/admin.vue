<template>
  <div class="wrapper" v-if="was_loaded">
    <div class="admin-layout">
      <div
        :class="{ 'admin-layout__sidebar--hidden': !isVisibleSidebar }"
        class="admin-layout__sidebar"
      >
        <admin-sidebar />
      </div>
      <div
        class="admin-layout__body"
        :class="{ 'admin-layout__body--full': !isVisibleSidebar }"
      >
        <admin-header />
        <div class="admin-layout__main">
          <Nuxt />
        </div>
      </div>
    </div>
    <add-media v-if="isVisibleAddMedia" />
  </div>
</template>
<script>
import AdminHeader from "../components/admin/layouts/AdminHeader.vue";
import AdminSidebar from "../components/admin/layouts/AdminSidebar.vue";
import AddMedia from "../components/admin/media/AddMedia.vue";

export default {
  data() {
    return {
      was_loaded: false,
    };
  },
  components: { AdminSidebar, AdminHeader, AddMedia },
  computed: {
    isVisibleSidebar() {
      return this.$store.state.isVisibleSidebar;
    },
    isVisibleAddMedia() {
      return this.$store.state.isVisibleAddMedia;
    },
  },
  created() {
    if (this.$auth && this.$auth.user) {
      setTimeout(() => {
        this.was_loaded = true;
      }, 300);
    } else {
      this.$router.push("/");
    }
  },
};
</script>
<style lang="scss"></style>
