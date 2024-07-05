<script setup>
    import { ref, onMounted } from 'vue';
    import {categoriesList} from '../data/data.js';

    const props = defineProps(['showPopup']);
    const title = ref('');
    const content = ref('');
    const categories = ref([]);
    const selectedCategory = ref(categories.value[0]);

    const emits = defineEmits(['close-hook', 'send-hook']);

    const fetchCategories = () => {
        categories.value = categoriesList;
    };

    onMounted(() => {
        fetchCategories();
    });

    const submitPost = () => {
      emits('send-hook', {
        title: title.value,
        content: content.value,
        category: selectedCategory.value,
      });
      closePopup();
    };

    const closePopup = () => {
      emits('close-hook', false);
    };
</script>

<template>
    <div v-if="props.showPopup" class="popup-overlay">
      <div class="popup-content">
        <h2>Create a Post</h2>
        <form @submit.prevent="submitPost">
          <div>
            <label for="title">Title</label>
            <input type="text" v-model="title" id="title" required />
          </div>
          <div>
            <label for="content">Content</label>
            <textarea v-model="content" id="content" required></textarea>
          </div>
          <div>
            <label for="categories">Categories</label>
            <select v-model="selectedCategory" id="categories">
              <option v-for="category in categories" :key="category" :value="category">{{ category.name }}</option>
            </select>
          </div>
          <div class="buttons">
            <button type="submit">Submit</button>
            <button type="button" @click="closePopup">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>


  <style scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 800px;
    height: 600px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  form div {
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
  </style>
