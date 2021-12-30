<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>行</li>
      <li class="add">+</li>
    </ul>
    <!-- <div class="new">
        <button>添加标签</button>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
export default {
  name: "Tags",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  flex-grow: 1;
  // border: 1px solid red;
  > .current {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    > li {
      background: $color-shadow;
      height: 60px;
      width: 60px;
      border-radius: 30px;
      text-align: center;
      line-height: 60px;
      margin: 10px 20px 10px 10px;
    }
    > .add {
      font-size: 24px;
    }
  }
  // > .new {
  //   padding: 16px 0px;
  //   padding-left: 16px;
  //   > button {
  //     background-color: transparent;
  //     border: none;
  //     color: #999999;
  //     border-bottom: 1px solid;
  //   }
  // }
}
</style>