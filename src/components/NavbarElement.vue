<template>
  <nav class="nav container">
    <a href="#" class="nav__logo">Sascha</a>
    <div class="nav__menu">
      <ul class="nav__list">
        <li class="nav__item">
          <RouterLink to="/" class="nav__link active__link"
            ><i class="bx bx-home"></i
          ></RouterLink>
        </li>
        <li class="nav__item">
          <a href="#about" class="nav__link"><i class="bx bx-user"></i></a>
        </li>
        <li class="nav__item">
          <a href="#skills" class="nav__link"><i class="bx bx-bulb"></i></a>
        </li>
        <li class="nav__item">
          <a href="#qualifications" class="nav__link"
            ><i class="bx bx-book"></i
          ></a>
        </li>
        <li class="nav__item">
          <a href="#service" class="nav__link"
            ><i class="bx bx-briefcase-alt-2"></i
          ></a>
        </li>
        <li class="nav__item">
          <a href="#testimonial" class="nav__link"
            ><i class="bx bx-smile"></i
          ></a>
        </li>
        <li class="nav__item">
          <a href="#contact" class="nav__link"
            ><i class="bx bx-message-square-dots"></i
          ></a>
        </li>
      </ul>
    </div>

    <!-- v-slot -->
    <i class="bx bx-moon change-theme" @click="updateThemes('Tschööö')"></i>
    <i class="bx bx-sun change-theme" @click="updateThemes('Hallo Welt')"></i>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

import { useStoreGeneral } from "@/stores/states";
export default {
  components: {
    RouterLink,
  },
  setup() {
    const store = useStoreGeneral();
    return {
      store,
    };
  },
  methods: {
    updateThemes(value) {
      this.store.updateTheme(value);
    },
  },
};
</script>
