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
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "@/components/Layout.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import { Component, Watch } from "vue-property-decorator";
import { recordListModel } from "@/models/recordListModel";
import { tagListModel } from "@/models/tagListModel";

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: { Layout, Types, Tags, NumberPad },
})
export default class Money extends Vue {
  tags = tagList;
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
    const record2 = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save(this.recordList);
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
