// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import QuizzesView from '../views/QuizzesView.vue'
// import SubjectsView from '../views/SubjectsView.vue'
// import AIAssistantView from '../views/AIAssistantView.vue' 
// import EventsView from '../views/EventsView.vue' 
// import NotesView from '../views/NotesView.vue' 
// // استيراد صفحة حاسبة المعدل الجديدة
// import GPACalculatorView from '../views/GPACalculatorView.vue' 

// // تعريف مكون وهمي (Placeholder Component) للصفحات التي لم يتم إنشاؤها بعد
// const Placeholder = { template: '<div style="padding: 40px; text-align: center; background-color: #f7f7f9;"><h1>⚠️ Page Under Construction!</h1><p style="color: #666; margin-top: 15px;">This page is not ready yet. Please check back later.</p></div>' };

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home', 
//       component: HomeView
//     },
//     {
//       path: '/quizzes',
//       name: 'quizzes', 
//       component: QuizzesView 
//     },
//     {
//       path: '/subjects',
//       name: 'subjects', 
//       component: SubjectsView 
//     },
//     { 
//       path: '/ai-assistant', 
//       name: 'ai-assistant', 
//       component: AIAssistantView 
//     },
//     { 
//       path: '/events', 
//       name: 'events', 
//       component: EventsView 
//     },
//     { 
//       path: '/notes', 
//       name: 'notes', 
//       component: NotesView 
//     },
    
//     // التعديل هنا: استبدال Placeholder بـ GPACalculatorView
//     { 
//       path: '/gpa-calculator', 
//       name: 'gpa-calculator', 
//       component: GPACalculatorView 
//     },
    
//     // المسارات الأخرى تستخدم المكون الوهمي مؤقتاً
//     { path: '/grades', name: 'grades', component: Placeholder },
//     { path: '/study-plan', name: 'study-plan', component: Placeholder },
//     { path: '/schedule', name: 'schedule', component: Placeholder },
//     { path: '/logout', name: 'logout', component: Placeholder },
//   ]
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizzesView from '../views/QuizzesView.vue'
import SubjectsView from '../views/SubjectsView.vue'
import AIAssistantView from '../views/AIAssistantView.vue' 
import EventsView from '../views/EventsView.vue' 
import NotesView from '../views/NotesView.vue' 
import GPACalculatorView from '../views/GPACalculatorView.vue' 
import StudyPlanView from '../views/StudyPlanView.vue' 

// تعريف مكون وهمي (Placeholder Component) للصفحات التي لم يتم إنشاؤها بعد
const Placeholder = { template: '<div style="padding: 40px; text-align: center; background-color: #f7f7f9;"><h1>⚠️ Page Under Construction!</h1><p style="color: #666; margin-top: 15px;">This page is not ready yet. Please check back later.</p></div>' };

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home', 
      component: HomeView
    },
    {
      path: '/quizzes',
      name: 'quizzes', 
      component: QuizzesView 
    },
    {
      path: '/subjects',
      name: 'subjects', 
      component: SubjectsView 
    },
    
    // الصفحات المكتملة
    { 
      path: '/ai-assistant', 
      name: 'ai-assistant', 
      component: AIAssistantView 
    },
    { 
      path: '/events', 
      name: 'events', 
      component: EventsView 
    },
    { 
      path: '/notes', 
      name: 'notes', 
      component: NotesView 
    },
    { 
      path: '/gpa-calculator', 
      name: 'gpa-calculator', 
      component: GPACalculatorView 
    },
    { 
      path: '/study-plan', 
      name: 'study-plan', 
      component: StudyPlanView 
    },
    
    // المسارات التي لا تزال وهمية
    { path: '/grades', name: 'grades', component: Placeholder },
    { path: '/schedule', name: 'schedule', component: Placeholder },
    { path: '/logout', name: 'logout', component: Placeholder },
  ]
})

export default router