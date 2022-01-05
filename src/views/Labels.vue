<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag">
        <span>{{ tag }}</span>
        <Icon name="right" />
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">
        <Icon name="add" />添加类别
      </button>
    </div>
  </Layout>
</template>

<script lang="ts">
import { tagListModel } from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
tagListModel.fetch();
@Component
export default class Types extends Vue {
  tags = tagListModel.data;

  createTag() {
    const name = window.prompt("请输入新的类别名：");
    if (name) {
      const message = tagListModel.create(name);
      if (message === "duplicated") {
        window.alert("该类名已经存在");
      }
      // } else if (message === "success") {
      //   window.alert("类名添加成功");
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
* {
  color: $color-deep;
}
.tags {
  font-size: 16px;
  // margin-left: 5px;
  > li {
    // border: 1px solid red;
    display: flex;
    padding: 5px 15px 5px 5px;
    // border-top: 1px solid $color-shadow;
    border-bottom: 1px solid $color-shadow;
    justify-content: space-between;
    align-items: center;
    // background: $color-shadow;
    > span {
      height: 44px;
      min-width: 44px;
      background: $color-highlight;
      border-radius: 10px;
      text-align: center;
      line-height: 44px;
      padding: 0px 5px;
    }
    > .icon {
      width: 20px;
      height: 20px;
    }
  }
}
.createTag-wrapper {
  text-align: center;
  padding: 24px;
  > .createTag {
    font-size: 16px;
    background: $color-shadow;
    border: none;
    border: 0.5px solid #404040;
    border-radius: 5px;
    padding: 5px 16px;
  }
}
</style>>

