<template>
  <section class="plants-grid">
    <div v-for="plant in plants" :key="plant.id">
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
  gap: 10px;
  padding: 10px;
}
.plant-name {
  font-size: 1rem;
}
.plant-img {
  border: 5px solid #42b389;
  filter: drop-shadow(0 0 0.75rem #42b389);
  width: 100px;
  height: 100px;
  background-size: cover;
  border-radius: 50%;
}
</style>
