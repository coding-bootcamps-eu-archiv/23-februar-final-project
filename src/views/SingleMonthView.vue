<template>
  <section>
    <h2>In diesem Monat kannst du säen:</h2>
    <div class="plants-grid">
      <div v-for="plant in plants" :key="plant.id">
        <div class="show-plants">
          <!-- <span>{{ plant.group.name }}</span> -->
          <span class="plant-name">{{ plant.name }}</span>
          <router-link
            :to="{ name: 'plant', params: { id: plant.id } }"
            class="plant-img"
            :style="`background-image: url(https://23-februar.api.cbe.uber.space${plant.images[0]})`"
          >
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      plants: [],
      groups: {
        fruits: {
          id: "5059cf6c-e34b-4ce2-98e0-a5e4752ae59f",
          headline: "Obst",
        },
        vegetables: {
          id: "40ee5b1e-093f-4d92-955b-87494fda9af5",
          headline: "Gemüse",
        },
        herbs: {
          id: "dbf7e73b-172e-4466-ba14-714cbc06a6ab",
          headline: "Kräuter",
        },
        sowing: "",
        care: "",
        harvestable: "",
      },
    };
  },
  // computed: {
  //   currentHeadline() {
  //     const currentMonth = this.$route.params.month;
  //     return this.months[currentMonth];
  //   },
  // },
  // //   filterdFruits() {
  //     // let newList = [];
  //     let filterdDataFruits = this.plants.find(
  //       (item) => (item.groupId = "5059cf6c-e34b-4ce2-98e0-a5e4752ae59f")
  //     );

  //     // filterdDataFruits.forEach((element) => {
  //     //   newList.push(element.value);
  //     // }); return newList;
  //     return filterdDataFruits;
  //   },
  //   filterdVegetables() {
  //     let newList = this.plants.name === "Erdbeere";
  //     return newList;
  //   },
  //   filterdHerbs() {
  //     return this.plants.filter((item) => item.friends.includes("Tomate"));
  //   },

  methods: {
    readDataFromApi() {
      // const currentMonth = this.$route.params.month;
      fetch(
        `${process.env.VUE_APP_API_URL}/plants?directSowing_like=${this.$route.params.month}`
        // &harvestable_like=${this.$route.params.month}
        // this.$route.params.month
      )
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
  watch: {
    "$route.params.month": {
      handler() {
        console.log("test");
        this.readDataFromApi();
      },

      immediate: true,
    },
  },
};
</script>

<style scoped>
.plants-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
}
h2 {
  text-align: center;
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
  color: #42b389;
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
