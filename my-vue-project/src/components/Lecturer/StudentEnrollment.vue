<template>
  <section class="student-enrollment">
    <h3>Manage Student Enrollment</h3>
    <div>
      <input v-model="searchStudent" placeholder="Search by Matric Number" />
      <button @click="addStudent">Enroll Student</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Matric Number</th>
          <th>Name</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="enrollment in filteredEnrollments" :key="enrollment.id">
          <td>{{ enrollment.matric }}</td>
          <td>{{ enrollment.name }}</td>
          <td>{{ enrollment.course }}</td>
          <td>
            <button @click="editEnrollment(enrollment)">Edit</button>
            <button @click="deleteEnrollment(enrollment)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'StudentEnrollment',
  data() {
    return {
      searchStudent: '',
      enrollments: [
        { id: 1, matric: 'A12345', name: 'John Doe', course: 'SECJ 3483' },
        { id: 2, matric: 'A12346', name: 'Jane Smith', course: 'SECJ 3483' }
      ]
    };
  },
  computed: {
    filteredEnrollments() {
      return this.enrollments.filter(enrollment =>
        enrollment.matric.toLowerCase().includes(this.searchStudent.toLowerCase())
      );
    }
  },
  methods: {
    addStudent() {
      console.log('Enroll Student');
    },
    editEnrollment(enrollment) {
      console.log('Edit', enrollment);
    },
    deleteEnrollment(enrollment) {
      this.enrollments = this.enrollments.filter(e => e.id !== enrollment.id);
    }
  }
};
</script>

<style scoped>
.student-enrollment {
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
input, button {
  padding: 5px;
  margin: 5px;
}
</style>