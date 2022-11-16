<template lang="pug">
  div.btn(:class="{small: size === 'small', dark: bg === 'dark'}")
    slot
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: ""
    },
    bg: {
      type: String,
      default: ""
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/partials/variables.scss";
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  height: 3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  border: 1px solid hsla(0, 0%, 40%, .8);
  border-radius: 50px;
  transition: all .4s;
  cursor: pointer;
  &.small {
    font-size: 1.2rem;
  }
  &.dark {
    background-color: #000;
  }
}
</style>
