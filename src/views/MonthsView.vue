<template>
  <section>
    <h1>BLEEEEEEEEEEEEEEEEEEEEEEEEEEE</h1>
    <div v-for="plant in plants" :key="plant.id" class="plants-grid">
      <div class="show-plants">
        {{ filtered }}
        <!-- <span>{{ plant.group.name }}</span> -->
        <!-- <span class="plant-name">{{ plant.name }}</span> -->
        <!-- <router-link
          :to="{ name: 'plant', params: { id: plant.id } }"
          class="plant-img"
        >
        </router-link> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      plants: [],
      filterd: [],
      sowing: "",
      harvesting: "",
      care: "",
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
          console.log(this.plants);
        });
    },
    filteredPlantMonth() {
      this.filterd = this.plants.filter((plant) =>
        plant.harvestable.find("Januar")
      );
      console.log(this.filterd);
    },
  },
  created() {
    this.readDataFromApi();
  },
};
</script>

<style scoped>
.plants-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: left;
}
.show-plants {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px;
}
.plant-name {
  font-size: 2rem;
}
.plant-img {
  border: 10px solid #42b389;
  filter: drop-shadow(0 0 0.75rem #42b389);
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
</style>
