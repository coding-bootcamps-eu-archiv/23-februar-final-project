<template>
  <div v-if="plant">
    <!-------left------>
    <section class="container-left">
      <div class="left-content">
        <img
          class="first-plant-picture"
          :src="`https://23-februar.api.cbe.uber.space${plant.images[0]}`"
          key="image"
          alt="Image"
        />
        <section class="png-wrapper">
          <span class="direct-sowing">
            <img
              class="icon"
              type="icon"
              src="@/assets/icons/seeding.png"
              key="seeding-image"
              alt="Seeding"
            />
            <p>{{ plant.directSowing.join(", ") }}</p>
          </span>

          <span class="plant-distance">
            <img
              class="icon"
              type="icon"
              src="@/assets/icons/distance.png"
              key="distance-image"
              alt="Distance"
            />

            <p>{{ plant.plantDistance }} cm</p>
          </span>

          <span class="harvestable">
            <img
              class="icon"
              type="icon"
              src="@/assets/icons/carrots.png"
              key="harvest-image"
              alt="Harvest"
            />
            <p>{{ plant.harvestable.join(", ") }}</p>
          </span>

          <span class="location">
            <img
              class="icon"
              type="icon"
              src="@/assets/icons/cloudy.png"
              key="location-image"
              alt="Location"
            />
            <p>{{ plant.location.toString() }}</p>
          </span>

          <span class="care">
            <img
              class="icon"
              type="icon"
              src="@/assets/icons/plant.png"
              key="care-image"
              alt="Care"
            />
            <p>{{ plant.care.toString() }}</p>
          </span>
        </section>
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
      plant: null,
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

body {
  display: flex;
  flex-direction: row;
}

.h1 {
  margin: 2rem;
}

.left-content {
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.png-wrapper {
  display: flex;
  flex-direction: column;
  /* text-align: center;
  justify-content: center; */

  width: 90%;
  margin-inline: auto;
}

.right-content {
  display: flex;
  flex-direction: column;
}

p {
  font-size: var(--s-font);
  margin: 0.5rem;
}
.png-wrapper p {
  color: var(--p-light);
  font-size: var(--s-font);
}
div {
  display: flex;
  flex-direction: row;
}

section {
  padding: 0.2em;
  display: flex;
}

.container-left {
  width: 40%;
}

.container-right {
  width: 60%;
}

@media screen and (max-width: 480px) {
  div {
    flex-direction: column;
  }
  .png-wrapper {
    display: flex;
    width: 90%;
    margin-inline: auto;
    flex-direction: column;
  }
  .icon {
    --icon-wh: 50px;
    filter: invert();
    width: var(--icon-wh);
    height: var(--icon-wh);
  }
  .container-left {
    width: 100%;
  }

  .container-right {
    width: 100%;
  }
}

@media screen and (max-width: 900px) {
  div {
    flex-direction: column;
  }
}

.icon {
  filter: invert();
}

img {
  height: 5vw;
  width: 5vw;
  float: left;
  margin-inline: 1rem;
  margin-bottom: 1rem;
}

.first-plant-picture,
.secound-plant-picture {
  height: 70%;
  width: 90%;
  margin-inline: auto;
  background-image: cover;
  border-radius: 0.5rem;
  border: 2px solid var(--primary);
  margin-block: 1rem 2rem;
}

.info-text {
  color: var(--p-dark);
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  margin-inline: auto;
  width: 90%;
  border-radius: 10px;
  margin-bottom: 1rem;
  background-color: var(--primary-dark);
}
</style>
