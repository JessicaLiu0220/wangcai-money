<template>
  <Layout class-prefix="layout">
    <Types @update:value="onUpdateType" />
    <Tags />

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
import Types from "@/components/Money/Types1.vue";
import Tags from "@/components/Money/Tags1.vue";
import NumberPad from "@/components/Money/NumberPad1.vue";
import { Component } from "vue-property-decorator";
import EditLabel from "./EditLabel.vue";
import store from "@/store/index2";

@Component({
  components: { Layout, Types, Tags, NumberPad, EditLabel },
})
export default class Money extends Vue {
  recordList = store.recordList;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };

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
    store.createRecord(this.record);
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
