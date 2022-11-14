<template>
  <div class="footer">
    <Logo/>
    <ul>
      <li>
        <a href="#"> </a>
      </li>
    </ul>
    <p>Copyright 2021 portfolio. All rights reserved</p>
  </div>
</template>
<style lang="scss">
</style>
<script>
import Logo from "./Logo";
export default {
  components: {
    Logo
  }
}
</script>
<style lang="scss">
.footer {
  padding: 6rem 3rem;
  text-align: center;
  background-color: black;
  .logo {
    margin-bottom: 3rem;
  }
}
</style>
