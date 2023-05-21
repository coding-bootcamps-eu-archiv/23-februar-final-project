<template>
  <section>
    <select id="quick-link" @change="fetchPlant">
      <option value="">Schnellsuche</option>
      <option v-for="link in store.quickLinks" :key="link.id" :value="link.id">
        {{ link.name }}
      </option>
    </select>
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

<style scoped>
#quick-link {
  font-family: sans-serif;
  background: var(--primary-dark);
  border: 3px solid var(--primary-dark);
  border-radius: 2px;
  box-shadow: 2px 2px 2px black;
  height: 25px;
  line-height: normal;
  color: black;
  user-select: auto;
  font-size: 12px;
  padding: 0 8px;
  margin-right: 1%;
}

:focus {
  border: 3px solid var(--primary-middle);
  outline: none;
}
</style>
