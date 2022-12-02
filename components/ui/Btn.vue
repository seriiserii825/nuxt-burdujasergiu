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
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  background: $accent;
  border: 1px solid hsla(0, 0%, 40%, .8);
  border-radius: 50px;
  transition: all .4s;
  cursor: pointer;
  &:hover {
    background: darken($accent, 20%);
  }
  &.small {
    font-size: 1.2rem;
  }
  &.dark {
    background-color: #000;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.4rem;
    height: 100%;
  }
}
</style>
