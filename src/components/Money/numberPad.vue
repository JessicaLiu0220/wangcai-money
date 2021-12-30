<template>
  <div class="numberPad">
    <div class="buttons clearfix">
      <button class="item" active-class="selected">1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清除</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button>.</button>
      <button class="zero">0</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class NumberPad extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .buttons {
    @extend %clearfix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      border: 0.5px solid #e0e0e0;
      background: $color-shadow;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
    }
  }
}
</style>