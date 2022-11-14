<template lang="pug">
  div.about
    .about__img(:class="{'active': img_changed}")
      img(src="/images/serii.jpg" alt="")
    .about__content
      h2.about__title.title Fullstack Developer
      .about__text
        p На моем сайте фрилансера веб-разработчика в портфолио представлены проекты, которые я разработал в течение последних шести лет как в сотрудничестве с веб-студиями так и для частных клиентов, а также несколько личных проектов.
        p Большинство из этих сайтов были разработаны с использованием CMS Joomla, CMS WordPress. Основная масса проектов содержит индивидуальные функции предназначенные для реализации особенностей работы веб-сайта.
        p Помимо созданных сайтов в портфолио, мной также разработаны различные калькуляторы, сложные формы обратной связи, многоуровневое меню, слайдера изображений, отзывов и тд., множество обновлений CMS на новую версию с переносом всего контента со старой с сохранением функционала веб-сайта, исправлений различных ошибок на сайтах, оптимизация загрузки сайта, наполнение сайта до 15000 товаров, материалом (текстовой информацией) и многое другое... Источник: http://coder-oldboy.com/
      Btn(v-if="show_btn")
        router-link(to="/about") Обо мне

</template>
<script>
import Btn from "~/components/ui/Btn";

export default {
  props: {
    show_btn: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      img_changed: false
    }
  },
  components: {
    Btn
  },
  mounted() {
    setTimeout(() => {
      this.img_changed = true;
    }, 1000);
  }
}
</script>
<style lang="scss">
.about {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10rem;
  &__img {
    flex: 0 0 50rem;
    transition: all 1s ease-in;
    &.active {
      filter: grayscale(1);
      opacity: .6;
    }
  }
  &__content {
    flex: 1;
    padding: 8rem;
  }
  &__title {
    margin-bottom: 5rem;
  }
}
</style>
