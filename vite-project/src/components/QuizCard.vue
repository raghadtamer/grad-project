<script setup>
import { CheckSquare } from 'lucide-vue-next';

const props = defineProps({
  quiz: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="quiz-card">
    <div class="header">
      <CheckSquare size="30" color="#4a54e1" />
      <div class="info">
        <h3 class="title">{{ quiz.title }}</h3>
        <p class="questions">{{ quiz.questions }} Questions</p>
      </div>
    </div>
    <button class="start-btn">
      Start Quiz
    </button>
  </div>
</template>

<style scoped>
.quiz-card { background-color: white; border-radius: 12px; padding: 25px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); display: flex; flex-direction: column; justify-content: space-between; }
.header { display: flex; align-items: center; margin-bottom: 20px; }
.info { margin-left: 15px; }
.title { font-size: 1.1em; font-weight: 600; margin: 0; }
.questions { font-size: 0.9em; color: #888; margin: 3px 0 0; }
.start-btn { background: linear-gradient(to right, #4a54e1, #7b68ee); color: white; border: none; padding: 12px 0; border-radius: 8px; cursor: pointer; font-weight: bold; transition: opacity 0.2s; }
.start-btn:hover { opacity: 0.9; }
</style>