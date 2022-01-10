<template>
  <Layout>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">
        <Icon name="add" />添加类别
      </Button>
      <div class="heixian"></div>
    </div>
    <div class="tags">
      <router-link
        class="tag"
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
      >
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
  </Layout>
</template>

<script lang="ts">
import { tagListModel } from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";

@Component
export default class Types extends Vue {
  tags = window.tagList;

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
  margin-left: 5px;

  > .tag {
    display: flex;
    padding: 10px 15px 10px 5px;
    border-bottom: 1px solid $color-shadow;
    justify-content: space-between;
    align-items: center;
    > span {
      height: 44px;
      min-width: 44px;
      background: $color-shadow;
      border: 0.1px solid $color-deep;
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
  width: 100%;
  height: 64px;
  text-align: 64px;
  background: $color-highlight;
  display: flex;
  justify-content: center;
  position: relative;
  > .createTag {
    font-size: 24px;
    background: $color-highlight;
    border: none;
    position: relative;
  }
  > .heixian {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 4px;
    background-color: #555555;
  }
}
</style>>

