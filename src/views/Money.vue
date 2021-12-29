<template>
  <Layout class-prefix="layout">
    <types />
    <tags />
    <remarks />
    <number-pad />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import NumberPad from "@/components/money/numberPad.vue";
import Types from "@/components/money/types.vue";
import Tags from "@/components/money/tags.vue";
import Remarks from "@/components/money/remarks.vue";
export default {
  components: { Layout, NumberPad, Types, Tags, Remarks },
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
