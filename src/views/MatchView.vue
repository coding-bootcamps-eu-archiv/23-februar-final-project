<template>
  <section class="grid-content">
    <div class="result">{{ filterdFriends }}</div>
    <div class="name-plant">{{ plants.name }}</div>
    <div>
      <input type="text" v-model="plant1" />
    </div>
    <div><input type="text" v-model="plant2" /></div>
    <p v-if="match">HOT</p>
    <!--- oder wenn v-if="filterdFriends" also wenn das ergebnis true ist--->
    <p v-else>NOT</p>
    <div class="img-hot" v-if="match">
      <img class="hot" src="@/assets/daisies-g946f9165c_1920.jpg" />
    </div>
    <div class="img-not" v-else>
      <img class="not" src="@/assets/mask-g1307a3e45_1920.jpg" />
    </div>
    <BaseButton @click="match = !match" />
  </section>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      plants: [],
      filterdMatch: [],
      match: false,
      plant1: "",
      plant2: "",
    };
  },
  computed: {
    hotOrNot() {
      return this.plants.friends.includes(this.plant1);
    },
    filterdFriends() {
      return this.plants.filter((item) => item.friends.includes(this.plant1)); //WIE KANN MAN DAS ERGEBNIS SPEICHERN ALS LIST????
      // if (item.name === this.plant2);
      // return true;
    },
    //----------------LÖSUNG:  wenn filterdFriends.name === this.plant2 => HOT else NOT ----------------------

    // this.${plant1}.name
    // {$this.plant1}.name
  },
  methods: {
    readDataFromApi() {
      fetch(`${process.env.VUE_APP_API_URL}/plants?_expand=group`)
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
          // console.log(this.plants.name);
        });
    },
    checkMatch() {
      if (this.plants.friends.includes(this.plant1)) {
        return this.match == true;
      }
    },
    filterdPlants() {
      this.filterdMatch = this.plants.filter((item) =>
        item.friends.includes(this.plant1)
      );
      console.log(this.filterdMatch);
    },
  },
  created() {
    this.readDataFromApi();
  },
};
</script>

<style scoped>
p {
  font-size: 5rem;
  color: red;
}

img {
  width: 300px;
  height: 300px;
  background-size: cover;
  border-radius: 50%;
}
.result {
  color: white;
}

.grid-content {
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  padding: 10px;
}
</style>
