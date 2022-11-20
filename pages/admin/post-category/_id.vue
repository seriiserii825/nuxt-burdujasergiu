<template>
  <AdminForm label="Edit category">
    <div class="form__flex">
      <div class="form__item" :class="{ 'form__item--error': errors.name }">
        <label class="form__label" htmlFor="name">Title</label>
        <input type="text" placeholder="Enter title..." v-model="title" />
        <p v-if="errors && errors.title" class="text-error">
          {{ errors.title[0] }}
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
    <div class="form__flex">
      <div class="form__item">
        <label class="form__label" htmlFor="image">Cover image</label>
        <button class="btn btn--success" @click="coverImageHandler">
          Add image
        </button>
        <p v-if="image" class="form__url">{{ image }}</p>
        <p v-if="errors.image" class="text-error">
          {{ errors.image[0] }}
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
      status: "",
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
        image: this.image,
        status: this.status,
      };

      this.$axios
        .put("/auth/post-category/" + this.id, data)
        .then(() => {
          this.$router.push("/admin/post-category");
        })
        .catch((err) => {
          if (err.response.data && err.response.data.errors) {
            this.errors = err.response.data.errors;
          }
        });
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
    getData() {
      this.$axios
        .get("/auth/post-category/" + this.id)
        .then((res) => {
          console.log(res, "res");
          const { title, image, status } = res.data;
          this.title = title;
          this.image = image;
          this.status = status;
        })
        .catch((err) => {
          if (err.response.data && err.response.data.errors) {
            setErrors(err.response.data.errors);
          }
        });
    },
  },
  components: {
    AdminForm,
    AdminMedia,
  },
  created() {
    this.id = this.$route.params.id;
    this.getData();
  },
};
</script>
