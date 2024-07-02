import { createRouter, createWebHistory } from 'vue-router'
import Categories from '../views/Categories.vue'
import Latest from '../views/Latest.vue'
import Top from '../views/Top.vue'
import Posts from '../views/Posts.vue'

const routes = [
  { path: '/', redirect: '/categories' },
  { path: '/categories', component: Categories },
  { path: '/posts/latest', component: Latest },
  { path: '/posts/top', component: Top },
  { path: '/posts/:category', component: Posts, props: true},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
