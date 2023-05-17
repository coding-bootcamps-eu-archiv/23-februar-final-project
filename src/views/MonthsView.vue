<template>
  <section>
    <h1>Alle Pflanzen</h1>
    <div v-for="plant in plants" :key="plant.id">
      <div class="show-plants">
        <span>{{ plant.group.name }}</span>
        <span class="plant-name">{{ plant.name }}</span>
        <span
          class="plant-img"
          :style="`background-image: url(http://localhost:3000${plant.images[0]})`"
        ></span>
        <router-link :to="{ name: 'plant', params: { id: plant.id } }"
          >Details
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
    // chooseMonth() {
    //   return this.$route.params.month; //gibt mir den Namen vom Monat zurück
    // },
    //***********************************************+ */
    readDataFromApi() {
      fetch("http://localhost:3000/plants?_expand=group") //die API sucht alle Pflanzen, in denen das Wort "this.$route.params.month"
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            console.log("ERROR");
          }
        })
        .then((plantsApi) => {
          this.plants = plantsApi; //oder this.plants.push(plantsAPI)???????
          console.log(this.plants);
          //*
          //   renderHtml() MACHT VUE!!!!
        });
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
