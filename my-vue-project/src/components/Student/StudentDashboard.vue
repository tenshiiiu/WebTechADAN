<template>
  <div class="student-dashboard">
    <nav class="navbar">
      <h2>Student Dashboard</h2>
      <div class="tabs">
        <router-link to="/student/breakdown" class="tab" active-class="active">Mark Breakdown</router-link>
        <router-link to="/student/compare" class="tab" active-class="active">Compare with Coursemates</router-link>
        <router-link to="/student/ranking" class="tab" active-class="active">View Ranking/Position</router-link>
        <router-link to="/student/average" class="tab" active-class="active">View Class Average per Component</router-link>
      </div>
      <button @click="logout">Logout</button>
    </nav>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentDashboard',
  methods: {
    logout() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.student-dashboard {
  font-family: Arial, sans-serif;
  padding: 20px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
.tabs {
  display: flex;
  gap: 10px;
}
.tab {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  background: none;
}
.tab.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
.tab:hover {
  background-color: #f0f0f0;
}
.content {
  margin-top: 20px;
}
section {
  margin-bottom: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 5px;
}
</style>