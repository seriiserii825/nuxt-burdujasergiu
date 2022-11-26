<template>
  <nuxt-link :to="`post/${slug}`" class="blog">
    <div class="blog__img">
      <img :src="img_url" alt=""/>
    </div>
    <div class="blog__content">
      <h2 class="blog__title">{{ title }}</h2>
      <div class="blog__date">{{ date_format }}</div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: ["img_url", "title", "date", "id", "slug"],
  data() {
    return {
      date_format: ''
    };
  },
  mounted() {
    const date = new Date(this.date);
    const options = {
      day: 'numeric', month: 'numeric', year: 'numeric',
    };
    this.date_format = new Intl.DateTimeFormat('ru-RU', options).format(date);
  },
};
</script>
<style lang="scss">
.blog {
  position: relative;
  transition: all 0.4s;
  display: block;
  height: 100%;
  background: #111111;
  outline: 2px solid #444;
  border-radius: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    box-shadow: 4px 8px 16px -4px rgba(0, 0, 0, 0.3);
    transform: scale(1.1);
    .blog__img {
      img {
        position: relative;
        transform: scale(1.1);
      }
    }
  }
  &__img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24rem;
    background-color: #000;
    transition: all 0.4s;
    img {
      width: 60%;
      height: 60%;
      transition: all 1s;
    }
  }
  &__content {
    padding: 2rem;
    color: white;
  }
  &__title {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  &__date {
    font-size: 1.2rem;
  }
}
</style>
