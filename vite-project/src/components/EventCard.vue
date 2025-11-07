<script setup>
import { Calendar, Clock, MapPin, AlarmClock } from 'lucide-vue-next';

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

// تعيين الألوان بناءً على الأولوية
const priorityMap = {
  'High Priority': { color: '#FF69B4', background: '#ffe6f1' }, // وردي مشرق
  'Medium': { color: '#4a54e1', background: '#e7eaf9' }, // أزرق هادئ
  'Low Priority': { color: 'rgb(24, 192, 47)', background: '#ffe6f1' },
};

const colors = priorityMap[props.event.priority] || priorityMap['Medium'];
</script>

<template>
  <div class="event-card" :style="{ borderTopColor: colors.color }">
    <div class="header">
      <div class="icon-wrapper" :style="{ backgroundColor: colors.background }">
        <component :is="event.icon" size="30" :color="colors.color" />
      </div>
      <span class="priority-tag" :style="{ backgroundColor: colors.color + 'f0', color: 'white' }">
        {{ event.priority }}
      </span>
    </div>
    
    <div class="details">
      <h3 class="title">{{ event.title }}</h3>
      <p class="type">{{ event.type }}</p>

      <div class="info-line">
        <Calendar size="16" color="#777" />
        <span>{{ event.date }}</span>
      </div>
      <div class="info-line">
        <Clock size="16" color="#777" />
        <span>{{ event.time }}</span>
      </div>
      <div class="info-line">
        <MapPin size="16" color="#777" />
        <span>{{ event.location }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  background-color: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  border-top: 5px solid; /* اللون يتحدد بناء على الخاصية الممررة */
}

.event-card:hover {
    transform: translateY(-5px);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.priority-tag {
  font-size: 0.75em;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 15px;
  opacity: 0.9;
}

.details {
  flex-grow: 1;
}

.title {
  font-size: 1.2em;
  font-weight: 600;
  color: #333;
  margin: 0 0 5px 0;
}

.type {
  font-size: 0.9em;
  color: #999;
  margin: 0 0 15px 0;
}

.info-line {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  font-size: 0.95em;
  color: #555;
}
</style>