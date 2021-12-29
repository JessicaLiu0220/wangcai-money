<template>
  <Layout class-prefix="layout">
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>

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

    <div class="beizhu">
      <label class="notes">
        <span class="name">备注：</span>
        <input type="text" placeholder="请输入需要备注的内容" />
      </label>
      <div class="output">1.00</div>
    </div>

    <div class="numberPad">
      <div class="buttons clearfix">
        <button class="item" active-class="selected">1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清除</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button>.</button>
        <button class="zero">0</button>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
export default {
  components: { Layout },
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
.beizhu {
  display: flex;
  background: $color-shadow;
  height: 54px;
  border: 0.5px solid #e0e0e0;
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
  .output {
    display: flex;
    width: 25%;
    // font-family: Consolas, monospace;
    font-size: 24px;
    justify-content: center;
    align-items: center;
  }
}
.types {
  background-color: $color-highlight;
  display: flex;
  text-align: center;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    font-size: 24px;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 100%;
      height: 4px;
      background-color: #555555;
    }
  }
}
.numberPad {
  .buttons {
    @extend %clearfix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      border: 0.5px solid #e0e0e0;
      background: $color-shadow;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
    }
  }
}
</style>
