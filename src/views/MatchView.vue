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
    <div>
      <img src="WPI" alt="Background-Picture" />
      <p>Output</p>
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
    <BaseButton :text="buttonText" />
  </section>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "MatchView",
  components: {
    BaseButton,
  },
};
</script>
