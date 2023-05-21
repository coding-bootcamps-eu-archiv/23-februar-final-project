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
      <!-- <input
        type="text"
        id="first-plant"
        name="first-plant"
        placeholder="Gib eine Pflanze ein"
        v-model="query"
      /> -->
    </div>
    <div class="current-match-picture">
      <div v-if="value === undefined">{{ matchImages.startImage }}</div>
      <div v-else-if="value === true">{{ matchImages.hotImage }}</div>
      <div v-else>{{ matchImages.notImage }}</div>
    </div>
    <div>
      <label for="secound-plant"></label>
      <InputSearch />
      <!-- <input
        type="text"
        id="secound-plant"
        name="secound-plant"
        placeholder="Gib eine Pflanze ein"
        v-model="query"
      /> -->
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
          query: "",
          plant: [],
        },
      ],
    };
  },
  methods: {
    readDataFromApi() {
      fetch(
        `${process.env.VUE_APP_API_URL}/plants?name_like=${this.$route.params.input1}&friends_like=${this.$route.params.input2}`
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
    // hotOrNot() {
    //   this.data.this.plant[0].friends.includes(input2 - value);
    // },
  },
};
</script>
