<template>
  <button class="button" @click="$emit('click', $event)"><slot /></button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.createTag-wrapper {
  text-align: center;
  padding: 24px;
  > .button {
    font-size: 16px;
    background: $color-shadow;
    border: none;
    border: 0.5px solid #404040;
    border-radius: 5px;
    padding: 5px 16px;
  }
}
</style>