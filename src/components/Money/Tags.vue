<template>
  <div class="tags">
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="toggle(tag)"
      >
        {{ tag.name }}
      </li>
      <li class="add" @click="newTag">+</li>
    </ul>
    <!-- <div class="new">
        <button>添加标签</button>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import store from "@/store/index2";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Tags extends Vue {
  tagList = store.fetchTags();
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
  newTag(add: string) {
    const name = window.prompt("请输入标签名");
    if (!name) {
      return;
    }
    if (name === "") {
      window.alert("标签名不能为空");
    } else if (this.tagList) {
      store.createTag(name);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  flex-grow: 1;
  // border: 1px solid red;
  > .current {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    > li {
      background: $color-shadow;
      height: 60px;
      width: 60px;
      border-radius: 30px;
      text-align: center;
      line-height: 60px;
      margin: 10px 20px 10px 10px;
      &.selected {
        background: $color-highlight;
      }
    }
    > .add {
      font-size: 24px;
    }
  }
  // > .new {
  //   padding: 16px 0px;
  //   padding-left: 16px;
  //   > button {
  //     background-color: transparent;
  //     border: none;
  //     color: #999999;
  //     border-bottom: 1px solid;
  //   }
  // }
}
</style>