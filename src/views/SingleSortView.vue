<template>
  <section class="main-grid">
    <p>Hallo:</p>
    <h2 class="plants">FRUITS</h2>
    <div v-for="fruit in filterdFruits" :key="fruit.id">
      <div>
        {{ filterdFruits }}
      </div>
    </div>
    <h2 class="plants">VEGETABLES</h2>
    <div v-for="vegetable in filterdVegetables" :key="vegetable.id">
      <div>
        {{ filterdVegetables }}
      </div>
    </div>
    <h2 class="plants">HERBS</h2>
    <div v-for="herbs in filterdHerbs" :key="herbs.id">
      <div>
        {{ filterdHerbs }}
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
  computed: {
    filterdFruits() {
      return this.plants.filter((item) => item.friends.includes("November"));
    },
    filterdVegetables() {
      return this.plants.name;
    },
    filterdHerbs() {
      let filterdDataHerbs = this.plants.filter(
        (item) => (item.groupId = "dbf7e73b-172e-4466-ba14-714cbc06a6ab")
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
  created() {
    this.readDataFromApi();
  },
};
</script>

<style>
.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: left;
}

.plants {
  color: blue;
  font-size: 2rem;
}
</style>
