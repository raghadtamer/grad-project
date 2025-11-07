<template>
  <div class="container">
    <!-- Left Section -->
    <div class="left-section">
      <div class="logo">
        <h1 class="title">Learnify</h1>
        <i class="fa-solid fa-graduation-cap cap-icon"></i>
      </div>

      <h2 class="subtitle">Transform Your Learning Journey</h2>
      <p class="description">
        Your all-in-one platform for academic excellence. Track your progress,
        take quizzes, get AI assistance, and achieve your educational goals.
      </p>

      <div class="features">
        <button class="feature-btn blue"><i class="fa-solid fa-brain"></i> AI-Powered Learning</button>
        <button class="feature-btn purple"><i class="fa-solid fa-chart-line"></i> Smart Analytics</button>
        <button class="feature-btn pink"><i class="fa-solid fa-list-check"></i> Track Progress</button>
        <button class="feature-btn light"><i class="fa-solid fa-bullseye"></i> Achieve Goals</button>
      </div>
    </div>

    <!-- Right Section -->
    <div class="right-section">
      <div class="login-box">
        <h2>Welcome Back!</h2>
        <p class="login-sub">Sign in to continue your learning</p>

        <div class="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="student@university.edu" />
        </div>

        <div class="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button class="signin-btn">Sign In</button>

        <p class="demo-text">Demo: Use any email and password to login</p>

        <div class="bottom-buttons">
          <button><i class="fa-solid fa-bullseye"></i> Goal Tracking</button>
          <button><i class="fa-solid fa-note-sticky"></i> Smart Notes</button>
          <button><i class="fa-solid fa-robot"></i> AI Help</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* الأساسيات */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #2b1b78, #732a7b);
  color: white;
  font-family: "Segoe UI", sans-serif;
  padding: 0 60px;
}

/* الجزء الشمال */
.left-section {
  flex: 1;
  padding-right: 30px;
}

/* اللوجو */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.title {
  font-size: 55px;
  background: linear-gradient(to right, #6ea3f9, #f186b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.cap-icon {
  font-size: 45px;
  color: #6ea3f9;
  transform: translateY(5px);
}

.subtitle {
  font-size: 22px;
  margin-top: 10px;
  font-weight: 600;
}

.description {
  max-width: 500px;
  line-height: 1.6;
  color: #d5d5ff;
  margin: 20px 0;
}

/* الزرائر */
.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 30px;
}

.feature-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
}

.feature-btn:hover {
  transform: translateY(-3px);
}

.blue {
  background: linear-gradient(to right, #3da9fc, #77b5fe);
}

.purple {
  background: linear-gradient(to right, #a16ae8, #c77dff);
}

.pink {
  background: linear-gradient(to right, #f857a6, #ff5858);
}

.light {
  background: linear-gradient(to right, #7cd3ff, #a8e0ff);
  color: #1a1a1a;
}

/* الجزء اليمين */
.right-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.login-box {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px 50px;
  width: 400px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.login-box h2 {
  font-size: 28px;
  font-weight: bold;
}

.login-sub {
  font-size: 14px;
  color: #ddd;
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
  color: #eee;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 14px;
}

/* زرار الدخول */
.signin-btn {
  width: 100%;
  margin-top: 10px;
  padding: 14px;
  border-radius: 12px;
  border: none;
  font-size: 17px;
  font-weight: 600;
  color: white;
  background: linear-gradient(to right, #3494e6, #ec6ead);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.signin-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 100, 150, 0.4);
}

.demo-text {
  font-size: 13px;
  margin-top: 15px;
  color: #ccc;
  text-align: center;
}

/* الزرائر التحت */
.bottom-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.bottom-buttons button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 13px;
  color: white;
  background: rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;
}

.bottom-buttons button:hover {
  transform: translateY(-3px);
  background: linear-gradient(to right, #ff758c, #ff7eb3);
}

button i {
  margin-right: 8px;
}
</style>
