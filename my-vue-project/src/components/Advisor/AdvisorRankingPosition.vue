<template>
  <section class="ranking-position">
    <h3>View Ranking/Position</h3>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Matric Number</th>
          <th>Name</th>
          <th>Quiz</th>
          <th>Assignment</th>
          <th>Final Exam</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in rankedStudents" :key="student.id">
          <td>{{ index + 1 }}</td>
          <td>{{ student.matric }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.quiz || 'N/A' }}</td>
          <td>{{ student.assignment || 'N/A' }}</td>
          <td>{{ student.finalExam || 'N/A' }}</td>
          <td>{{ calculateTotal(student) }}%</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'RankingPosition',
  data() {
    return {
      students: [
        { id: 1, matric: 'A12345', name: 'John Doe', quiz: 18, assignment: 25, finalExam: 25 },
        { id: 2, matric: 'A12346', name: 'Jane Smith', quiz: 20, assignment: 28, finalExam: 28 },
        { id: 3, matric: 'A12347', name: 'Bob Johnson', quiz: 15, assignment: 20, finalExam: 22 }
      ],
      components: [
        { name: 'Quiz', maxMark: 20, weight: 20 },
        { name: 'Assignment', maxMark: 30, weight: 30 },
        { name: 'Final Exam', maxMark: 30, weight: 30 }
      ]
    };
  },
  computed: {
    rankedStudents() {
      return [...this.students].sort((a, b) => {
        const totalA = this.calculateTotal(a);
        const totalB = this.calculateTotal(b);
        return totalB - totalA; // Sort in descending order
      });
    }
  },
  methods: {
    calculateTotal(student) {
      return this.components.reduce((sum, comp) => {
        const mark = student[comp.name.toLowerCase()] || 0;
        return sum + (mark / comp.maxMark) * comp.weight;
      }, 0).toFixed(2);
    }
  }
};
</script>

<style scoped>
.ranking-position {
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
th {
  background-color: #f0f0f0;
}
</style>