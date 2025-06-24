<template>
  <div class="lecturer-dashboard">
    <nav class="navbar">
      <h2>Lecturer Dashboard</h2>
      <div class="tabs">
        <router-link to="/lecturer/enrollment" class="tab" active-class="active">Manage Student Enrollment</router-link>
        <router-link to="/lecturer/courses" class="tab" active-class="active">Manage Course List</router-link>
        <router-link to="/lecturer/components" class="tab" active-class="active">Manage Assessment Components</router-link>
        <router-link to="/lecturer/final" class="tab" active-class="active">Final Exam Marks</router-link>
        <router-link to="/lecturer/analytics" class="tab" active-class="active">Student Progress Analytics</router-link>
        <router-link to="/lecturer/breakdown" class="tab" active-class="active">View Full Mark Breakdown</router-link>
      </div>
      <button @click="logout">Logout</button>
    </nav>

    <div class="content">
      <router-view />
      <section class="export-notify">
        <button @click="exportCSV">Export Results as CSV</button>
        <button @click="sendNotification">Notify Students</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LecturerDashboard',
  methods: {
    logout() {
      this.$router.push('/login');
    },
    exportCSV() {
      console.log('Export CSV');
    },
    sendNotification() {
      console.log('Notify Students');
    }
  }
};
</script>

<style scoped>
.lecturer-dashboard {
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
.export-notify button {
  padding: 5px;
  margin: 5px;
}
</style>