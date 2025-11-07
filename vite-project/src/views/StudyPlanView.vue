<script setup>
import { ref, computed } from 'vue';
import Sidebar from '../components/Layout/Sidebar.vue'; 
import { Plus, ListChecks, Calendar, ClipboardCheck, Send } from 'lucide-vue-next';

// ============================================
// 1. حالة المهام (Tasks State)
// ============================================

const tasks = ref([
    { id: 1, text: 'Review Data Structures algorithms', completed: false, date: 'Today' },
    { id: 2, text: 'Complete Chapter 4 of Physics book', completed: false, date: 'Tomorrow' },
    { id: 3, text: 'Start AI final project documentation', completed: true, date: 'Nov 10' },
]);

// حالة إدارة الإدخال الجديد
const showNewTaskInput = ref(false); // لإظهار/إخفاء حقل الإدخال
const newTaskText = ref(''); // لتخزين نص المهمة الجديدة

// ============================================
// 2. حساب التقدم (Progress Calculation)
// ============================================

const totalTasks = computed(() => tasks.value.length);

const completedTasksCount = computed(() => tasks.value.filter(t => t.completed).length);

const completionRate = computed(() => {
    if (totalTasks.value === 0) return 0;
    return Math.round((completedTasksCount.value / totalTasks.value) * 100);
});

// ============================================
// 3. الإجراءات
// ============================================

const addTask = () => {
    // هذه الوظيفة تُستدعى لإضافة المهمة فعلياً
    if (newTaskText.value.trim() !== '') {
        tasks.value.push({
            id: Date.now(),
            text: newTaskText.value.trim(),
            completed: false,
            date: 'Unscheduled'
        });
        // إعادة تهيئة الحقول بعد الإضافة
        newTaskText.value = '';
        showNewTaskInput.value = false;
    } else {
        // إذا كان الحقل فارغاً وأغلق المستخدم الحقل
        showNewTaskInput.value = false;
    }
};

const handleAddButtonClick = () => {
    // هذه الوظيفة تُستدعى عند الضغط على زر "Add Task" في الهيدر
    if (showNewTaskInput.value) {
        // إذا كان الحقل مفتوحاً، اضغط الزر لإضافة المهمة
        addTask();
    } else {
        // إذا كان الحقل مغلقاً، افتحه
        showNewTaskInput.value = true;
    }
};

const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
}
</script>

<template>
  <div class="main-layout">
    <Sidebar />
    <main class="content-area">
      
      <div class="header-section">
        <div class="header-text">
          <ListChecks size="40" color="#7b68ee" />
          <h1>Study Plan</h1>
          <p class="subtitle">Organize your study tasks and goals</p>
        </div>
        <button class="add-task-btn" @click="handleAddButtonClick">
          <Plus v-if="!showNewTaskInput" size="20" color="white" />
          <Send v-else size="20" color="white" />
          <span>{{ showNewTaskInput ? 'Confirm Task' : 'Add Task' }}</span>
        </button>
      </div>

      <div class="progress-overview-card">
        <h3 class="progress-title">Progress Overview</h3>
        <div class="progress-line">
          <p class="progress-label">Completion Rate</p>
          <div class="progress-bar-container">
            <div 
              class="progress-bar" 
              :style="{ width: completionRate + '%' }"
            ></div>
          </div>
          <span class="progress-rate">{{ completionRate }}%</span>
          <span class="task-count">{{ completedTasksCount }}/{{ totalTasks }} Tasks</span>
        </div>
      </div>

      <div v-if="showNewTaskInput" class="new-task-input-container">
          <input 
              type="text" 
              v-model="newTaskText" 
              @keyup.enter="handleEnterKey"
              placeholder="Enter your new study task and press Enter..."
              class="new-task-input"
              autofocus
          >
          <button class="input-send-btn" @click="addTask">
              <Send size="18" color="#7b68ee" />
          </button>
      </div>
      
      <div v-if="totalTasks > 0 || showNewTaskInput" class="tasks-list-container">
        
        <div v-for="task in tasks" :key="task.id" class="task-item">
            <input 
                type="checkbox" 
                :id="'task-' + task.id" 
                v-model="task.completed"
                class="task-checkbox"
            >
            <label :for="'task-' + task.id" :class="{ 'completed': task.completed }" class="task-details">
                <span class="task-text">{{ task.text }}</span>
                <span class="task-date">
                    <Calendar size="14" />
                    {{ task.date }}
                </span>
            </label>
        </div>

      </div>

      <div v-else class="empty-state-container">
        <div class="empty-state-card">
          <ClipboardCheck size="80" color="#aaa" /> 
          <h2>No tasks yet</h2>
          <p>Create your first study task to get started!</p>
        </div>
      </div>
      
    </main>
  </div>
