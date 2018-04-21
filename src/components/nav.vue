<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#5086fa" text-color="#fff" active-text-color="#fff">
        <el-menu-item index="1">时间轴</el-menu-item>
        <el-menu-item index="2">相册</el-menu-item>
        <el-menu-item index="3">最佳</el-menu-item>
    </el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {}
}
</script>
