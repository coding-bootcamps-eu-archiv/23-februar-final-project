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
      <input
        type="text"
        id="first-plant"
        name="first-plant"
        placeholder="Gib eine Pflanze ein"
      />
    </div>
    <div class="current-match-picture">
      <div v-if="value === undefined">{{ matchImages.startImage }}</div>
      <div v-else-if="value === true">{{ matchImages.hotImage }}</div>
      <div v-else>{{ matchImages.notImage }}</div>
    </div>
    <div>
      <label for="secound-plant"></label>
      <input
        type="text"
        id="secound-plant"
        name="secound-plant"
        placeholder="Gib eine Pflanze ein"
      />
    </div>
    <BaseButton @click="show(matchImages)">Hot or Not</BaseButton>
  </section>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "MatchView",
  components: {
    BaseButton,
  },
  data() {
    return {
      matchImages: [
        {
          startImage: "@/assets/Hintergrund.jpg",
          hotImage: "@/assets/daisies-g946f9165c_1920.jpg",
          notImage: "@assets/mask-g1307a3e45_1920.jpg",
        },
      ],
    };
  },
  mounted() {
    this.matchImages;
  },
};
</script>
