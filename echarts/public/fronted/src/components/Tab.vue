<template>
  <div class="study">
    <div class="nav">
      <el-radio-group v-model="isCollapse" style="display: block">
        <div class="navCheck" @click="navOC"> <i class="el-icon-d-arrow-right"></i> </div>
      </el-radio-group>
      <el-menu :router="true" :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="/home">
          <i class="el-icon-document"></i>
          <span slot="title">回到主页</span>
        </el-menu-item>
        <el-submenu index="/canvas">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">Canvas</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="/canvas/eChart_1">eChart_1</el-menu-item>
            <el-menu-item index="/canvas/eChart_2">eChart_2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="">
            <span slot="title">选项4</span>
            <el-menu-item index="">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="/d3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">D3</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="/d3/d3_1">d3_1</el-menu-item>
            <el-menu-item index="/d3/d3_2">d3_2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="">
            <span slot="title">选项4</span>
            <el-menu-item index="">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-menu-item index="">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      navOC(){
        this.isCollapse = this.isCollapse ? false : true;
      }
    }
  }
</script>

<style scoped  lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .study {
    overflow: auto;
    display: flex;
    .nav {
      flex: 0 0 auto;
      position: relative;
      .navCheck {
        width: 20px;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        position: absolute;
        right: -16px;
        border: 0px solid #fff;
        border-radius: 2px;
        top: 300px;
        color: #909399;
        z-index: 10000;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .content {
      padding: 20px;
      flex: 1;
      min-height: 700px;
      background-color: blanchedalmond;
    }
  }

</style>
