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
                  :style="`background-image: url(http://localhost:3005${plant.images[0]})`"
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
      sortedPlantsByMonth: [],
      clickedMonth: false,
    };
  },
  computed: {
    filteredStories() {
      let filteredSowing = this.plants.filter((sowing) => {
        return sowing.directSowing;
      });
      let filteredCare = this.plants.filter((care) => {
        return care.care;
      });
      let filterdHar = this.plants.filter((har) => {
        return har.harvestable;
      });
      let allMonth = [...filteredSowing, ...filteredCare, ...filterdHar];
      return allMonth;
      // return this.sortedPlantsByMonth.push(Object.keys(allMonth));
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
