<template>
  <div id="app">
    <!-- 当在哪个组件的路径时就显示哪个组件的内容 -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: "#ffffff";
  line-height: 1.5;
  font-family: $font-hei;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
