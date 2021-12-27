<template>
  <div>
    <!-- 当在哪个组件的路径时就显示哪个组件的内容 -->
    <router-view />
    <hr />
    <router-link to="/labels">L标签</router-link>/
    <router-link to="/money">M记账</router-link>/
    <router-link to="/statistics">S统计</router-link>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
