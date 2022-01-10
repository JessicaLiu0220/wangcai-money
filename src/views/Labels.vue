<template>
  <Layout>
    <div class="labels">
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
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">
          <Icon name="add" />添加类别
        </Button>
      </div>
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
      window.createTag(name);
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
.labels {
  position: relative;
  height: 100%;
  > .tags {
    font-size: 16px;
    height: 86%;
    overflow: auto;
    > .tag {
      display: flex;
      padding: 10px 15px 10px 5px;
      border-bottom: 1px solid $color-shadow;
      justify-content: space-between;
      align-items: center;
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
  > .createTag-wrapper {
    left: 50%;
    bottom: 20px;
    margin-left: -80px;
    position: absolute;
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
}
</style>>