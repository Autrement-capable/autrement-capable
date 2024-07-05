<script setup>
  import { ref } from 'vue'
  import { postsList } from '../data/data.js'

  const props = defineProps(['category', 'id'])
  const postId = parseInt(props.id)

  const post = ref(postsList.find(post => post.id === postId))

</script>

<template>
  <div class="post">
    <h1>{{ post.title }}</h1>
    <p> {{ post.content }}</p>
    <div class="postStats">
      <p> Likes: {{ post.likes }}</p>
      <p>{{ post.createdAt }}</p>
    </div>
  </div>
  <div class="replyAreaContainer">
    <textarea class="replyArea"></textarea>
    <button class="replyButton">Reply</button>
  </div>
  <ul class="repliesList">
    <li v-for="reply in post.replies" class="reply">
      <p>{{ reply.content }}</p>
      <p>author id: {{ reply.authorId }}</p>
      <p>{{ reply.createdAt }}</p>
    </li>
  </ul>
</template>

<style scoped>
  .post {
    margin: 20px;
    border-radius: 13px;
    padding: 10px;
    border: 1px solid black;
    background-color: lightgrey;
  }

  .postStats {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .reply {
    margin: 10px;
    border-radius: 13px;
    padding: 10px;
    border: 1px solid black;
    background-color: lightgrey;
  }

  .replyButton {
    margin: 10px;
    padding: 10px;
    border-radius: 13px;
    align-self: flex-end;
    margin-right: 10%;
  }

  .repliesList {
    margin: 20px;
  }

  .replyAreaContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }

  .replyArea {
    width: 80%;
    height: 100px;

  }

  ul {
    list-style: none;
  }
</style>

