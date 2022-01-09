<template>
  <div>
    <div class="remarks">
      <label class="notes">
        <span class="name">备注：</span>
        <input
          type="text"
          :value="value"
          @change="onValueChange"
          placeholder="请输入需要备注的内容"
        />
      </label>
      <div class="output">{{ output }}</div>
    </div>
    <div class="numberPad">
      <div class="buttons clearfix">
        <button @click="outputNumber">1</button>
        <button @click="outputNumber">2</button>
        <button @click="outputNumber">3</button>
        <button @click="remove"><Icon name="remove" /></button>
        <button @click="outputNumber">4</button>
        <button @click="outputNumber">5</button>
        <button @click="outputNumber">6</button>
        <button @click="clear">清除</button>
        <button @click="outputNumber">7</button>
        <button @click="outputNumber">8</button>
        <button @click="outputNumber">9</button>
        <button @click="ok" class="ok">OK</button>
        <button @click="outputNumber">.</button>
        <button @click="outputNumber" class="zero">0</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class NumberPad extends Vue {
  @Prop() value!: string;
  output = "0";
  onValueChange(newValue: string) {
    this.$emit("update:value", newValue);
  }
  outputNumber(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent!;
    if (this.output.length >= 16) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
        return;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    }
    this.output += input;
  }
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }
  clear() {
    this.output = "0";
  }
  ok() {
    this.$emit("update:output", this.output);
    this.$emit("submit", this.output);
    this.output = "0";
  }
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
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>