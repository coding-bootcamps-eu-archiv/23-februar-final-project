<template>
  <transition-group>
    <div v-for="plant in plants" :key="plant.name">
      <div class="show-plants">
        <span class="plant-name">{{ plants.name }}</span>
        <span
          class="plant-img"
          :style="{ backgroundImage: 'url(' + plants.image + ')' }"
        ></span>
        <!-- this.plant.image ist ein Pfad-->
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  data() {
    return {
      plants: [
        {
          name: "Erdbeere",
          image: "@/assets/placeholder1_SV.jpg",
        },
      ],
    };
  },
  // methods: {
  //   // chooseMonth() {
  //   //   return this.$route.params.month; //gibt mir den Namen vom Monat zurück
  //   // },
  //   //***********************************************+ */
  //   readDataFromApi() {
  //     const currentMonth = this.$route.params.month;

  //     fetch("http://Joe's - API/" + currentMonth) //die API sucht alle Pflanzen, in denen das Wort "this.$route.params.month"
  //       .then((response) => {
  //         if (response.status >= 200 && response.status <= 299) {
  //           return response.json();
  //         } else {
  //           console.log("ERROR");
  //         }
  //       })
  //       .then((plantsApi) => {
  //         this.plants = plantsApi; //oder this.plants.push(plantsAPI)???????
  //         console.log(this.plants);
  //         //*
  //         //   renderHtml() MACHT VUE!!!!
  //       });
  //   },
  // },
};
</script>

<style scoped>
.show-plants {
  display: grid;
  grid-template-rows: 1fr 1fr;

  padding: 50px;
}
.plant-name {
  font-size: 1.5;
  border: 1px solid black;
  width: 100px;
  height: 30px;
}
.plant-img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 1px solid black;
  margin-top: 50px;
  position: absolute;
}
</style>
