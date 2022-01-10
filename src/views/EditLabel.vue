<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click.native="goBack" />
      <span class="title">编辑类别</span>
      <span class="rightIcon"></span>
    </div>
    <div class="remarks">
      <label class="notes">
        <span class="name">类别名称：</span>
        <input
          type="text"
          :value="tag.name"
          @input="onValueChange($event.target.value)"
          placeholder="请输入新的标签名"
        />
      </label>
    </div>

    <div class="createTag-wrapper">
      <button class="createTag" @click="remove">删除类别</button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import { tagListModel } from "@/models/tagListModel";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class EditLabel extends Vue {
  tag?: { id: string; name: string } = undefined;

  @Prop() value!: string;
  onValueChange(newValue: string) {
    this.$emit("update:value", newValue);
    console.log(newValue);
    if (this.tag) {
      tagListModel.update(this.tag.id, newValue);
    }
  }
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace("/404");
    }
  }
  remove() {
    if (this.tag) {
      if (tagListModel.remove(this.tag.id)) {
        this.$router.back();
      } else {
        alert("删除失败");
      }
    }
  }
  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  // border: 1px solid red;
  background: $color-highlight;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .leftIcon {
    color: $color-deep;
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.remarks {
  // margin-top: 8px;
  background: $color-shadow;
  height: 50px;
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
</style>