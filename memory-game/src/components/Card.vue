<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['cardValue', 'visible', 'matched', 'position']);
const emits = defineEmits(['select-card']);

const selectCard = () => {
  if (!props.matched) {
    emits('select-card', {
      position: props.position,
      cardValue: props.cardValue,
    });
  }
};
</script>

<template>
  <div class="card" @click="selectCard">
    <div v-if="props.visible" class="card-face is-front">
      <p class="cardValue">{{ props.cardValue }}</p>
    </div>
    <div v-else class="card-face is-back">
      <img class="cardImage" src="../assets/cardBack.png" alt="Card Back" />
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  min-height: 150px;
  min-width: 100px;
  border: 5px solid rgb(51, 51, 51);
  border-radius: 12px;
  transition: 0.5s transform ease-in;
  transform-style: preserve-3d;
}

.card-face {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cardValue {
  font-size: 2rem;
  font-weight: bold;
  color: red;
}

.card-face.is-front {
  background-color: whitesmoke;
  height: 100%;
}

.card-face.is-back {
  backface-visibility: hidden;
}

.cardImage {
  height: 100%;
  width: 100%;
  border-radius: 8px;
}
</style>
