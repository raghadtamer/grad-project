<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const statusColors = {
    'Completed': '#3CB371', // أخضر
    'Added': '#1E90FF',    // أزرق
    'Upcoming': '#FFA07A'  // برتقالي
};
</script>

<template>
  <div class="activity-item">
    <div class="status-indicator" :style="{ backgroundColor: statusColors[data.status] }"></div>
    <div class="activity-info">
      <div class="detail">{{ data.detail }}</div>
      <div class="course">{{ data.course }}</div>
    </div>
    <div class="time">{{ data.time }}</div>
  </div>
</template>

<style scoped>
.activity-item { display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee; }
.status-indicator { width: 10px; height: 10px; border-radius: 50%; margin-right: 15px; }
.activity-info { flex-grow: 1; }
.detail { font-weight: 600; color: #333; font-size: 0.9em; }
.course { font-size: 0.8em; color: #777; }
.time { font-size: 0.8em; color: #999; }
</style>