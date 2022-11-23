<template>
  <AdminForm label="Create post">
    <div class="form__flex">
      <div class="form__item" :class="{ 'form__item--error': errors.name }">
        <label class="form__label" htmlFor="name">Title</label>
        <input
          ref="first"
          type="text"
          placeholder="Enter title..."
          v-model="title"
          @change="setSlug"
        />
        <p v-if="errors && errors.title" class="text-error">
          {{ errors.title[0] }}
        </p>
      </div>
      <div class="form__item" :class="{ 'form__item--error': errors.name }">
        <label class="form__label" htmlFor="name">Slug</label>
        <input type="text" placeholder="Enter slug..." v-model="slug" />
        <p v-if="errors && errors.slug" class="text-error">
          {{ errors.slug[0] }}
        </p>
      </div>
    </div>
    <div class="form__item" :class="{ 'form__item--error': errors.text }">
      <label class="form__label" for="text">Content</label>
      <client-only>
        <mavon-editor v-model="text" language="en"></mavon-editor>
      </client-only>
      <p class="text-error" v-if="errors && errors.text">
        {{ errors.text[0] }}
      </p>
    </div>
    <div class="form__flex">
      <div class="form__item">
        <label class="form__label" for="post_category_id">Category</label>
        <select
          id="post_category_id"
          name="post_category_id"
          v-model="post_category_id"
        >
          <option v-for="item in categories" :key="item.id" :value="item.id">
            {{ item.title }}
          </option>
        </select>
        <p class="text-error" v-if="errors &amp;&amp; errors.post_category_id">
          {{ errors.post_category_id[0] }}
        </p>
      </div>
      <div class="form__item">
        <label class="form__label" htmlFor="select">Status</label>
        <select name="status" id="status" v-model="status">
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>
        <p v-if="errors.status" class="text-error">
          {{ errors.status[0] }}
        </p>
      </div>
    </div>
    <button class="btn" @click="onSubmit">Submit</button>

    <AdminMedia
      v-if="showMedia"
      @on-close="closeMedia"
      @on-images="setMediaImages"
    />
  </AdminForm>
</template>
<script>
import AdminMedia from "@/admin/media/AdminMedia";
import AdminForm from "@/admin/form/Form";
export default {
  layout: "admin",
  data() {
    return {
      title: "",
      slug: "",
      text: "",
      status: "1",
      post_category_id: "",
      categories: [],
      image: "",
      media_images: [],
      errors: {},
      showMedia: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const data = {
        title: this.title,
        slug: this.slug,
        text: this.text,
        post_category_id: this.post_category_id,
        image: this.image,
        status: this.status,
      };

      this.$axios
        .post("/auth/post", data)
        .then(() => {
          this.$router.push("/admin/post");
        })
        .catch((err) => {
          if (err.response.data && err.response.data.errors) {
            this.errors = err.response.data.errors;
          }
        });
    },
    getCategories() {
      this.$axios.get("/auth/post-category").then((res) => {
        this.categories = res.data;
        this.post_category_id = res.data[0].id;
      });
    },
    setSlug() {
      this.slug = this.title.toLowerCase().replace(/ /g, "-");
    },
    coverImageHandler() {
      document.body.style.overflow = "hidden";
      this.showMedia = true;
    },
    closeMedia() {
      document.body.style.overflow = "initial";
      this.showMedia = false;
    },
    setMediaImages(images) {
      this.media_images = images;
      this.image = images[0];
    },
  },
  components: {
    AdminForm,
    AdminMedia,
  },
  created() {
    this.getCategories();
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.first.focus();
    });
  },
};
</script>
