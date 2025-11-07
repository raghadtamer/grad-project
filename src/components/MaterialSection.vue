<template>
  <div class="material-section">
    <div class="subject-header">
      <div class="subject-icon">
        <i class="fa-solid fa-computer"></i>
      </div>
      <div>
        <h2>Computer Science</h2>
        <p>Comprehensive study materials and resources</p>
      </div>
    </div>

    <div class="category-card">
      <div class="category-header">
        <div class="category-icon">
          <i class="fa-solid fa-layer-group"></i>
        </div>
        <div>
          <h3>Data Structures</h3>
          <span class="tag">4 materials</span>
        </div>
        <i class="fa-solid fa-chevron-down arrow"></i>
      </div>

      <div class="materials-list">
        <div class="material-item">📘 Arrays and Lists</div>
        <div class="material-item">🌳 Trees and Graphs</div>
        <div class="material-item">🔢 Hash Tables</div>
        <div class="material-item">⚙️ Heaps</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.material-section {
  background: white;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.subject-header {
  display: flex;
  align-items: center;
  gap: 15px;
  background: linear-gradient(to right, #f9fbff, #eef3ff);
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 25px;
}

.subject-icon {
  background: linear-gradient(to right, #3da9fc, #77b5fe);
  color: white;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 20px;
}

.subject-header h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
}

.subject-header p {
  margin: 0;
  color: #777;
  font-size: 14px;
}

.category-card {
  background: linear-gradient(to right, #f7faff, #edf4ff);
  border-radius: 15px;
  padding: 20px;
}

.category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category-icon {
  background: #3da9fc;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.category-header h3 {
  margin: 0;
  font-size: 18px;
}

.tag {
  background: #dfeaff;
  color: #3a4ed5;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 12px;
  margin-top: 3px;
  display: inline-block;
}

.arrow {
  color: #555;
}

.materials-list {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.material-item {
  background: white;
  padding: 12px 15px;
  border-radius: 10px;
  font-size: 15px;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: background 0.3s;
}

.material-item:hover {
  background: #eef3ff;
}
</style>
