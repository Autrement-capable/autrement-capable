<script setup>
    import { ref, watch } from 'vue'
    import _ from 'lodash'
    import Card from './Card.vue'

    const cardList = ref([])
    const userSelect = ref([])
    const userCanFlip = ref(true)
    const nbCardMatched = ref(0)
    const winMessage = ref('')

    const shuffleCards = () => {
        cardList.value = _.shuffle(cardList.value)
    }

    for (let i = 0; i < 16; i++) {
        cardList.value.push({
            cardValue: 0,
            visible: false,
            matched: false,
            position: null
        })
    }
    for (let i = 0; i < 8; i++) {
        cardList.value[i].cardValue = i
        cardList.value[i + 8].cardValue = i
        }
    shuffleCards()

    for (let i = 0; i < cardList.value.length; i++) {
        cardList.value[i].position = i
    }

    const cheat = () => {
        cardList.value.forEach((card, index) => {
            card.visible = !card.visible
            card.matched = !card.matched
        })
        nbCardMatched.value = 16
    }

    const flipCard = payload => {
        if (userCanFlip.value) {
            cardList.value[payload.position].visible = true

            if (userSelect.value[0]) {
                userSelect.value[1] = payload
            } else {
                userSelect.value[0] = payload
            }
        }
    }

    watch(nbCardMatched, (currentValue) => {
        if (currentValue === 16) {
            winMessage.value = 'You Win!'
            userCanFlip.value = false
        }
    }, {deep: true})

    watch(userSelect, (currentValue) => {
        console.log(`userSelect: ${currentValue} Taill:${currentValue.length}`)
        if (currentValue.length === 2) {
            console.log('2 cards selected')

            const card1 = currentValue[0]
            const card2 = currentValue[1]
            userCanFlip.value = false

            if (card1.cardValue === card2.cardValue && card1.position !== card2.position) {
                console.log('Matched')
                cardList.value[card1.position].matched = true
                cardList.value[card2.position].matched = true
                nbCardMatched.value += 2
                userCanFlip.value = true
            } else {
                console.log('Not Matched')
                setTimeout(() => {
                    cardList.value[card1.position].visible = false
                    cardList.value[card2.position].visible = false
                    userCanFlip.value = true
                }, 1000)
            }
            userSelect.value.length = 0
        }
    }, {deep: true})
</script>

<template>
    <div class="GameBoard">
        <Card
            v-for="(card, index) in cardList"
            :key="`card-${index}`"
            :cardValue="card.cardValue"
            :visible="card.visible"
            :matched="card.matched"
            :position="card.position"
            @select-card="flipCard">
        </Card>
    </div>
    <h1>{{ winMessage }}</h1>
    <!-- <div>userSelect: {{ userSelect }}</div>
    <div>userCanFlip: {{ userCanFlip }}</div>
    <div>nbCardMatched: {{ nbCardMatched }}</div>
    <div>nbCardRemaining: {{ 16 - nbCardMatched}}</div> -->
    <!-- <button @click="cheat">Cheat</button> -->
</template>

<style>
    .GameBoard {
        display: grid;
        grid-template-columns: 20% 20% 20% 20%;
        grid-template-rows: 20% 20% 20% 20%;
        column-gap: 20px;
        row-gap: 10px;
        border: 5px solid rgb(51, 51, 51);
        border-radius: 16px;
        padding: 5px;
        justify-content: center;
        align-items: center;
    }
</style>