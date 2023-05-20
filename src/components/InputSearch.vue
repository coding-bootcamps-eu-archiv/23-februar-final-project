<!--<template>
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
      fetch(`${process.env.VUE_APP_API_URL}/plants?_expand=name`)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            console.log("ERROR");
          }
        })
        .then((plantsApi) => {
          this.plants = plantsApi;
          console.log(plantsApi);
        });
    },
    filteredPlant() {
      return this.plants.filter((plant) => {
        plant.name.find(this.currentSearch);
      });
    },
  },

  created() {
    this.readDataFromApi();
  },
};
</script>-->

<template>
  <section>
    <div class="search-plant">
      <input
        type="text"
        class="search-bar"
        v-model="query"
        @keypress="fetchPlant"
      />
    </div>
    <div v-for="plant in plants" :key="plant">
      <router-link :to="{ name: 'plant', params: { id: plant } }">
        {{ currentSearch }}</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "filterPlants",
  data() {
    return {
      url_base: "https://23-februar.api.cbe.uber.space/",
      query: "",
      plant: {},
    };
  },
  methods: {
    fetchPlant(e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}plants?name_like=${this.query}`)
          .then((res) => {
            return res.json();
          })
          .then(this.filteredPlants);
      }
    },
    filteredPlants(results) {
      this.plant = results.name;
      console.log(results);
    },
  },
};
</script>
