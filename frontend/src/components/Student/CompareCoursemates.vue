<template>
  <section class="compare-coursemates">
    <h3>Compare with Coursemates</h3>
    <div class="input-section">
      <div>
        <label for="matric1">Your Matric Number:</label>
        <input v-model="matric1" id="matric1" placeholder="Enter your matric number" />
      </div>
      <div>
        <label for="matric2">Friend's Matric Number:</label>
        <input v-model="matric2" id="matric2" placeholder="Enter friend's matric number" />
      </div>
      <button @click="compareMarks" :disabled="!matric1 || !matric2">Compare</button>
    </div>
    <table v-if="breakdowns.length === 2">
      <thead>
        <tr>
          <th>Component</th>
          <th>{{ breakdowns[0].matric }} (You)</th>
          <th>{{ breakdowns[1].matric }} (Friend)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="component in components" :key="component.id">
          <td>{{ component.name }}</td>
          <td>{{ getMark(breakdowns[0], component.name) || 'N/A' }}</td>
          <td>{{ getMark(breakdowns[1], component.name) || 'N/A' }}</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>{{ calculateTotal(breakdowns[0]) }}%</strong></td>
          <td><strong>{{ calculateTotal(breakdowns[1]) }}%</strong></td>
        </tr>
      </tbody>
    </table>
    <p v-else-if="matric1 && matric2 && breakdowns.length !== 2">No data available for comparison.</p>
    <p v-else>Please enter both matric numbers to compare.</p>
  </section>
</template>

<script>
export default {
  name: 'CompareCoursemates',
  data() {
    return {
      matric1: '',
      matric2: '',
      breakdowns: [],
      components: [
        { id: 1, name: 'Quiz', maxMark: 20, weight: 20 },
        { id: 2, name: 'Assignment', maxMark: 30, weight: 30 },
        { id: 3, name: 'Final Exam', maxMark: 30, weight: 30 }
      ],
      sampleData: {
        'A12345': { matric: 'A12345', name: 'John Doe', quiz: 18, assignment: 25, finalExam: 25 },
        'A12346': { matric: 'A12346', name: 'Jane Smith', quiz: 20, assignment: 28, finalExam: 28 }
      }
    };
  },
  methods: {
    compareMarks() {
      if (this.matric1 in this.sampleData && this.matric2 in this.sampleData) {
        this.breakdowns = [this.sampleData[this.matric1], this.sampleData[this.matric2]];
      } else {
        this.breakdowns = [];
      }
    },
    getMark(breakdown, componentName) {
      return breakdown[componentName.toLowerCase()];
    },
    calculateTotal(breakdown) {
      const total = this.components.reduce((sum, comp) => {
        const mark = breakdown[comp.name.toLowerCase()] || 0;
        return sum + (mark / comp.maxMark) * comp.weight;
      }, 0);
      return Math.round(total);
    }
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
.input-section {
  margin-bottom: 15px;
}
.input-section div {
  margin: 5px 0;
}
label {
  margin-right: 10px;
}
input {
  padding: 5px;
  margin-right: 10px;
}
button {
  padding: 5px 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}
th, td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}
</style>