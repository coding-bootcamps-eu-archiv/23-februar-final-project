<template>
  <section>
    <input type="text" v-model="currentSearch" placeholder="Search plant..." />
    <div v-for="plant in plants" :key="plant.id">
      <router-link :to="{ name: 'plant', params: { id: plant.id } }">
        {{ currentSearch }}</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentSearch: "",
      plants: [],
    };
  },
  methods: {
    readDataFromApi() {
      fetch("http://localhost:3005/plants?_expand=group")
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            console.log("ERROR");
          }
        })
        .then((plantsApi) => {
          this.plants = plantsApi;
        });
    },
    filteredPlant() {
      return this.plants.filter((plant) => plant.name.find(this.currentSearch));
    },
  },
  created() {
    this.readDataFromApi();
  },
};
</script>

<style scoped>
.show-plants {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}
.plant-name {
  font-size: 1.5;
}
.plant-img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
</style>
