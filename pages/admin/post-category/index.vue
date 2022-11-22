<template>
  <AdminForm label="Post categories">
    <AdminTable>
      <header class="form__top">
        <nuxt-link to="/admin/post-category/create" class="btn">Add new</nuxt-link>
        <div class="search">
          <label htmlFor="search">Search:</label>
          <input type="text" v-model="search" @input="onSearch" />
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
              <img
                :src="`${server_url}${item.image}`"
                width="100"
                alt=""
              />
            </td>
            <td>{{ item.title }}</td>
            <td>
              <span class="badge" :class="badgeClass(item)">
                {{ item.status }}
              </span>
            </td>
            <td>
              <nuxt-link :to="`/admin/post-category/` + item.id">
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
        .delete("/auth/post-category/" + id)
        .then(() => {
          this.getData();
        })
        .catch((err) => {
          console.log(err.response.data.message, "err.response");
        });
    },
    getData() {
      this.$axios
        .get("/auth/post-category")
        .then((res) => {
          this.data = res.data;
          console.log(this.data, "this.data");
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
