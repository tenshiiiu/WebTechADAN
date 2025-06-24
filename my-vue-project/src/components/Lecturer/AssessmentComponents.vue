<template>
  <section class="assessment-components">
    <h3>Manage Assessment Components</h3>
    <form @submit.prevent="addComponent">
      <input v-model="newComponent.name" placeholder="Component Name (e.g., Quiz)" required />
      <input v-model.number="newComponent.maxMark" type="number" placeholder="Max Mark" required />
      <input v-model.number="newComponent.weight" type="number" placeholder="Weight (%)" required />
      <button type="submit">Add Component</button>
    </form>
    <ul>
      <li v-for="component in components" :key="component.id">
        {{ component.name }} (Max: {{ component.maxMark }}, Weight: {{ component.weight }}%)
        <button @click="editComponent(component)">Edit</button>
        <button @click="deleteComponent(component)">Delete</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'AssessmentComponents',
  data() {
    return {
      components: [
        { id: 1, name: 'Quiz', maxMark: 20, weight: 20 },
        { id: 2, name: 'Assignment', maxMark: 30, weight: 30 }
      ],
      newComponent: { name: '', maxMark: 0, weight: 0 }
    };
  },
  methods: {
    addComponent() {
      if (this.newComponent.name && this.newComponent.maxMark && this.newComponent.weight) {
        this.components.push({
          id: Date.now(),
          ...this.newComponent
        });
        this.newComponent = { name: '', maxMark: 0, weight: 0 };
      }
    },
    editComponent(component) {
      console.log('Edit', component);
    },
    deleteComponent(component) {
      this.components = this.components.filter(c => c.id !== component.id);
    }
  }
};
</script>

<style scoped>
.assessment-components {
  margin-bottom: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 5px;
}
input, button {
  padding: 5px;
  margin: 5px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 5px 0;
}
</style>