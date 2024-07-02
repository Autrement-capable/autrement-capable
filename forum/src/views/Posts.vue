<script setup>
    import { ref } from 'vue'
    const props = defineProps(['category'])
    const data = ref('')
    // watch(
    //   () => route.params.id,
    //   (newId, oldId) => {
    //     // react to route changes...
    //   }
    // )
    data.value = `call data that have the category nameCode: ${props.category}`

</script>

<template>
    <div>
        <h1>Posts</h1>
        <p>Filter: {{ data }}</p>
    </div>
</template>

<style scoped>

</style>

