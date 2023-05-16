<template>
  <main>
    <!-------left------>
    <section class="container-left">
      <div class="left-content">
        <img
          class="first-plant-picture"
          src="@/assets/placeholder1_SV.jpg"
          key="image"
          alt="Image"
        />

        <span class="direct-sowing">
          <img
            type="icon"
            src="@/assets/seeding.png"
            key="seeding-image"
            alt="Seeding"
          />
          <p>{{ directSowing }}directSowing</p>
        </span>

        <span class="plant-distance">
          <img
            type="icon"
            src="@/assets/distance.png"
            key="distance-image"
            alt="Distance"
          />
          <p>{{ plantDistance }}plantDistance cm</p>
        </span>

        <span class="pharvestable">
          <img
            type="icon"
            src="@/assets/carrots.png"
            key="harvest-image"
            alt="Harvest"
          />
          <p>{{ pharvestable }}pharvestable</p>
        </span>

        <span class="location">
          <img
            type="icon"
            src="@/assets/cloudy.png"
            key="location-image"
            alt="Location"
          />
          <p>{{ location }}location</p>
        </span>

        <span class="Pflege">
          <img
            type="icon"
            src="@/assets/plant.png"
            key="care-image"
            alt="Care"
          />
          <p>{{ pflege }}pflege</p>
        </span>
      </div>
    </section>

    <!-----------right---------->
    <section class="container-right">
      <div class="right-content">
        <h1 class="h1">{{ name }} name</h1>
        <p class="info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto
          doloribus similique ipsam architecto, laborum esse illo hic error
          cumque quidem necessitatibus provident? Porro quam fuga, laborum
          assumenda possimus beatae!
        </p>
        <img
          class="secound-plant-picture"
          src="@/assets/placeholder2_SV.jpg"
          key="image"
          alt="Image"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "PlantView",
  components: {},
  probs: {
    name: { type: String },
    directSowing: { type: String },
    plantDistance: { type: Number },
    pharvestable: { type: String },
    location: { type: String },
  },
};

// export default {
//   name: "App",
//   data() {
//     return {
//       plants: [
//         {
//           name: { type: String },
//           info: { type: String },
//           image: "",
//         },
//       ],
//     };
//   },
// };
</script>

<style scoped>
* {
  box-sizing: border-box;
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

section {
  padding: 0.2em;
  display: flex;
}

@media screen and (min-width: 480px) {
  section {
    display: block;
  }
}

@media screen and (max-width: 900px) {
  section {
    display: block;
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
  padding: 1.5vw;
}
</style>
