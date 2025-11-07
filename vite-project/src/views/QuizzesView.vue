<script setup>
import { ref } from 'vue';
import Sidebar from '../components/Layout/Sidebar.vue'; 
import QuizCard from '../components/QuizCard.vue'; 

const quizzes = ref([
  { id: 1, title: 'Computer Science', questions: 3 },
  { id: 2, title: 'Artificial Intelligence', questions: 3 },
  { id: 3, title: 'Mathematics', questions: 3 },
  { id: 4, title: 'Physics', questions: 3 },
  { id: 5, title: 'Database Management', questions: 3 },
  { id: 6, title: 'Web Development', questions: 3 },
]);
</script>

<template>
  <div class="main-layout">
    <Sidebar />
    <main class="content-area">
      <div class="quizzes-container">
        <h1 class="page-title">Quizzes</h1>
        <p class="page-subtitle">Test your knowledge and track your progress</p>
        
        <div class="quiz-grid">
          <QuizCard v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.main-layout { display: flex; min-height: 100vh; }
.content-area { flex-grow: 1; padding: 40px; background-color: #f7f7f9; }
.page-title { font-size: 2em; color: #333; margin: 0; }
.page-subtitle { font-size: 1em; color: #666; margin-bottom: 30px; }
.quiz-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
</style>