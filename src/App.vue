<template>
  <div id="app">
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal" router :default-active="$route.name">
      <el-menu-item index="Home" :route="{ name: 'Home' }">Project Management</el-menu-item>
      <el-menu-item index="ProjectList" :route="{ name: 'ProjectList' }">Project</el-menu-item>
      <el-submenu index="Administration">
        <template slot="title">Administration</template>
        <el-menu-item index="AdministrationUser">User</el-menu-item>
        <el-menu-item index="AdministrationProject">Project</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

a {
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
