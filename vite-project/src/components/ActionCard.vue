<script setup>
import { BookOpen, Edit, Calendar, FileText, Calculator, ClipboardList } from 'lucide-vue-next';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  onClick: {
    type: Function,
    required: false,
    default: () => {}
  }
});

const iconMap = {
    'book-open': BookOpen,
    'edit': Edit,
    'calendar': Calendar,
    'file-text': FileText,
    'calculator': Calculator,
    'clipboard-list': ClipboardList
};
</script>

<template>
  <div class="action-card" @click="onClick">
    <div class="icon-header">
        <component :is="iconMap[props.data.icon]" size="30" color="#4a54e1" />
    </div>
    <div class="title">{{ props.data.title }}</div>
    <div class="subtitle">{{ props.data.subtitle }}</div>
  </div>
</template>

<style scoped>
.action-card { background-color: white; border-radius: 12px; padding: 25px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
.action-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); }
.icon-header { margin-bottom: 15px; }
.title { font-size: 1.1em; font-weight: 600; color: #333; margin-bottom: 5px; }
.subtitle { font-size: 0.9em; color: #777; }
</style>