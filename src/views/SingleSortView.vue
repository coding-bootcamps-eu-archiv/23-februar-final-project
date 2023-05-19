<template>
  <template>
    <section>
      {{ plants }}
      <h2>FRUITS</h2>
      <div v-for="fruit in filterdFruits" :key="fruit.id">
        <div>
          {{ filterdFruits }}
        </div>
      </div>
      <h2>VEGETABLES</h2>
      <div v-for="vegetable in filterdVegetables" :key="vegetable.id">
        <div>
          {{ filterdVegetables }}
        </div>
      </div>
      <h2>HERBS</h2>
      <div v-for="herbs in filterdHerbs" :key="herbs.id">
        <div>
          {{ filterdHerbs }}
        </div>
      </div>
    </section>
  </template>
</template>

<script>
export default {
  data() {
    return {
      plants: [],
    };
  },
  computed: {
    filterdFruits() {
      let filterdDataFruits = this.plants.filter(
        (item) => (item.id = "40ee5b1e-093f-4d92-955b-87494fda9af5")
      );
      return filterdDataFruits;
    },
    filterdVegetables() {
      let filterdDataVegetables = this.plants.filter(
        (item) => (item.id = "40ee5b1e-093f-4d92-955b-87494fda9af5")
      );
      return filterdDataVegetables;
    },
    filterdHerbs() {
      let filterdDataHerbs = this.plants.filter(
        (item) => (item.id = "dbf7e73b-172e-4466-ba14-714cbc06a6ab")
      );
      return filterdDataHerbs;
    },
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
  },
};
</script>
