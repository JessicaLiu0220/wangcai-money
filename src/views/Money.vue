<template>
  <Layout class-prefix="layout">
    <Types @update:value="onUpdateType" />
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
    <Number-pad
      @update:value="onUpdateNotes"
      @update:output="onUpdateAmount"
      @submit="saveRecord"
    />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "@/components/Layout.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import { Component, Watch } from "vue-property-decorator";
import { model } from "@/model";

const recordList = model.fetch();

@Component({
  components: { Layout, Types, Tags, NumberPad },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: RecordItem[] = JSON.parse(
    window.localStorage.getItem("recordList") || ""
  );
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
    const record2 = model.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange() {
    model.save(this.recordList);
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
