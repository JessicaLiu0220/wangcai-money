<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" />
      <span class="title">编辑类别</span>
      <span class="rightIcon"></span>
    </div>
    <div class="remarks">
      <label class="notes">
        <span class="name">备注：</span>
        <input
          type="text"
          :value="tag.name"
          @input="onValueChange($event.target.value)"
          placeholder="请输入需要备注的内容"
        />
      </label>
      <div class="output">{{ output }}</div>
    </div>
    <!-- 新写法
    html的部分：
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

    ts的部分：
    @Prop() value!: string;
    onValueChange(newValue: string) {
    this.$emit("update:value", newValue);
  }
     -->
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag"> 删除类别 </Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import { tagListModel } from "@/models/tagListModel";
import NumberPad from "@/components/Money/NumberPad.vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class EditLabel extends Vue {
  tag?: { id: string; name: string } = undefined;
  @Prop() value!: string;
  onValueChange(newValue: string) {
    this.$emit("update:value", newValue);
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