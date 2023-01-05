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
          <a href="#contact" class="nav__link"
            ><i class="bx bx-message-square-dots"></i
          ></a>
        </li>
      </ul>
    </div>
    <i class="bx bx-moon change-theme" id="theme-button"></i>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
