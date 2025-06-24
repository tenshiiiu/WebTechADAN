<template>
  <section class="ranking-position">
    <h3>View Ranking/Position</h3>
    <p>Your Rank: {{ rank }} out of {{ totalStudents }}</p>
    <p>Percentile: {{ percentile }}%</p>
  </section>
</template>

<script>
export default {
  name: 'RankingPosition',
  data() {
    return {
      rank: 2,
      totalStudents: 50,
      percentile: 96
    };
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
</style>