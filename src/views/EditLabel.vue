<template>
  <layout>
    <div>
      <Icon name="left" />
      <span>编辑类别</span>
    </div>
    <div class="remarks" @update:value="onUpdateNotes">
      <label class="notes">
        <span class="name">标签：</span>
        <input type="text" v-model="value" placeholder="请输入新的标签名" />
      </label>
      <div class="output">{{ output }}</div>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import { tagListModel } from "@/models/tagListModel";

import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class EditLabel extends Vue {
  value = "";
  @Watch("value")
  onValueChange(newValue: string) {
    this.$emit("update:value", newValue);
  }
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped>
</style>