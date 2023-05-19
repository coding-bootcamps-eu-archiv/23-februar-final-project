<template>
  <div>
    <!-------left------>
    <section class="container-left">
      <div class="left-content">
        <img
          class="first-plant-picture"
          :src="`https://23-februar.api.cbe.uber.space${plant.images[0]}`"
          key="image"
          alt="Image"
        />

        <span class="direct-sowing">
          <img
            type="icon"
            src="@/assets/icons/seeding.png"
            key="seeding-image"
            alt="Seeding"
          />
          <p>{{ plant.directSowing.toString() }}</p>
        </span>

        <span class="plant-distance">
          <img
            type="icon"
            src="@/assets/icons/distance.png"
            key="distance-image"
            alt="Distance"
          />

          <p>{{ plant.plantDistance }} cm</p>
        </span>

        <span class="pharvestable">
          <img
            type="icon"
            src="@/assets/icons/carrots.png"
            key="harvest-image"
            alt="Harvest"
          />
          <p>{{ plant.harvestable.toString() }}</p>
        </span>

        <span class="location">
          <img
            type="icon"
            src="@/assets/icons/cloudy.png"
            key="location-image"
            alt="Location"
          />
          <p>{{ plant.location.toString() }}</p>
        </span>

        <span class="Pflege">
          <img
            type="icon"
            src="@/assets/icons/plant.png"
            key="care-image"
            alt="Care"
          />
          <p>{{ plant.care.toString() }}</p>
        </span>
      </div>
    </section>

    <!-----------right---------->
    <section class="container-right">
      <div class="right-content">
        <h1 class="h1">{{ plant.name }}</h1>
        <div class="info-text">
          <p>{{ plant.description }}</p>
        </div>
        <img
          class="secound-plant-picture"
          key="image"
          alt="Image"
          :src="`https://23-februar.api.cbe.uber.space${plant.images[1]}`"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PlantView",
  components: {},
  data() {
    return {
      plant: {},
    };
  },
  methods: {
    readDataFromApi() {
      fetch(`${process.env.VUE_APP_API_URL}/plants/` + this.$route.params.id)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            console.log("ERROR");
          }
        })
        .then((plantsApi) => {
          this.plant = plantsApi;
        });
    },
  },

  created() {
    this.readDataFromApi();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

main {
  display: flex;
  flex-direction: row;
}

.h1 {
  margin: 2rem;
}

.left-content {
  display: flex;
  flex-direction: column;
}

.right-content {
  display: flex;
  flex-direction: column;
}

p {
  font-size: 1.5vw;
  margin: 0.5rem;
}

div {
  display: flex;
  flex-direction: row;
}

section {
  padding: 0.2em;
  display: flex;
}

@media screen and (max-width: 480px) {
  div {
    flex-direction: column;
  }
}

@media screen and (max-width: 900px) {
  div {
    flex-direction: column;
  }
}

img {
  height: 5vw;
  width: 5vw;
  float: left;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.first-plant-picture,
.secound-plant-picture {
  height: 70%;
  width: 70%;
}

.info-text {
  background-color: #42b389;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px 10px 10px 10px;
  padding: 1.5vw;
  background-color: var(--primay-dark);
}
</style>
