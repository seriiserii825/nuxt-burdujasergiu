<template>
  <div class="service">
    <div class="service__icon">
      <div class="service__circle"></div>
      <slot></slot>
    </div>
    <h3 class="service__title">{{ title }}</h3>
    <div class="service__text">
      <p>{{ text }}</p>
    </div>
    <Btn>
      <a target="_blank" :href="url">Читать далее...</a>
    </Btn>
  </div>
</template>
<script>
import Btn from "~/components/ui/Btn";
export default {
  components: {Btn},
  props: ['title', 'text', 'url']
}
</script>
<style lang="scss">
@keyframes rotateX {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}
.service {
  text-align: center;
  &:hover {
    .service__icon {
      background-color: #222;
      box-shadow: 0 6px 16px -4px rgba(0,0,0,.3);
      img {
        animation: rotateX 2s infinite linear forwards;
      }
    }
  }
  &__icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 3rem;
    width: 12rem;
    height: 12rem;
    overflow: hidden;
    border-radius: 50%;
    transition: all .6s;
  }
  &__circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #444;
    border-radius: 50%;
  }
  &__title {
    margin-bottom: 2rem;
    font-size: 2.8rem;
    font-weight: 600;
    color: #fff;
  }
}
</style>
