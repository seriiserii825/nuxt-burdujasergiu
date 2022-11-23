<template>
  <AdminForm label="Post list">
    <AdminTable>
      <header class="form__top">
        <nuxt-link to="/admin/post/create" class="btn">Add new</nuxt-link>
        <div class="search">
          <label htmlFor="search">Search:</label>
          <input type="text" v-model="search" @input="onSearch" />
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.slug }}</td>
            <td>{{ item.category.title }}</td>
            <td>
              <span class="badge" :class="badgeClass(item)">
                {{ item.status }}
              </span>
            </td>
            <td>
              <nuxt-link :to="`/admin/post/` + item.id">
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
      let prompt = confirm("Are you sure you want to delete this item?", "");
      if (prompt) {
        this.$axios
          .delete("/auth/post/" + id)
          .then(() => {
            this.getData();
          })
          .catch((err) => {
            console.log(err.response.data.message, "err.response");
          });
      }
    },
    getData() {
      this.$axios
        .get("/auth/post")
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
