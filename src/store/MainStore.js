import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state() {
    return {
      menuActive: false,
    };
  },
  actions: {
    getQuickLinkData() {
      return fetch(`${process.env.VUE_APP_API_URL}/plants`)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            console.log("ERROR");
          }
        })
        .then((plantsApi) => {
          this.quickLinks = plantsApi.map((plant) => {
            return {
              id: plant.id,
              name: plant.name,
            };
          });
        });
    },
  },
});
