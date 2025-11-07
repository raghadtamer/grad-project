<script setup>
import { Book, Zap, Clock, Award } from 'lucide-vue-next';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const iconMap = {
    'book': Book,
    'zap': Zap,
    'clock': Clock,
    'award': Award
};
</script>

<template>
  <div class="stat-card" :style="{ borderLeftColor: data.color }">
    <div class="icon-wrapper" :style="{ backgroundColor: data.color + '20' }">
      <component :is="iconMap[data.icon]" size="24" :color="data.color" />
    </div>
    <div class="info">
      <div class="value">{{ data.value }}</div>
      <div class="title">{{ data.title }}</div>
    </div>
  </div>
</template>

<style scoped>
.stat-card { background-color: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); display: flex; align-items: center; gap: 15px; border-left: 5px solid; }
.icon-wrapper { width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.value { font-size: 1.5em; font-weight: 700; color: #333; }
.title { font-size: 0.85em; color: #777; margin-top: 2px; }
</style>