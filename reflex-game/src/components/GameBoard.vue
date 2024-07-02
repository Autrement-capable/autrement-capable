<script setup>
import { computed, ref } from 'vue'

const startTime = ref(null);
const elapsedTime = ref(0);
const intervalId = ref(null);
const isRunning = ref(false);

const color = ref('gray');
const message = ref("");
const userCanClick = ref(false);
const showStartButton = ref(true);
const messageList = [
    "When the background color becomes green, click",
    "Wait for the green color",
    "Click!",
];

message.value = messageList[0];

const clickedZone = () => {
    if (userCanClick.value) {
        console.log("clicked");
        clearInterval(intervalId.value);
        isRunning.value = false;
        color.value = 'gray';
        userCanClick.value = false;
        message.value = "Nice job! Your time: " + elapsedTime.value + " ms";
        showStartButton.value = true;
    }
}

const startGame = () => {
    showStartButton.value = false;
    color.value = 'gray';
    message.value = messageList[1];
    elapsedTime.value = 0;
    const randomDelay = Math.floor(Math.random() * 4000) + 1000;

    setTimeout(() => {
        message.value = messageList[2];
        userCanClick.value = true;
        color.value = 'green';

        startTime.value = Date.now();
        isRunning.value = true;
        intervalId.value = setInterval(() => {
            elapsedTime.value = Date.now() - startTime.value;
        }, 1);
    }, randomDelay);
}

const backgroundStyle = computed(() => {
    return {
        backgroundColor: color.value,
    }
})
</script>

<template>
    <div @click="clickedZone" class="gameBoard" :style="backgroundStyle">
        <p class="message">{{ message }}</p>
        <button v-if="showStartButton"  @click="startGame" class="startButton">Start</button>
    </div>
</template>

<style scoped>
    .gameBoard {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 500px;
        width: 700px;
        border: 2px solid black;
        border-radius: 15px;
    }
    .message {
        font-size: 30px;
        margin-top: 15%;
        font-weight: bold;
        color: white;
        margin-bottom: 50px;
    }

.startButton {
  appearance: button;
  background-color: #1899D6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: din-round,sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 125px;
}

.startButton:after {
  background-clip: padding-box;
  background-color: #1CB0F6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.startButton:main,
.startButton:focus {
  user-select: auto;
}

.startButton:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

.startButton:disabled {
  cursor: auto;
}

.startButton:active {
  border-width: 4px 0 0;
  background: none;
}
</style>
