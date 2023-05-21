<template>
  <section>
    <h1>Hot or Not</h1>
    <p class="info-text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam hic
      molestiae atque error, dolores possimus optio qui ad tempore iusto aliquam
      magnam ex voluptatem quod ipsum veritatis minus ea suscipit!
    </p>
    <div>
      <label for="first-plant"></label>
      <InputSearch />
      <input
        type="text"
        id="first-plant"
        name="first-plant"
        placeholder="Gib eine Pflanze ein"
        v-model="query1"
      />
    </div>
    <div class="current-match-picture">
      <div v-if="value === undefined">{{ matchImages.startImage }}</div>
      <div v-else-if="value === true">{{ matchImages.hotImage }}</div>
      <div v-else>{{ matchImages.notImage }}</div>
    </div>
    <div>
      <label for="secound-plant"></label>
      <InputSearch />
      <input
        type="text"
        id="secound-plant"
        name="secound-plant"
        placeholder="Gib eine Pflanze ein"
        v-model="query2"
      />
    </div>
    <BaseButton @click="show(matchImages)">Hot or Not</BaseButton>
  </section>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

import InputSearch from "@/components/InputSearch.vue";

export default {
  name: "MatchView",
  components: {
    BaseButton,
    InputSearch,
  },
  data() {
    return {
      matchImages: [
        {
          startImage: "@/assets/Hintergrund.jpg",
          hotImage: "@/assets/daisies-g946f9165c_1920.jpg",
          notImage: "@assets/mask-g1307a3e45_1920.jpg",
          url_base: "https://23-februar.api.cbe.uber.space/",
          query1: "",
          query2: "",
          plant: [],
          match: false,
        },
      ],
    };
  },
  methods: {
    fetchPlant(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}plants?name_like=${this.query1}&friends_like=${this.query2}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.filteredPlants);
      }
    },
    filteredPlants(results) {
      this.plant = results.name;
      console.log(results);
    },
    hotOrNot() {
      this.match = this.plant[0].friends.includes(this.query2);
    },
  },
};
</script>

<style scoped>
#quick-link {
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
</style>
