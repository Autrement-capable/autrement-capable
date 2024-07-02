<script setup>

  import GameBoard from './components/GameBoard.vue'


  // const cardList = ref([
  //   {value: '#0030FE', id: 1, position: 0, visible: false},
  //   {value: '#0030FE', id: 2, position: 1, visible: false},
  //   {value: '#FFDB58', id: 3, position: 2, visible: false},
  //   {value: '#FFDB58', id: 4, position: 3, visible: false},
  //   {value: '#33ccff', id: 5, position: 4, visible: false},
  //   {value: '#33ccff', id: 6, position: 5, visible: false},
  //   {value: '#66cc00', id: 7, position: 6, visible: false},
  //   {value: '#66cc00', id: 8, position: 7, visible: false},
  //   {value: '#ff6600', id: 9, position: 8, visible: false},
  //   {value: '#ff6600', id: 10, position: 9, visible: false},
  //   {value: '#cc0000', id: 11, position: 10, visible: false},
  //   {value: '#cc0000', id: 12, position: 11, visible: true},
  //   {value: '#ed556c', id: 13, position: 12, visible: false},
  //   {value: '#ed556c', id: 14, position: 13, visible: false},
  //   {value: '#00c285', id: 15, position: 14, visible: false},
  //   {value: '#00c285', id: 16, position: 15, visible: false},
  // ])
</script>

<template>
  <header>
    <h1>Memory</h1>
    <GameBoard></GameBoard>
  </header>
</template>

<style scoped>

</style>
