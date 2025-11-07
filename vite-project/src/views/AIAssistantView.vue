
<script setup>
import Sidebar from '../components/Layout/Sidebar.vue'; 
import ChatInterface from '../components/ChatInterface.vue'; 
import { Zap } from 'lucide-vue-next';
</script>

<template>
  <div class="main-layout">
    <Sidebar />
    <main class="content-area">
      <div class="ai-header">
        <Zap size="40" color="#7b68ee" />
        <div class="header-text">
          <h1>AI Study Assistant</h1>
          <p>Your 24/7 learning companion powered by AI</p>
        </div>
      </div>
      <ChatInterface />
    </main>
  </div>
</template>

<style scoped>
.main-layout { display: flex; min-height: 100vh; }
.content-area { flex-grow: 1; padding: 40px; background-color: #f7f7f9; }
.ai-header { display: flex; align-items: center; margin-bottom: 30px; }
.header-text { margin-left: 15px; }
.ai-header h1 { font-size: 2em; color: #7b68ee; margin: 0; }
.ai-header p { color: #666; margin: 0; }
</style>