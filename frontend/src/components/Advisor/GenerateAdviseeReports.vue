<template>
  <section class="generate-reports">
    <h3>Generate Advisee Reports</h3>
    <div>
      <select v-model="selectedAdvisee" @change="loadReport">
        <option v-for="advisee in advisees" :key="advisee.id" :value="advisee">
          {{ advisee.matric }} - {{ advisee.name }}
        </option>
      </select>
    </div>
    <button @click="generateReport" :disabled="!selectedAdvisee">Generate Report</button>
    <p v-if="reportPreview">Preview: {{ reportPreview }}</p>
    <p v-else>Select an advisee to generate report.</p>
  </section>
</template>

<script>
export default {
  name: 'GenerateAdviseeReports',
  data() {
    return {
      advisees: [
        { id: 1, matric: 'A12345', name: 'John Doe' },
        { id: 2, matric: 'A12346', name: 'Jane Smith' }
      ],
      selectedAdvisee: null,
      reportPreview: null
    };
  },
  methods: {
    loadReport() {
      if (this.selectedAdvisee) {
        this.reportPreview = `Report for ${this.selectedAdvisee.name} - Generated on ${new Date().toLocaleDateString()}`;
      } else {
        this.reportPreview = null;
      }
    },
    generateReport() {
      if (this.selectedAdvisee) {
        console.log('Generating report for', this.selectedAdvisee);
      }
    }
  }
};
</script>

<style scoped>
.generate-reports {
  margin-bottom: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 5px;
}
select, button {
  padding: 5px;
  margin: 5px;
}
</style>