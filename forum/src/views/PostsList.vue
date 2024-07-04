<script setup>
    import { ref, watch } from 'vue'
    import { useRouter } from 'vue-router'
    import { postsList } from '../data/data.js'
    import PostCard from '@/components/PostCard.vue';

    const props = defineProps(['category'])
    const posts = ref([])
    const router = useRouter()

    posts.value = postsList.filter(post => post.categoryNameCode === props.category)


    const goToPost = (post) => {
        router.push({ name: 'post', params: { category: props.category, id: post.id } })
    }

    watch(() => posts, () => {
        console.log('[PostsList] posts changed')
      posts.value = postsList.filter(post => post.categoryNameCode === props.category)
    })

</script>

<template>
    <div class="postListHeader">
        <div class="content">
            <h3>Topic</h3>
        </div>

        <!-- Author: tmp author id todo: get user pp -->
        <div class="author">
            <h3>Author</h3>
        </div>
        <div class="stats">
            <h3>Likes</h3>
            <h3>Replies</h3>
            <h3>Date</h3>
        </div>
        <!-- Maybe last activity date (take date of the last reply) -->
    </div>
    <div>
        <ul class="postListContent">
            <li v-for="post in posts" :key="post.id" @click="goToPost(post)">
                <PostCard :post="post"></PostCard>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .postListHeader {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        border: 1px solid black;
        padding: 5px;
        margin-left: 40px;
        list-style: none;
        margin-bottom: 0;
    }

    .content {
        display: flex;
        justify-content: center;
        min-width: 300px;
        padding: 10px;
        width: 50%;
    }

    .author {
        display: flex;
        justify-content: center;
        width: 10%;
    }

    .stats {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10%;
        width: 10%;
    }

    .postListContent {
        list-style: none;
        margin-top: 0;
    }

</style>

