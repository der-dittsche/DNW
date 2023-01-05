<template>
  <header class="header" id="header">
    <NavbarElement />
  </header>

  <RouterView />
  <FooterElement />
</template>

<script>
import { RouterView } from "vue-router";
import NavbarElement from "@/components/NavbarElement.vue";
import FooterElement from "./components/FooterElement.vue";

import "@/assets/js/helper.js";
export default {
  components: {
    RouterView,
    NavbarElement,
    FooterElement,
  },
  setup() {},
};
</script>
