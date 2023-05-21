<template>
  <section>
    <select id="quick-link" @change="fetchPlant">
      <option value="">Bitte wählen</option>
      <option v-for="link in store.quickLinks" :key="link.id" :value="link.id">
        {{ link.name }}
      </option>
    </select>

    <div v-for="plant in plants" :key="plant">
      <router-link :to="{ name: 'plant', params: { id: plant } }">
        {{
      }}</router-link>
    </div>
  </section>
</template>

<script>
import { useMainStore } from "@/store/MainStore.js";

export default {
  name: "filterPlants",
  setup() {
    const store = useMainStore();
    return { store };
  },
  data() {
    return {
      url_base: "https://23-februar.api.cbe.uber.space/",
      query: "",
      plant: {},
    };
  },
  methods: {
    fetchPlant(e) {
      this.$router.push({ name: "plant", params: { id: e.target.value } });
      console.log(e.target.value);
    },
    filteredPlants(results) {
      this.plant = results.name;
      console.log(results);
    },
  },
};
</script>

<style>
#quick-link {
  font-family: sans-serif;
  border: 3px solid var(--primary-dark);
  border-radius: 3px;
  box-shadow: 3px 3px 3px grey;
  height: 25px;
  line-height: normal;
  color: #282828;
  user-select: auto;
  font-size: 12px;
  padding: 0 6px;
}
</style>
