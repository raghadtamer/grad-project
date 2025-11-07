<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 
import StatCard from './StatCard.vue';
import ActionCard from './ActionCard.vue';
import ActivityItem from './ActivityItem.vue';

const router = useRouter(); 

const navigateToQuizzes = () => {
    router.push({ name: 'quizzes' }); 
};

const navigateToSubjects = () => {
    router.push({ name: 'subjects' }); 
};

const stats = ref([
  { title: 'Total Subjects', value: '6', icon: 'book', color: '#6A5ACD' },
  { title: 'Quizzes Done', value: '18/24', icon: 'zap', color: '#FFA07A' },
  { title: 'Study Hours', value: '42h', icon: 'clock', color: '#1E90FF' },
  { title: 'Current GPA', value: '3.75', icon: 'award', color: '#FF69B4' },
]);

const quickActions = ref([
  { title: 'Study Materials', subtitle: 'Access course content and resources', icon: 'book-open', action: navigateToSubjects },
  { title: 'Take Quiz', subtitle: 'Test your knowledge', icon: 'edit', action: navigateToQuizzes },
  { title: 'Events', subtitle: 'View upcoming deadlines and holidays', icon: 'calendar', action: null },
  { title: 'My Notes', subtitle: 'Quickly access your saved notes', icon: 'file-text', action: null },
  { title: 'GPA Calculator', subtitle: 'Calculate your academic average', icon: 'calculator', action: null },
  { title: 'Grades', subtitle: 'Review your current scores', icon: 'clipboard-list', action: null },
]);

const recentActivity = ref([
  { status: 'Completed', detail: 'AI Quiz #3', time: '2 hours ago', course: 'Artificial Intelligence' },
  { status: 'Added', detail: 'notes on Algorithms', time: '5 hours ago', course: 'Computer Science' },
  { status: 'Upcoming', detail: 'Database Exam', time: 'Tomorrow', course: 'Database Management' },
]);

const greeting = (name) => {
    const hour = new Date().getHours();
    let timeOfDay = 'Good Evening';
    if (hour < 12) timeOfDay = 'Good Morning';
    else if (hour < 18) timeOfDay = 'Good Afternoon';
    return `${timeOfDay}, ${name}!`;
};
</script>

<template>
  <div class="dashboard">
    <header class="welcome-banner">
      <h2>✨ {{ greeting('malakkelmegy') }}</h2>
      <p>Ready to achieve your academic goals today? Let's make it productive! 🚀</p>
    </header>
    <section class="stats-section">
      <StatCard v-for="stat in stats" :key="stat.title" :data="stat" />
    </section>
    <div class="content-body">
      <section class="quick-actions-section">
        <h3 class="section-title">Quick Actions <span class="feature-count">6 Features</span></h3>
        <div class="action-grid">
          <ActionCard 
            v-for="(action, index) in quickActions" 
            :key="index" 
            :data="action"
            :onClick="action.action" 
          />
        </div>
      </section>
      <section class="recent-activity-section">
        <h3 class="section-title">Recent Activity</h3>
        <div class="activity-list">
          <ActivityItem v-for="(activity, index) in recentActivity" :key="index" :data="activity" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.welcome-banner { background: linear-gradient(to right, #7b68ee, #9932cc, #ff69b4); color: white; padding: 30px; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); }
.stats-section { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 30px; }
.content-body { display: flex; gap: 20px; }
.quick-actions-section { flex: 3; }
.recent-activity-section { flex: 2; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); }
.action-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.section-title { font-size: 1.3em; font-weight: 600; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px; display: flex; justify-content: space-between; }
</style>