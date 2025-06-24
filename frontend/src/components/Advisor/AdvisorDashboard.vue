<template>
  <div class="advisor-dashboard">
    <nav class="navbar">
      <h2>Advisor Dashboard</h2>
      <div class="tabs">
        <router-link to="/advisor/breakdown" class="tab" active-class="active">View Full Mark Breakdown</router-link>
        <router-link to="/advisor/compare" class="tab" active-class="active">View Compare with Coursemates</router-link>
        <router-link to="/advisor/ranking" class="tab" active-class="active">View Ranking/Position</router-link>
        <router-link to="/advisor/average" class="tab" active-class="active">View Class Average per Component</router-link>
        <router-link to="/advisor/reports" class="tab" active-class="active">Generate Advisee Reports</router-link>
        <router-link to="/advisor/performance" class="tab" active-class="active">View Advisee’s Overall Course Performance</router-link>
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
  name: 'AdvisorDashboard',
  methods: {
    logout() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.advisor-dashboard {
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