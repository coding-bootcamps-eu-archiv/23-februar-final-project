import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state() {
    return {
      plants: [],
      fruits: {
        data: [
          {
            id: 1,
            name: "Erdbeeren",
            description:
              "Die Erdbeeren (Fragaria) sind eine Gattung in der Unterfamilie der Rosoideae innerhalb der Familie der Rosengewächse (Rosaceae). Zur Gattung Fragaria gehören ungefähr zwanzig Arten, meistens in den gemäßigten Zonen der Nordhalbkugel vorkommend, und verschiedene Unterarten; daneben gibt es viele hybride Formen mit zahlreichen Kultursorten.",
            directSowing: "Mai",
            plantDistance: 0.2,
            pharvestable: ["Mai", "Juni", "Juli", "August"],
            location: "sonnnig",
            friends: [
              "Borretsch",
              "Buschbohnen",
              "Knoblauch",
              "Kopfsalat",
              "Lauch",
              "Radieschen",
              "Zwiebeln",
            ],
            noGo: "Kohlsorten",
          },
        ],
      },
      vegetables: {
        data: [
          {
            id: 6,
            name: "Kürbis",
            description:
              "Die Kürbisse (Cucurbita) bilden eine Pflanzengattung innerhalb der Familie der Kürbisgewächse (Cucurbitaceae). Bekannte Vertreter sind der Riesen-Kürbis (Cucurbita maxima), der Moschus-Kürbis (Cucurbita moschata) und der Garten-Kürbis (Cucurbita pepo), die landwirtschaftlich und gärtnerisch genutzt werden.",
            directSowing: ["Mai", "Juni"],
            plantDistance: 1.5,
            pharvestable: ["September", "Oktober", "Nowember"],
            location: "sonnnig",
            friends: ["Kohlrabi", "Knoblauch", "Sonnenblume", "Bohnen"],
            noGo: ["Kartoffeln", "Dill", "Zuchini", "Tomaten"],
          },
        ],
      },
      herbs: {
        data: [
          {
            id: 11,
            name: "Dill",
            description:
              "Dill, Dille oder Gurkenkraut, auch Dillkraut und Dillfenchel genannt (Anethum graveolens), ist die einzige Pflanzenart der monotypischen Gattung Anethum und gehört zur Familie der Doldenblütler (Apiaceae). Sie stammt ursprünglich aus Vorderasien, wird heute jedoch weltweit angebaut.",
            directSowing: ["April", "Mai", "Juni", "Juli"],
            plantDistance: 0.25,
            pharvestable: ["Mai", "Juni", "Juli", "August"],
            location: "sonnnig",
            friends: [
              "Erbsen",
              "Möhren",
              "Gurken",
              "Kohlarten",
              "Salat",
              "Zucchini",
              "Rote Bete",
              "Zwiebel",
            ],

            noGo: [
              "Fenchel",
              "Petersilie",
              "Sellerie",
              "Kerbel",
              "Kümmel",
              "Kürbis",
            ],
          },
        ],
      },
    };
  },
});
