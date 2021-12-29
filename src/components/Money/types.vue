<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "types",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types {
  background-color: $color-highlight;
  display: flex;
  text-align: center;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    font-size: 24px;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 100%;
      height: 4px;
      background-color: #555555;
    }
  }
}
</style>