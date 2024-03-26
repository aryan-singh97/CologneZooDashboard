<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { Animal } from '../types'
import { calculateAgeInYears, calculateFoodForNextMonth } from '../composables/helpers'

const props = defineProps({
  animals: {
    type: Array as PropType<Array<Animal>>,
    required: true,
  },
})

// const animalsSortedByName = computed(() => props.animals.slice().sort((animalA: Animal, animalB: Animal) => animalA.weight - animalB.weight))
const animalsSortedByName = computed(() => props.animals.slice().sort((animalA: Animal, animalB: Animal) => {
  if (animalA.name.toUpperCase() < animalB.name.toUpperCase())
    return -1
  if (animalA.name.toUpperCase() > animalB.name.toUpperCase())
    return 1
  return 0
}))
</script>

<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th>Index</th>
        <th>Species</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age (yrs)</th>
        <th>Weight (kg)</th>
        <th>Height (m)</th>
        <th>Favorite Fruit</th>
        <th>Monthly Food Required</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(animal, animalIndex) in animalsSortedByName" :key="id" class="hover:bg-gray-200">
        <td>{{ animalIndex + 1 }}</td>
        <td>{{ animal.species }}</td>
        <td>{{ animal.name }}</td>
        <td>{{ animal.gender }}</td>
        <td>{{ calculateAgeInYears(animal.birthdate) }}</td>
        <td>{{ animal.weight }}</td>
        <td>{{ animal.height }}</td>
        <td>{{ animal.favouriteFruit }}</td>
        <td>{{ calculateFoodForNextMonth(animal) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.animal-details {
  max-height: 500px;
  /* Limiting max height for better readability */
  overflow-y: auto;
  /* Adding vertical scrollbar when content exceeds max height */
}

table {
  width: 100%;
  /* Ensuring table occupies full width of container */
  border-collapse: collapse;
  /* Removing default table cell spacing */
}

th,
td {
  padding: 8px;
  /* Adding padding to cells for better spacing */
  text-align: left;
  /* Aligning text to left within cells */
}

th {
  background-color: #f2f2f2;
  /* Adding background color to header cells */
}

tr:hover {
  background-color: #f0f0f0;
  /* Changing background color on hover for better visibility */
}
</style>
