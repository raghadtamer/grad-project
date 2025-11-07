import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import StudyMaterials from '../pages/StudyMaterials.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/study-materials', component: StudyMaterials },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
