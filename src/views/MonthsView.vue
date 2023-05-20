<template>
  <section>
    <div v-for="plant in plants" :key="plant.id">
      <table class="table-item__table">
        <thead>
          <tr class="table-item__table-row">
            <th class="r1c1">Pflanze</th>
            <th class="r1c2">Direktsaat</th>
            <th class="r1c3">Ernte</th>
            <th class="r1c4">Pflege</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-item__table-row">
            <td>
              <div class="rows r2c1">
                <!-- <span>{{ plant.group.name }}</span> -->
                <span class="plant-name">{{ plant.name }}</span>
                <router-link
                  :to="{ name: 'plant', params: { id: plant.id } }"
                  class="plant-img"
                  :style="`background-image: url(https://23-februar.api.cbe.uber.space${plant.images[0]})`"
                >
                </router-link>
              </div>
            </td>
            <td>{{ filterdSowing }} X</td>
            <td>{{ filterdHarvestable }}</td>
            <td>{{ filterdCare }}X</td>
          </tr>
        </tbody>
      </table>
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
        `${process.env.VUE_APP_API_URL}/plants?directSowing_like=${this.$route.params.month}&harvestable_like=${this.$route.params.month}`
        //Doppelte ssuche nach hervesable und directSowing
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
.table-item__table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); */
  width: 100%;
}
.table-item__table-row:hover button {
  opacity: 1;
}
.table-item__table thead tr {
  background-color: var(--primary);
  color: black;
  text-align: center;
  justify-content: center;
}
.table-item__table th,
.table-item__table td {
  padding: 12px 15px;
}

.rows {
  display: flex;
  flex-direction: column;
  align-items: left;
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
