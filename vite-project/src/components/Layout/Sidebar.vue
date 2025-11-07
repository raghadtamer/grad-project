<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Home, BookOpen, Clock, Settings, Zap, Edit, Calendar, FileText, Calculator, GraduationCap, Grid, LogOut } from 'lucide-vue-next';

const route = useRoute();

const navLinks = ref([
    { name: 'Home', path: '/', icon: Home, routeName: 'home' },
    { name: 'Subjects', path: '/subjects', icon: BookOpen, routeName: 'subjects' },
    { name: 'Quizzes', path: '/quizzes', icon: Edit, routeName: 'quizzes' },
    { name: 'AI Assistant', path: '/ai-assistant', icon: Zap, routeName: 'ai-assistant' },
    { name: 'Events', path: '/events', icon: Calendar, routeName: 'events' },
    { name: 'Notes', path: '/notes', icon: FileText, routeName: 'notes' },
    { name: 'GPA Calculator', path: '/gpa-calculator', icon: Calculator, routeName: 'gpa-calculator' },
    { name: 'Grades', path: '/grades', icon: GraduationCap, routeName: 'grades' },
    { name: 'Study Plan', path: '/study-plan', icon: Grid, routeName: 'study-plan' },
    { name: 'Schedule', path: '/schedule', icon: Clock, routeName: 'schedule' },
]);

const isLinkActive = (routeName) => {
    return route.name === routeName;
};

const user = ref({
    initials: 'MA',
    name: 'malakkelmegy',
    email: 'malakkelmegy@gmail.com'
});
</script>

<template>
    <aside class="sidebar-container">
        <div class="logo">
            <GraduationCap size="24" color="#9932cc" />
            <span class="app-name">Learnify</span>
        </div>
        <div class="user-profile">
            <div class="user-initials">{{ user.initials }}</div>
            <div class="user-info">
                <div class="user-name">{{ user.name }}</div>
                <div class="user-email">{{ user.email }}</div>
            </div>
        </div>
        <nav class="nav-links">
            <RouterLink 
                v-for="link in navLinks" 
                :key="link.name" 
                :to="{ name: link.routeName }"
                :class="['nav-item', { active: isLinkActive(link.routeName) }]"
            >
                <component :is="link.icon" size="20" />
                <span>{{ link.name }}</span>
            </RouterLink>
        </nav>
        <div class="logout-section">
            <RouterLink :to="{ name: 'logout' }" class="logout-btn">
                <LogOut size="20" />
                <span>Logout</span>
            </RouterLink>
        </div>
    </aside>
</template>

<style scoped>
.sidebar-container { width: 280px; background-color: white; padding: 30px 20px; box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05); display: flex; flex-direction: column; height: 100vh; position: sticky; top: 0; }
.logo { display: flex; align-items: center; gap: 10px; margin-bottom: 30px; padding: 0 10px; }
.app-name { font-size: 1.5em; font-weight: 700; color: #333; }
.user-profile { display: flex; align-items: center; gap: 15px; padding: 15px; background-color: #f7f7f9; border-radius: 10px; margin-bottom: 30px; }
.user-initials { width: 40px; height: 40px; background-color: #4a54e1; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.1em; }
.user-name { font-weight: 600; color: #333; font-size: 0.95em; }
.user-email { font-size: 0.8em; color: #777; }
.nav-links { flex-grow: 1; }
.nav-item { display: flex; align-items: center; gap: 15px; padding: 12px 15px; margin-bottom: 8px; border-radius: 10px; color: #555; text-decoration: none; font-weight: 500; transition: background-color 0.2s, color 0.2s; }
.nav-item:hover { background-color: #f0f0ff; color: #4a54e1; }
.nav-item.active { background-color: #4a54e1; color: white; font-weight: 600; box-shadow: 0 4px 10px rgba(74, 84, 225, 0.3); }
.nav-item.active svg { color: white !important; }
.logout-section { padding-top: 20px; border-top: 1px solid #eee; }
.logout-btn { display: flex; align-items: center; gap: 15px; padding: 12px 15px; border-radius: 10px; color: #FF6347; text-decoration: none; font-weight: 500; background-color: #fff0f0; transition: background-color 0.2s; }
.logout-btn:hover { background-color: #fde4e4; }
</style>