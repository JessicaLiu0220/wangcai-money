<template>
  <div class="nav">
    <router-link to="/labels">L标签</router-link>/
    <router-link to="/money">M记账</router-link>/
    <router-link to="/statistics">S统计</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
  height: 100px;
}
</style>