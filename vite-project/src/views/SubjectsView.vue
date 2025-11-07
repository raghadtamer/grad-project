<script setup>
import { ref } from 'vue';
import Sidebar from '../components/Layout/Sidebar.vue'; 
import SubjectCard from '../components/SubjectCard.vue'; 
import { BookOpen, ChevronDown } from 'lucide-vue-next';

const subjects = ref([
  { id: 1, title: 'Computer Science', topics: 3, materials: 4, isSelected: true },
  { id: 2, title: 'Artificial Intelligence', topics: 3, materials: 5, isSelected: false },
  { id: 3, title: 'Mathematics', topics: 3, materials: 6, isSelected: false },
  { id: 4, title: 'Physics', topics: 3, materials: 3, isSelected: false },
  { id: 5, title: 'Database Management', topics: 3, materials: 4, isSelected: false },
]);

const selectedSubject = ref(subjects.value.find(s => s.isSelected) || subjects.value[0]);

const selectSubject = (subject) => {
    subjects.value.forEach(s => s.isSelected = false);
    subject.isSelected = true;
    selectedSubject.value = subject;
};

const detailedContent = ref([
    { id: 1, title: 'Data Structures', materials: ['Arrays and Lists', 'Trees and Graphs', 'Hash Tables', 'Heaps'] },
    { id: 2, title: 'Algorithms', materials: ['Sorting Algorithms', 'Searching Algorithms', 'Graph Algorithms'] },
    { id: 3, title: 'Programming Fundamentals', materials: ['Control Flow', 'Functions', 'OOP Concepts'] },
]);
</script>

<template>
  <div class="main-layout">
    <Sidebar />
    <main class="content-area">
      <div class="subjects-header">
        <BookOpen size="40" color="#9932cc" />
        <div class="header-text">
          <h1>Study Materials</h1>
          <p>Access comprehensive learning resources for all your courses</p>
        </div>
      </div>
      <div class="subjects-layout">
        <div class="subject-list">
          <SubjectCard 
            v-for="subject in subjects" 
            :key="subject.id" 
            :subject="subject" 
            :is-active="subject.isSelected"
            @click="selectSubject(subject)"
          />
        </div>
        <div class="subject-details">
          <div class="details-header">
            <h2>{{ selectedSubject.title }}</h2>
            <p>Comprehensive study materials and resources</p>
          </div>
          <div class="content-cards">
            <div v-for="section in detailedContent" :key="section.id" class="content-section-card">
              <div class="section-title-wrapper">
                <div class="section-icon-and-text">
                  <BookOpen size="20" color="#4a54e1" /> 
                  <span class="section-title">{{ section.title }}</span>
                  <span class="material-count">{{ section.materials.length }} materials</span>
                </div>
                <ChevronDown size="20" color="#4a54e1" />
              </div>
              <ul class="materials-list">
                <li v-for="(material, index) in section.materials" :key="index">
                  <div class="bullet-point"></div>
                  {{ material }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.main-layout { display: flex; min-height: 100vh; }
.content-area { flex-grow: 1; padding: 40px; background-color: #f7f7f9; }
.subjects-header { display: flex; align-items: center; margin-bottom: 30px; }
.header-text { margin-left: 15px; }
.subjects-header h1 { font-size: 2em; color: #9932cc; margin: 0; }
.subjects-header p { color: #666; margin: 0; }
.subjects-layout { display: flex; gap: 30px; }
.subject-list { flex: 1.5; max-width: 350px; }
.subject-details { flex: 3; }
.details-header { background: linear-gradient(to right, #e7eaf9, #f7f7f9); padding: 20px; border-radius: 12px; margin-bottom: 25px; }
.details-header h2 { font-size: 1.5em; color: #4a54e1; margin: 0; }
.details-header p { color: #777; margin: 5px 0 0; }
.content-section-card { background-color: white; border-radius: 12px; padding: 20px; margin-bottom: 15px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04); }
.section-title-wrapper { display: flex; justify-content: space-between; align-items: center; cursor: pointer; padding-bottom: 10px; }
.section-icon-and-text { display: flex; align-items: center; gap: 10px; }
.section-title { font-weight: 600; color: #333; }
.material-count { background-color: #e7eaf9; color: #4a54e1; padding: 2px 8px; border-radius: 15px; font-size: 0.75em; font-weight: bold; }
.materials-list { list-style: none; padding: 0; margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px; }
.materials-list li { display: flex; align-items: center; margin-bottom: 8px; color: #555; }
.bullet-point { width: 6px; height: 6px; background-color: #4a54e1; border-radius: 50%; margin-left: 8px; margin-right: 5px; }
</style>