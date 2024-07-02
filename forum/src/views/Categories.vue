<script setup>
  import { categories } from '../data/data.js'
  import CategoriesCard from '../components/CategoriesCard.vue'
</script>

<template>
    <div class="test">
      <h1>Categories</h1>
      <ul class="cardContainer">
        <li v-for="category in categories" :key="category.nameCode" class="categoriesCard">
          <router-link :to="'/posts/' + category.nameCode">{{ category.name }}</router-link>
          <CategoriesCard :categoryTitle="category.name" />
        </li>
      </ul>
    </div>

</template>

<style scoped>
  .test {
    background-color: brown;
    width: auto;
    height: 100%;
  }
  .cardContainer {
    list-style: none;
    display: flex;
    flex-direction: column;
    /* background-color: aqua; */
    width: 100%;
    height: 100%;
  }

  .categoriesCard {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: blueviolet;
    width: 80%;
    height: 10%;
  }

</style>

