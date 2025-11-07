<template>
  <div class="materials">
    <h1>📚 Study Materials</h1>
    <p>Here you’ll find your course content, notes, and more.</p>

    <router-link to="/" class="back-btn">⬅ Back to Login</router-link>
  </div>
</template>

<style scoped>
.materials {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #5a3beb, #b93feb);
  color: white;
  text-align: center;
}
.back-btn {
  margin-top: 20px;
  padding: 10px 18px;
  border-radius: 10px;
  background: rgba(255,255,255,0.2);
  text-decoration: none;
  color: white;
}
</style>
