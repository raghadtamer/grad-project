<script setup>
import { ChevronRight, ChevronDown, Code, Brain, PieChart, Database, Zap } from 'lucide-vue-next';

const props = defineProps({
  subject: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const iconMap = {
  'Computer Science': { icon: Code, color: '#4a54e1' },
  'Artificial Intelligence': { icon: Brain, color: '#8A2BE2' },
  'Mathematics': { icon: PieChart, color: '#FF69B4' },
  'Physics': { icon: Zap, color: '#FF4500' },
  'Database Management': { icon: Database, color: '#3CB371' },
  'Web Development': { icon: Zap, color: '#FFD700' },
};

const subjectIcon = iconMap[props.subject.title] || { icon: Code, color: '#333' };
</script>

<template>
  <div :class="['subject-card', { active: isActive }]" :style="{ '--subject-color': subjectIcon.color }">
    <div class="content">
      <div class="icon-wrapper">
        <component :is="subjectIcon.icon" size="24" :color="subjectIcon.color" />
      </div>
      <div class="info">
        <div class="title">{{ subject.title }}</div>
        <div class="topics">{{ subject.topics }} topics</div>
      </div>
      <div class="arrow-icon">
        <ChevronRight v-if="!isActive" size="20" color="#777" />
        <ChevronDown v-else size="20" :color="subjectIcon.color" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.subject-card { background-color: white; border-radius: 12px; padding: 15px; margin-bottom: 15px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03); cursor: pointer; transition: all 0.2s ease; border-left: 5px solid transparent; }
.subject-card:hover { box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06); }
.subject-card.active { border-left-color: var(--subject-color, #4a54e1); background-color: rgba(74, 84, 225, 0.08); border-left: 5px solid #4a54e1; }
.content { display: flex; align-items: center; justify-content: space-between; }
.icon-wrapper { padding: 10px; border-radius: 8px; display: flex; align-items: center; justify-content: center; background-color: var(--subject-color, #4a54e1) 15%; }
.info { flex-grow: 1; margin-left: 15px; }
.title { font-weight: 600; color: #333; }
.topics { font-size: 0.85em; color: #777; }
</style>