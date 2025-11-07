<template>
  <div class="subject-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "SubjectCard",
  props: {
    title: String,
    description: String
  }
};
</script>

<style scoped>
.subject-card {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
}
</style>
