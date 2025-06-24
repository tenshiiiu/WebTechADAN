<template>
  <section class="compare-coursemates">
    <h3>Compare with Coursemates</h3>
    <table>
      <thead>
        <tr>
          <th>Matric Number</th>
          <th>Name</th>
          <th>Total Mark</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.matric }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.totalMark }}%</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'CompareCoursemates',
  data() {
    return {
      students: [
        { id: 1, matric: 'A12345', name: 'John Doe', totalMark: 85 },
        { id: 2, matric: 'A12346', name: 'Jane Smith', totalMark: 92 },
        { id: 3, matric: 'A12347', name: 'Bob Johnson', totalMark: 78 }
      ]
    };
  }
};
</script>

<style scoped>
.compare-coursemates {
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
</style>