<template>
  <section class="plant-content">
    <div>
      <h1>{{ name }}</h1>
      <img :src="image" key="image" alt="Image" />
      <p class="info-text"></p>
      <div>
        <p class="aussaat"></p>
        <p class="keimzeit"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      plants: [
        {
          name: { type: String },
          info: { type: String },
          image: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.plant-content {
  display: flex;
}
</style>
