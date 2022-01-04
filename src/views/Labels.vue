<template>
  <Layout>
    <ol class="tags">
      <li>
        <span>衣</span>
        <Icon name="right" />
      </li>
      <li>
        <span>食</span>
        <Icon name="right" />
      </li>
      <li>
        <span>住</span>
        <Icon name="right" />
      </li>
      <li>
        <span>行</span>
        <Icon name="right" />
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag"><Icon name="add" />添加类别</button>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Labels",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
* {
  color: $color-deep;
}
.tags {
  font-size: 16px;
  // margin-left: 5px;
  > li {
    // border: 1px solid red;
    display: flex;
    padding: 5px 15px 5px 5px;
    // border-top: 1px solid $color-shadow;
    border-bottom: 1px solid $color-shadow;
    justify-content: space-between;
    align-items: center;
    > span {
      background: $color-shadow;
      height: 44px;
      width: 44px;
      border-radius: 50%;
      text-align: center;
      line-height: 44px;
    }
    > .icon {
      width: 20px;
      height: 20px;
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
</style>>