</template>

<style scoped>
/* التنسيقات السابقة (مختصرة للتوضيح) */
.main-layout { display: flex; min-height: 100vh; }
.content-area { flex-grow: 1; padding: 40px; background-color: #f7f7f9; }

/* رأس الصفحة */
.header-section { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 30px; 
    padding-bottom: 15px; 
}
.header-text { 
    display: flex; 
    align-items: center; 
    gap: 15px;
}
.header-text h1 { 
    font-size: 2em; 
    color: #7b68ee; 
    margin: 0;
}
.subtitle { 
    color: #666; 
    margin: 0; 
    font-size: 1em;
    padding-top: 5px;
}

.add-task-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(to right, #4a54e1, #7b68ee);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: opacity 0.2s;
    box-shadow: 0 4px 10px rgba(74, 84, 225, 0.3);
}

/* التنسيق الجديد لحقل الإدخال */
.new-task-input-container {
    display: flex;
    gap: 10px;
    background-color: white;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    border: 2px solid #7b68ee; /* إطار أزرق فاتح لتمييز الإدخال */
}
.new-task-input {
    flex-grow: 1;
    padding: 10px;
    border: none;
    font-size: 1.1em;
    outline: none;
}
.input-send-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

/* بطاقة ملخص التقدم */
.progress-overview-card {
    background-color: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    margin-bottom: 30px;
}
.progress-title {
    font-size: 1.2em;
    color: #333;
    margin-bottom: 15px;
}
.progress-line {
    display: grid;
    grid-template-columns: 200px 1fr auto auto;
    align-items: center;
    gap: 20px;
}
.progress-label {
    font-weight: 600;
    color: #555;
}
.progress-bar-container {
    height: 10px;
    background-color: #eee;
    border-radius: 5px;
    overflow: hidden;
}
.progress-bar {
    height: 100%;
    background: linear-gradient(to right, #4a54e1, #7b68ee);
    transition: width 0.5s ease;
}
.progress-rate {
    font-weight: 700;
    color: #7b68ee;
}
.task-count {
    color: #999;
    font-size: 0.9em;
}


/* قائمة المهام */
.tasks-list-container {
    background-color: white;
    padding: 10px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    margin-top: 20px; /* لتبعد عن حقل الإدخال الجديد */
}
.task-item {
    display: flex;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
}
.task-item:last-child {
    border-bottom: none;
}
.task-checkbox {
    min-width: 20px;
    height: 20px;
    margin-right: 15px;
    cursor: pointer;
    accent-color: #7b68ee;
}
.task-details {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    cursor: pointer;
}
.task-details.completed .task-text {
    text-decoration: line-through;
    color: #aaa;
}
.task-text {
    font-size: 1.1em;
    color: #333;
}
.task-date {
    font-size: 0.9em;
    color: #7b68ee;
    display: flex;
    align-items: center;
    gap: 5px;
}

/* حالة الصفحة الفارغة */
.empty-state-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh; 
}
.empty-state-card {
    text-align: center;
    padding: 40px;
}
.empty-state-card h2 {
    color: #555;
    margin-top: 15px;
    font-size: 1.5em;
}
.empty-state-card p {
    color: #999;
    margin-top: 5px;
}
</style>