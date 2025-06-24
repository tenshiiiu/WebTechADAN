<template>
  <section class="final-exam">
    <h3>Final Exam Marks</h3>
    <input v-model.number="finalExamMark" type="number" placeholder="Final Exam Mark (out of 30)" />
    <p>Total Mark: {{ calculateTotal() }}%</p>
  </section>
</template>

<script>
export default {
  name: 'FinalExam',
  data() {
    return {
      finalExamMark: 0,
      components: [
        { id: 1, name: 'Quiz', maxMark: 20, weight: 20 },
        { id: 2, name: 'Assignment', maxMark: 30, weight: 30 }
      ]
    };
  },
  methods: {
    calculateTotal() {
      const assessmentTotal = this.components.reduce((sum, c) => sum + c.weight, 0);
      return assessmentTotal + (this.finalExamMark || 0);
    }
  }
};
</script>

<style scoped>
.final-exam {
  margin-bottom: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 5px;
}
input {
  padding: 5px;
  margin: 5px;
}
</style>