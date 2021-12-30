<template>
  <div class="remarks">
    <label class="notes">
      <span class="name">备注：</span>
      <input type="text" v-model="value" placeholder="请输入需要备注的内容" />
    </label>
    <div class="output">1.00</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Remarks extends Vue {
  value = "";
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.remarks {
  display: flex;
  background: $color-shadow;
  height: 54px;
  border: 0.5px solid #e0e0e0;
  .notes {
    width: 75%;
    .name {
      padding: 0 10px;
    }
    input {
      padding: 16px 0;
      flex-grow: 1;
      background-color: transparent;
      border: none;
    }
  }
  .output {
    display: flex;
    width: 25%;
    // font-family: Consolas, monospace;
    font-size: 24px;
    justify-content: center;
    align-items: center;
  }
}
</style>