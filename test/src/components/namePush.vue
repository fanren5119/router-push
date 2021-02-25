<template>
  <div>
    <div>{{ msg }}</div>
    <div class="normal">
      使用声明式导航跳转
      <div>不带参数：<router-link to="first">first</router-link></div>
      <div>带参数：<router-link :to="{ name: 'third', params: { id: 1111}}">third</router-link></div>
    </div>
    <div class="other">
      使用编程式导航跳转
      <div>
        <el-button type="primary" @click="respondsToFirst">不戴参数: first</el-button>
      </div>
      <div>
        <el-button type="primary" @click="respondsToThird">带参数: third</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "namePush",
  data() {
    return {
      msg: "根据name切换页面"
    };
  },
  methods: {
    respondsToFirst() {
      this.$router.push('first')
    },
    respondsToThird() {
      this.$router.push({ name: 'third', params: { id: 3333 }})
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
