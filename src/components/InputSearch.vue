<template>
  <section>
    <input type="text" v-model="currentSearch" placeholder="Search plant..." />
    <div v-for="plant in plants" :key="plant.id">
      <router-link :to="{ name: 'plant', params: { id: plant.id } }">
        {{ currentSearch }}</router-link
      >
    </div>
    <span></span>
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
      fetch(`${process.env.VUE_APP_API_URL}/plants?_expand=group`)
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
