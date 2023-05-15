<template>
  <div>
    <p>
      {{ infos }}
    </p>
  </div>
  <div>
    <ul>
      <li>{{ directSowing }}</li>
      <li>{{ plantDistance }}</li>
      <li>{{ harvestable }}</li>
      <li>{{ location }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    directSowing: { type: String },
    plantDistance: { type: Number },
    pharvestable: { type: String },
    location: { type: String },
  },

  data() {
    return {
      plants: [],
      fruits: {
        data: [
          {
            id: 1,
            name: "Erdbeeren",
            descripzion:
              "Die Erdbeeren (Fragaria) sind eine Gattung in der Unterfamilie der Rosoideae innerhalb der Familie der Rosengewächse (Rosaceae). Zur Gattung Fragaria gehören ungefähr zwanzig Arten, meistens in den gemäßigten Zonen der Nordhalbkugel vorkommend, und verschiedene Unterarten; daneben gibt es viele hybride Formen mit zahlreichen Kultursorten.",
            directSowing: "Mitte Mai",
            plantDistance: 0.2,
            pharvestable: "Mai bis August",
            location: "sonnnig",
          },
        ],
      },
      vegetables: { data: [] },
      herbs: { data: [] },
    };
  },
  computed: {
    buttonText() {
      return this.name + "text";
    },
  },
};
</script>
