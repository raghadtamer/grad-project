<script setup>
import Sidebar from '../components/Layout/Sidebar.vue'; 
import DashboardView from '../components/DashboardView.vue'; 
</script>

<template>
  <div class="main-layout">
    <Sidebar />
    <main class="content-area">
      <DashboardView />
    </main>
  </div>
</template>

<style scoped>
.main-layout { display: flex; min-height: 100vh; }
.content-area { flex-grow: 1; padding: 40px; background-color: #f7f7f9; overflow-y: auto; }
</style>