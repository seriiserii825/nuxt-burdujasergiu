<template>
  <AdminForm label="Portfolio">
    <AdminTable>
      <div class="search">
        <label htmlFor="search">Search:</label>
        <input type="text" v-model="search" @input="onSearch" />
      </div>
      <table v-if="data.length">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Taxonomy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
              <img width="100" :src="`${server_url}${item.image}`" alt="" />
            </td>
            <td>{{ item.title }}</td>
            <td>{{ item.slug }}</td>
            <td>{{ item.taxonomy.title }}</td>
            <td>
              <nuxt-link :to="`/admin/portfolio/` + item.id">
                <a class="btn btn--success">Edit</a>
              </nuxt-link>
              <button
                class="btn btn--danger"
                @click="() => deleteItem(item.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </AdminTable>
  </AdminForm>
</template>
<script>
import AdminForm from "@/admin/form/Form.vue";
import AdminTable from "@/admin/form/AdminTable.vue";
export default {
  layout: "admin",
  data() {
    return {
      search: "",
      data: [],
    };
  },
  components: {
    AdminForm,
    AdminTable,
  },
  computed: {
    server_url() {
      return this.$store.state.server_url;
    },
  },
  methods: {
    onSearch() {
      this.getData();
    },
    badgeClass(item) {
      return item.status == "1" ? "badge--success" : "badge--danger";
    },
    formatDate(date) {
      let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      };

      return new Intl.DateTimeFormat("en", options).format(new Date(date));
    },
    deleteItem(id) {
      this.$axios
        .delete("/auth/portfolio/" + id)
        .then(() => {
          this.getData();
        })
        .catch((err) => {
          console.log(err.response.data.message, "err.response");
        });
    },
    getData() {
      this.$axios
        .get("/auth/portfolio")
        .then((res) => {
          this.data = res.data.data;
        })
        .catch((err) => {
          console.log(err.response.data.message, "err.response");
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
