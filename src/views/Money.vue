<template>
  <Layout class-prefix="layout">
    <Types @update:value="onUpdateType" />
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />

    <Number-pad
      :value="record.notes"
      @update:value="onUpdateNotes"
      @update:output="onUpdateAmount"
      @submit="saveRecord"
    />
    {{ record }}
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "@/components/Layout.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import { Component } from "vue-property-decorator";
import EditLabel from "./EditLabel.vue";

@Component({
  components: { Layout, Types, Tags, NumberPad, EditLabel },
})
export default class Money extends Vue {
  tags = window.tagList;
  recordList = window.recordList;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateType(value: string) {
    this.record.type = value;
  }
  onUpdateAmount(output: string) {
    this.record.amount = parseFloat(output);
  }
  saveRecord() {
    window.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss" scoped>
</style>
