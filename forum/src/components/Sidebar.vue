<script setup>
  import { ref } from 'vue';
  import CreatePostPopup from './CreatePostPopup.vue';

  const showPopup = ref(false);

  const openPopup = () => {
    showPopup.value = true;
  };

  const closePopup = (payload) => {
    console.log(payload);
    showPopup.value = false;
  };

  const postData = (payload) => {
    console.log(payload);
  };
</script>

<template>
    <div class="sidebar">
      <router-link to="/categories">Categories</router-link>
      <router-link to="/posts/latest">Latest</router-link>
      <router-link to="/posts/top">Top</router-link>
      <button @click="openPopup()">Create Post</button>
      <CreatePostPopup :showPopup="showPopup" @close-hook="closePopup" @send-hook="postData"/>
    </div>
</template>


<style scoped>
  .sidebar {
    width: 170px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background: #fefefe;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  }

  .sidebar a {
    display: block;
    margin: 10px 0;
    color: #333;
    text-decoration: none;
  }

  .sidebar a.router-link-active {
    font-weight: bold;
  }

  button {
  margin: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
