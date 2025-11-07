<template>
  <div class="home">
    <!-- العنوان الرئيسي -->
    <header class="header">
      <i class="fas fa-graduation-cap"></i>
      <h1>Learnify</h1>
    </header>

    <!-- الأزرار -->
    <section class="buttons-grid">
      <button class="feature-btn" @click="goTo('study-materials')">
        <i class="fas fa-book"></i>
        <span>Study Materials</span>
      </button>

      <button class="feature-btn">
        <i class="fas fa-tasks"></i>
        <span>Assignments</span>
      </button>

      <button class="feature-btn">
        <i class="fas fa-pen"></i>
        <span>Exams</span>
      </button>

      <button class="feature-btn">
        <i class="fas fa-chart-line"></i>
        <span>Progress</span>
      </button>

      <button class="feature-btn">
        <i class="fas fa-users"></i>
        <span>Groups</span>
      </button>

      <button class="feature-btn">
        <i class="fas fa-comments"></i>
        <span>Chat</span>
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goTo(page) {
      this.$router.push(`/${page}`);
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom right, #3494E6, #EC6EAD);
  height: 100vh;
  color: white;
  font-family: "Poppins", sans-serif;
  padding: 30px;
}

.header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
}

.header i {
  font-size: 2rem;
}

.header h1 {
  font-size: 2rem;
  font-weight: bold;
}

.buttons-grid {
  display: grid;
  grid-template-columns: repeat(2, 160px);
  gap: 20px;
  justify-content: center;
}

.feature-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: 0.3s ease;
  cursor: pointer;
}

.feature-btn:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: translateY(-4px);
}

.feature-btn i {
  font-size: 1.8rem;
}
</style>
