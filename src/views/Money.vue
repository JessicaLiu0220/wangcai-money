<template>
  <Layout class-prefix="layout">
    <Types />
    <Tags />
    <Remarks />
    <Number-pad />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Remarks from "@/components/Money/Remarks.vue";
import NumberPad from "@/components/Money/NumberPad.vue";

export default {
  components: { Layout, Types, Tags, Remarks, NumberPad },
  name: "Money",
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss" scoped>
</style>
