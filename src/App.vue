<template>
  <div id="app">
    <!-- 当在哪个组件的路径时就显示哪个组件的内容 -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: "#ffffff";
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
}
</style>
