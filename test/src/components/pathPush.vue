<template>
  <div>
    <div>{{ msg }}</div>
    <div class="normal">
      使用声明式导航跳转
      <div>不带参数：<router-link to="/first">first</router-link></div>
      <div>带参数：<router-link :to="{ path: '/second', query: { id: 1111}}">second</router-link></div>
    </div>
    <div class="other">
      使用编程式导航跳转
      <div>
        <el-button type="primary" @click="respondsToFirst">不戴参数: first</el-button>
      </div>
      <div>
        <el-button type="primary" @click="respondsToSecond">带参数: second</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pathPush",
  data() {
    return {
      msg: "根据path切换页面"
    };
  },
  methods: {
    respondsToFirst() {
      this.$router.push('/first')
    },
    respondsToSecond() {
      this.$router.push({ path: '/second', query: { id: 2222 }})
    }
  }
};
</script>

<style scoped>
.normal {
  background-color: aquamarine;
}
.other {
  background-color: #ffffff;
}
</style>
