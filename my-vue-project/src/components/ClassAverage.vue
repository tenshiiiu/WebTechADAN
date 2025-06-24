<template>
  <section class="class-average">
    <h3>View Class Average per Component</h3>
    <ul>
      <li v-for="average in averages" :key="average.component">
        {{ average.component }}: {{ average.average }}% (Class Average)
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ClassAverage',
  data() {
    return {
      averages: [
        { component: 'Quiz', average: 75 },
        { component: 'Assignment', average: 80 },
        { component: 'Final Exam', average: 70 }
      ]
    };
  }
};
</script>

<style scoped>
.class-average {
  margin-bottom: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 5px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 5px 0;
}
</style>