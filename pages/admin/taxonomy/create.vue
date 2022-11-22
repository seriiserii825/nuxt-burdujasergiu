<template>
  <AdminForm label="Create taxonomy">
    <div class="form__flex">
      <div class="form__item" :class="{ 'form__item--error': errors.name }">
        <label class="form__label" htmlFor="name">Title</label>
        <input type="text" placeholder="Enter title..." v-model="title" />
        <p v-if="errors && errors.title" class="text-error">
          {{ errors.title[0] }}
        </p>
      </div>
    </div>
    <button class="btn" @click="onSubmit">Submit</button>
  </AdminForm>
</template>
<script>
import AdminForm from "@/admin/form/Form";
export default {
  layout: "admin",
  data() {
    return {
      title: "",
      errors: {},
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const data = {
        title: this.title,
      };

      this.$axios
        .post("/auth/taxonomy", data)
        .then(() => {
          this.$router.push("/admin/taxonomy");
        })
        .catch((err) => {
          if (err.response.data && err.response.data.errors) {
            this.errors = err.response.data.errors;
          }
        });
    },
  },
  components: {
    AdminForm,
  },
};
</script>
