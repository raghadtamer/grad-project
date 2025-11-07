
<script setup>
import { ref } from 'vue';
import Sidebar from '../components/Layout/Sidebar.vue'; 
import EventCard from '../components/EventCard.vue';
import { Calendar, Clock, MapPin, AlarmClock, Edit, BookOpen } from 'lucide-vue-next';

// تم تحديث قائمة الأحداث لتشمل حدثين جديدين بأهمية متوسطة
const events = ref([
  { 
    id: 1, 
    title: 'Midterm Exam - Computer Science', 
    type: 'Exam', 
    date: 'Nov 15, 2025', 
    time: '9:00 AM - 11:00 AM', 
    location: 'Hall A, Room 101', 
    priority: 'High Priority',
    icon: AlarmClock
  },
  { 
    id: 2, 
    title: 'AI Project Submission Deadline', 
    type: 'Deadline', 
    date: 'Nov 20, 2025', 
    time: '11:59 PM', 
    location: 'Online Portal', 
    priority: 'High Priority',
    icon: Edit
  },
  { 
    id: 3, 
    title: 'Mathematics Tutorial Session', 
    type: 'Tutorial', 
    date: 'Nov 8, 2025', 
    time: '2:00 PM - 4:00 PM', 
    location: 'Lab B, Room 205', 
    priority: 'Medium',
    icon: Calendar
  },
  { 
    id: 4, 
    title: 'Guest Lecture - Machine Learning Trends', 
    type: 'Lecture', 
    date: 'Nov 12, 2025', 
    time: '3:00 PM - 5:00 PM', 
    location: 'Zoom Meeting', 
    priority: 'Medium',
    icon: BookOpen
  },
  // الحدث الجديد 5: مجموعة دراسية أسبوعية
  { 
    id: 5, 
    title: 'Weekly Study Group - Physics', 
    type: 'Study Session', 
    date: 'Nov 18, 2025', 
    time: '6:00 PM - 7:30 PM', 
    location: 'Library, Study Pod 3', 
    priority: 'Low Priority',
    icon: BookOpen
  },
  // الحدث الجديد 6: جلسة أسئلة وأجوبة اختيارية
  { 
    id: 6, 
    title: 'Web Dev Optional Q&A', 
    type: 'Q&A', 
    date: 'Nov 25, 2025', 
    time: '4:00 PM', 
    location: 'Microsoft Teams', 
    priority: 'Low Priority',
    icon: MapPin
  },
]);
</script>

<template>
  <div class="main-layout">
    <Sidebar />
    <main class="content-area">
      <div class="events-header">
        <Calendar size="40" color="#7b68ee" />
        <div class="header-text">
          <h1>Important Events</h1>
          <p>Stay on top of your academic calendar and never miss a deadline</p>
        </div>
      </div>
      
      <div class="events-grid">
        <EventCard v-for="event in events" :key="event.id" :event="event" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.main-layout { display: flex; min-height: 100vh; }
.content-area { flex-grow: 1; padding: 40px; background-color: #f7f7f9; }

.events-header { display: flex; align-items: center; margin-bottom: 30px; }
.header-text { margin-left: 15px; }
.events-header h1 { font-size: 2em; color: #7b68ee; margin: 0; }
.events-header p { color: #666; margin: 0; }

.events-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* عمودين لعرض الأحداث */
  gap: 25px;
}
</style>