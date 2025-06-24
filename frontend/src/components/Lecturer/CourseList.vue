<template>
  <section class="course-list">
    <h3>Manage Course List</h3>
    <div>
      <input v-model="searchCourse" placeholder="Search by Course Code" />
      <button @click="addCourse">Add Course</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in filteredCourses" :key="course.id">
          <td>{{ course.code }}</td>
          <td>{{ course.title }}</td>
          <td>
            <button @click="editCourse(course)">Edit</button>
            <button @click="deleteCourse(course)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'CourseList',
  data() {
    return {
      searchCourse: '',
      courses: [
        { id: 1, code: 'SECJ 3483', title: 'Web Technology' },
        { id: 2, code: 'SECJ 3490', title: 'Mobile App Development' }
      ]
    };
  },
  computed: {
    filteredCourses() {
      return this.courses.filter(course =>
        course.code.toLowerCase().includes(this.searchCourse.toLowerCase())
      );
    }
  },
  methods: {
    addCourse() {
      console.log('Add Course');
    },
    editCourse(course) {
      console.log('Edit', course);
    },
    deleteCourse(course) {
      this.courses = this.courses.filter(c => c.id !== course.id);
    }
  }
};
</script>

<style scoped>
.course-list {
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