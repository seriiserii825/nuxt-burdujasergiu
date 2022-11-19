<template>
  <AdminForm label="Create post">
    <div class="form__flex">
      <div class="form__item" :class="{ 'form__item--error': errors.title }">
        <label class="form__label" htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Enter title..."
          v-model="title"
          @change="setSlug"
        />
        <p v-if="errors && errors.title" class="text-error">
          {{ errors.title[0] }}
        </p>
      </div>
      <div class="form__item" :class="{ 'form__item--error': errors.title }">
        <label class="form__label" htmlFor="title">Slug</label>
        <input type="text" placeholder="Enter slug..." v-model="slug" />
        <p v-if="errors && errors.slug" class="text-error">
          {{ errors.slug[0] }}
        </p>
      </div>
    </div>
    <div class="form__flex">
      <div class="form__item">
        <label class="form__label" for="taxonomy_id">Taxonomy</label>
        <select id="taxonomy_id" name="taxonomy_id" v-model="taxonomy_id">
          <option v-for="item in taxonomies" :key="item.id" :value="item.id">
            {{ item.title }}
          </option>
        </select>
        <p class="text-error" v-if="errors &amp;&amp; errors.taxonomy_id">
          {{ errors.taxonomy_id[0] }}
        </p>
      </div>
      <div class="form__item" :class="{ 'form__item--error': errors.title }">
        <label class="form__label" htmlFor="title">Url</label>
        <input type="text" placeholder="Enter url..." v-model="url" />
        <p v-if="errors && errors.url" class="text-error">
          {{ errors.url[0] }}
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
import AdminMedia from "@/admin/media/Media";
import AdminForm from "@/admin/form/Form";
export default {
  layout: "admin",
  data() {
    return {
      title: "",
      slug: "",
      url: "",
      taxonomy_id: "",
      taxonomies: [],
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
        taxonomy_id: this.taxonomy_id,
        image: this.image,
        url: this.url,
      };

      this.$axios
        .post("/auth/portfolio", data)
        .then(() => {
          this.$router.push("/admin/portfolio");
        })
        .catch((err) => {
          if (err.response.data && err.response.data.errors) {
            this.errors = err.response.data.errors;
          }
        });
    },
    getCategories() {
      this.$axios.get("/auth/taxonomy").then((res) => {
        this.taxonomies = res.data.data;
        this.taxonomy_id = res.data.data[0].id;
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
        console.log(this.image, "this.image");
    },
  },
  components: {
    AdminForm,
    AdminMedia,
  },
  created() {
    this.getCategories();
  },
};
</script>
