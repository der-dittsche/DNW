<template>
  <header class="header" id="header">
    <NavbarElement />
  </header>

  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import NavbarElement from "@/components/NavbarElement.vue";
import "@/assets/js/helper.js";
</script>
