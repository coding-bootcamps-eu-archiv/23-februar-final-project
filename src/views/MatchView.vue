<template>
  <section class="grid-content">
    <p class="match-description">
      Hot or Not - das ist hier die Frage. Auf dieser Seite kannst du
      herausfinden, ob die Pflanzen, die du dir für deinen Garten ausgesucht
      hast, zusammenpassen, oder sich nicht vertragen. Gib in die beiden Felder
      einfach die Pflanzen ein und click auf den Button:
    </p>
    <div class="name-plant">{{ plants.name }}</div>
    <div>
      <select class="quick-link" v-model="plant1">
        <option value="">Bitte wählen</option>
        <option v-for="link in plants" :key="link.id" :value="link.id">
          {{ link.name }}
        </option>
      </select>
    </div>
    <div>
      <select class="quick-link" v-model="plant2">
        <option value="">Bitte wählen</option>
        <option v-for="link in plants" :key="link.id" :value="link.id">
          {{ link.name }}
        </option>
      </select>
    </div>
    <p class="p-check" v-if="match">HOT</p>
    <p class="p-check" v-else>NOT</p>
    <div class="img-hot" v-if="match">
      <img class="hot" src="@/assets/daisies-g946f9165c_1920.jpg" />
    </div>
    <div class="img-not" v-else>
      <img class="not" src="@/assets/mask-g1307a3e45_1920.jpg" />
    </div>
    <BaseButton @click="checkMatch">HotOrNot</BaseButton>
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
      return this.plants.filter((item) => item.friends.includes(this.plant1));
    },
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
        });
    },

    checkMatch() {
      const plant1Data = this.plants.find((item) => item.id === this.plant1);
      const plant2Data = this.plants.find((item) => item.id === this.plant2);
      console.log(plant1Data, "x");
      console.log(plant2Data);
      if (plant1Data.friends.includes(plant2Data.name)) {
        this.match = true;
      } else {
        this.match = false;
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
.quick-link {
  font-family: sans-serif;
  background: var(--primary-dark);
  border: 3px solid var(--primary-dark);
  border-radius: 2px;
  box-shadow: 2px 2px 2px black;
  height: 25px;
  line-height: normal;
  color: black;
  user-select: auto;
  font-size: 12px;
  padding: 0 8px;
  margin-right: 1%;
}

:focus {
  border: 3px solid var(--primary-middle);
  outline: none;
}
.match-description {
  background-color: #42b389;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px 10px 10px 10px;
  padding: 0.6rem;
  margin-inline: auto;
}
.p-check {
  font-size: 40px;
  color: var(--secondary);
  text-shadow: 2px 2px 3px black;
}

img {
  width: 20vw;
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
