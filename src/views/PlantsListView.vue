<template>
  <section>
    <h1>Alle Pflanzen</h1>
    <div v-for="plant in plants" :key="plant.id" class="plants-grid">
      <div class="show-plants">
        <!-- <span>{{ plant.group.name }}</span> -->
        <span class="plant-name">{{ plant.name }}</span>
        <router-link
          :to="{ name: 'plant', params: { id: plant.id } }"
          class="plant-img"
          :style="`background-image: url(http://localhost:3005${plant.images[0]})`"
        >
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
          // console.log(this.plants);
        });
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
