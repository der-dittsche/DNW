import { defineStore } from "pinia";

export const useStoreGeneral = defineStore("general", {
  state: () => {
    return {
      theme: "",
    };
  },
  actions: {
    updateTheme(value) {
      this.theme = value;
    },
  },
});
