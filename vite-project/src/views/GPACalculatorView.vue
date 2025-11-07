<script setup>
import { ref, computed } from 'vue';
import Sidebar from '../components/Layout/Sidebar.vue'; 
import { TrendingUp, Percent, Calculator, X } from 'lucide-vue-next';

// ============================================
// 1. منطق تحويل الدرجات والحسابات
// ============================================

// نظام تحويل الدرجة الحرفية إلى نقطة GPA
const gradePointMap = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'D-': 0.7,
  'F': 0.0, 'N/A': 0.0 // N/A للمقررات التي لم تُحسب بعد
};

// نظام تحويل الدرجة الحرفية إلى نسبة مئوية (لأغراض العرض)
const gradePercentMap = {
  'A+': 95, 'A': 92, 'A-': 88,
  'B+': 85, 'B': 82, 'B-': 78,
  'C+': 75, 'C': 72, 'C-': 68,
  'D+': 65, 'D': 62, 'D-': 58,
  'F': 50, 'N/A': 0 
};

// ============================================
// 2. حالة المقررات
// ============================================

const courses = ref([
  // مقرر افتراضي 1
  { id: 1, name: 'Data Structures', credits: 4, grade: 'A' },
  // مقرر افتراضي 2
  { id: 2, name: 'Calculus I', credits: 3, grade: 'B+' },
  // مقرر افتراضي 3
  { id: 3, name: 'Physics II', credits: 3, grade: 'C' }
]);

const availableGrades = Object.keys(gradePointMap);

const addCourse = () => {
  courses.value.push({
    id: Date.now(),
    name: '',
    credits: 3,
    grade: 'N/A'
  });
};

const removeCourse = (id) => {
  courses.value = courses.value.filter(course => course.id !== id);
};


// ============================================
// 3. الحسابات المحوسبة (Computed Properties)
// ============================================

// حساب مجموع النقاط (GPA)
const totalQualityPoints = computed(() => {
  return courses.value.reduce((sum, course) => {
    const points = gradePointMap[course.grade] || 0;
    return sum + (points * course.credits);
  }, 0);
});

// حساب مجموع الساعات المعتمدة
const totalCredits = computed(() => {
  return courses.value.reduce((sum, course) => sum + (course.credits || 0), 0);
});

// حساب المعدل التراكمي (GPA)
const calculatedGPA = computed(() => {
  if (totalCredits.value === 0) return 0.00;
  return (totalQualityPoints.value / totalCredits.value).toFixed(2);
});

// حساب متوسط النسبة المئوية التقريبية
const averagePercentage = computed(() => {
  const totalPercentPoints = courses.value.reduce((sum, course) => {
    const percent = gradePercentMap[course.grade] || 0;
    return sum + (percent * course.credits);
  }, 0);

  if (totalCredits.value === 0) return '0.0%';
  const avg = (totalPercentPoints / totalCredits.value).toFixed(1);
  return `${avg}%`;
});


// ============================================
// 4. مكونات البطاقات الإحصائية
// ============================================

const statCards = computed(() => [
  { 
    title: 'Total Credits', 
    value: totalCredits.value, 
    icon: Calculator, 
    color: '#7b68ee', 
    unit: '' 
  },
  { 
    title: 'Semester GPA', 
    value: calculatedGPA.value, 
    icon: TrendingUp, 
    color: '#ff69b4', 
    unit: '' 
  },
  { 
    title: 'Average Percentage', 
    value: averagePercentage.value, 
    icon: Percent, 
    color: '#4a54e1', 
    unit: '' 
  }
]);
</script>

<template>
  <div class="main-layout">
    <Sidebar />
    <main class="content-area">
      <div class="header-section">
        <Calculator size="40" color="#7b68ee" />
        <div class="header-text">
          <h1>GPA Calculator</h1>
          <p>Estimate your semester GPA and overall academic performance</p>
        </div>
      </div>
      
      <div class="stat-cards-grid">
        <div v-for="card in statCards" :key="card.title" class="stat-card">
          <component :is="card.icon" size="30" :color="card.color" />
          <p class="stat-title">{{ card.title }}</p>
          <h2 class="stat-value" :style="{ color: card.color }">{{ card.value }}{{ card.unit }}</h2>
        </div>
      </div>
      
      <div class="calculator-table-card">
        <div class="table-header">
            <h3>Course Grades Entry</h3>
            <button class="add-course-btn" @click="addCourse">
                <Plus size="18" />
                Add Course
            </button>
        </div>
        
        <div class="course-table">
          <div class="table-row table-head">
            <div class="col name">Course Name</div>
            <div class="col credits">Credits</div>
            <div class="col grade">Grade</div>
            <div class="col action"></div>
          </div>

          <div v-for="course in courses" :key="course.id" class="table-row">
            <div class="col name">
              <input type="text" v-model="course.name" placeholder="e.g., Linear Algebra">
            </div>
            <div class="col credits">
              <input type="number" v-model.number="course.credits" min="1" max="6">
            </div>
            <div class="col grade">
              <select v-model="course.grade">
                <option v-for="grade in availableGrades" :key="grade" :value="grade">
                  {{ grade }}
                </option>
              </select>
            </div>
            <div class="col action">
              <button class="remove-btn" @click="removeCourse(course.id)">
                <X size="18" color="#ff4d4d" />
              </button>
            </div>
          </div>
          
          <div v-if="courses.length === 0" class="empty-message">
              No courses added. Click "Add Course" to start calculating!
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* التنسيقات العامة للصفحة */
.main-layout { display: flex; min-height: 100vh; }
.content-area { flex-grow: 1; padding: 40px; background-color: #f7f7f9; }

/* رأس الصفحة */
.header-section { display: flex; align-items: center; margin-bottom: 30px; }
.header-text { margin-left: 15px; }
.header-section h1 { font-size: 2em; color: #7b68ee; margin: 0; }
.header-section p { color: #666; margin: 0; }

/* بطاقات النتائج الإحصائية */
.stat-cards-grid {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 30px;
}
.stat-card {
    flex: 1;
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.stat-title {
    font-size: 0.9em;
    color: #999;
    margin-top: 10px;
    margin-bottom: 5px;
}
.stat-value {
    font-size: 2em;
    font-weight: 700;
    margin: 0;
}

/* جدول حاسبة المعدل */
.calculator-table-card {
    background-color: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
}
.table-header h3 {
    margin: 0;
    color: #555;
    font-size: 1.3em;
}

.add-course-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: #7b68ee;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
}

/* تنسيق الجدول */
.course-table {
    display: flex;
    flex-direction: column;
}
.table-row {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 50px; /* تقسيم الأعمدة */
    gap: 20px;
    padding: 10px 0;
    align-items: center;
}
.table-head {
    font-weight: 700;
    color: #777;
    border-bottom: 2px solid #eee;
    margin-bottom: 10px;
}
.table-head .col {
    padding: 5px 0;
}

.col input, .col select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1em;
}

.col.credits input {
    text-align: center;
}

.remove-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    transition: transform 0.2s;
}
.remove-btn:hover {
    transform: scale(1.1);
}

.empty-message {
    text-align: center;
    color: #aaa;
    padding: 40px;
    font-style: italic;
}
</style>