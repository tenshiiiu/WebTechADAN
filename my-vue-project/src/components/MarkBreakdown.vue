<template>
  <section class="mark-breakdown">
    <h3>View Full Mark Breakdown</h3>
    <div>
      <input v-model="searchStudent" placeholder="Search by Matric Number" />
    </div>
    <table v-if="filteredBreakdowns.length">
      <thead>
        <tr>
          <th>Matric Number</th>
          <th>Name</th>
          <th>Quiz</th>
          <th>Assignment</th>
          <th>Final Exam</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="breakdown in filteredBreakdowns" :key="breakdown.id">
          <td>{{ breakdown.matric }}</td>
          <td>{{ breakdown.name }}</td>
          <td>{{ breakdown.quiz || 'N/A' }}</td>
          <td>{{ breakdown.assignment || 'N/A' }}</td>
          <td>{{ breakdown.finalExam || 'N/A' }}</td>
          <td>{{ calculateTotal(breakdown) }}%</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No data available.</p>
  </section>
</template>

<script>
export default {
  name: 'MarkBreakdown',
  data() {
    return {
      searchStudent: '',
      markBreakdowns: [
        { id: 1, matric: 'A12345', name: 'John Doe', quiz: 18, assignment: 25, finalExam: 25 },
        { id: 2, matric: 'A12346', name: 'Jane Smith', quiz: 20, assignment: 28, finalExam: 28 }
      ]
    };
  },
  computed: {
    filteredBreakdowns() {
      return this.markBreakdowns.filter(breakdown =>
        breakdown.matric.toLowerCase().includes(this.searchStudent.toLowerCase())
      );
    }
  },
  methods: {
    calculateTotal(breakdown) {
      const quizWeight = 20; // Example weights (adjust as per components)
      const assignmentWeight = 30;
      const finalExamWeight = 30;
      const total =
        ((breakdown.quiz || 0) / 20) * quizWeight +
        ((breakdown.assignment || 0) / 30) * assignmentWeight +
        ((breakdown.finalExam || 0) / 30) * finalExamWeight;
      return Math.round(total);
    }
  }
};
</script>

<style scoped>
.mark-breakdown {
  margin-bottom: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 5px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}
input {
  padding: 5px;
  margin: 5px;
}
</style>