<template>
  <section class="overall-performance">
    <h3>View Advisee’s Overall Course Performance</h3>
    <div>
      <select v-model="selectedAdvisee" @change="loadPerformance">
        <option v-for="advisee in advisees" :key="advisee.id" :value="advisee">
          {{ advisee.matric }} - {{ advisee.name }}
        </option>
      </select>
    </div>
    <table v-if="performance">
      <thead>
        <tr>
          <th>Course</th>
          <th>Overall Grade</th>
          <th>GPA</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in performance" :key="item.id">
          <td>{{ item.course }}</td>
          <td>{{ item.grade }}</td>
          <td>{{ item.gpa }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>Select an advisee to view performance.</p>
  </section>
</template>

<script>
export default {
  name: 'OverallCoursePerformance',
  data() {
    return {
      advisees: [
        { id: 1, matric: 'A12345', name: 'John Doe' },
        { id: 2, matric: 'A12346', name: 'Jane Smith' }
      ],
      selectedAdvisee: null,
      performance: null
    };
  },
  methods: {
    loadPerformance() {
      if (this.selectedAdvisee) {
        this.performance = [
          { id: 1, course: 'SECJ 3483', grade: 'B+', gpa: 3.3 },
          { id: 2, course: 'SECJ 3490', grade: 'A-', gpa: 3.7 }
        ];
      } else {
        this.performance = null;
      }
    }
  }
};
</script>

<style scoped>
.overall-performance {
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
select {
  padding: 5px;
  margin: 5px;
}
</style>