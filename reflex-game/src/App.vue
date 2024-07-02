<script setup>
  import GameBoard from './components/GameBoard.vue'
</script>

<template>
  <div class="gameContainer">
    <h1>Reflex Game</h1>
    <GameBoard></GameBoard>
  </div>
</template>

<style scoped>
  .gameContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: blueviolet; */
  }
</style>
