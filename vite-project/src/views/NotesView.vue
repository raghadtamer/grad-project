<script setup>
import { ref } from 'vue';
import Sidebar from '../components/Layout/Sidebar.vue'; 
import { FileText, Plus } from 'lucide-vue-next';

// حالة وهمية لتحديد ما إذا كانت هناك ملاحظات موجودة
// مبدئياً سنبقيها 'false' لعرض حالة الصفحة الفارغة
const hasNotes = ref(false); 

const createNewNote = () => {
    // في التطبيق الفعلي، سيتم هنا فتح نموذج إنشاء ملاحظة وحفظها
    alert('Preparing to create a new note...');
    
    // يمكنك إلغاء التعليق على السطر التالي للاختبار ورؤية كيف ستختفي حالة الصفحة الفارغة
    // hasNotes.value = true; 
};
</script>

<template>
  <div class="main-layout">
    <Sidebar />
    <main class="content-area">
      <div class="notes-header">
        <div class="header-text">
          <FileText size="40" color="#7b68ee" />
          <h1>Study Notes</h1>
          <p class="subtitle">Create and organize your study materials</p>
        </div>
        <button class="new-note-btn" @click="createNewNote">
          <Plus size="20" color="white" />
          <span>New Note</span>
        </button>
      </div>

      <div v-if="!hasNotes" class="empty-state-container">
        <div class="empty-state-card">
          <FileText size="80" color="#aaa" /> 
          
          <h2>No notes yet</h2>
          <p>Create your first note to get started!</p>
        </div>
      </div>

      <div v-else class="notes-list">
        <p class="placeholder-text">Your saved notes will appear here...</p>
      </div>
      
    </main>
  </div>
</template>

<style scoped>
.main-layout { display: flex; min-height: 100vh; }
.content-area { flex-grow: 1; padding: 40px; background-color: #f7f7f9; }

/* تنسيق رأس الصفحة */
.notes-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 30px; 
    padding-bottom: 15px; 
    border-bottom: 1px solid #eee;
}
.header-text { 
    display: flex; 
    align-items: center; 
    gap: 15px;
}
.header-text h1 { 
    font-size: 2em; 
    color: #7b68ee; /* نفس لون AI Assistant */
    margin: 0;
}
.subtitle { 
    color: #666; 
    margin: 0; 
    font-size: 1em;
    padding-top: 5px;
    margin-right: auto; /* لدفع الزر إلى أقصى اليمين */
}

/* زر إنشاء ملاحظة جديدة */
.new-note-btn {
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
.new-note-btn:hover {
    opacity: 0.9;
}

/* تنسيق حالة الصفحة الفارغة - لتوسيط المحتوى في وسط الشاشة */
.empty-state-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh; 
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

.placeholder-text {
    text-align: center;
    color: #aaa;
    margin-top: 50px;
}
</style>