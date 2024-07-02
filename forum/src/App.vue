<script setup>
  import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div id="app">
      <Sidebar class="sidebar" />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style>

.content {
  margin-left: 200px;
  padding-left: 10px;
}
</style>
