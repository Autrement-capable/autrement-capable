<script setup>
    import { ref } from 'vue'

    const props = defineProps(['categoryTitle'])

</script>

<template>
    <div class="card">
        <h1>{{ categoryTitle }}</h1>
    </div>
</template>

<style scoped>
    .card {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>

