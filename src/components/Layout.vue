<template>
  <div>
    <div
      class="layout-wrapper"
      :class="classPrefix && `${classPrefix}-wrapper`"
    >
      <div class="content" :class="classPrefix && `${classPrefix}-content`">
        <slot />
      </div>
      <Nav />
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: ["classPrefix"],
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex-grow: 1; //尽量把所有的高度都给content
  overflow: auto;
}
</style>