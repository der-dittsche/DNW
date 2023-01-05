<template>
  <main>
    <section class="home section" id="home">
      <div class="home__container container grid section__border">
        <div class="home__data">
          <span class="home__greeting">Hi, I'm</span>
          <h1 class="home__name">Sascha</h1>
          <h3 class="home__education">Webapp-Developer</h3>
          <div class="home__buttons">
            <a
              download=""
              href="@/assets/pdf/CV.pdf"
              class="button button--ghost"
              >Download CV</a
            >
            <a href="#about" class="button">About me</a>
          </div>
        </div>
        <div class="home__handle">
          <img
            src="@/assets/img/sd_pic.png"
            alt="pic Sascha Dietrich"
            class="home__img"
          />
        </div>
        <div class="home__social">
          <a
            href="https://www.linkedin.com/in/webdev-sdietrich/"
            class="home__social-link"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/dreadderino1987"
            class="home__social-link"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <a href="" class="home__scroll">
          <i class="bx bx-mouse home__scroll-icon"></i>
          <span class="home__scroll-name">scoll down</span>
        </a>
      </div>
    </section>
    <section class="about section" id="about">
      <h2 class="section__title">About Me</h2>

      <div class="about__container container grid section__border">
        <img src="@/assets/img/IMG_5734.png" alt="" class="about__img" />
        <div class="about__data">
          <div class="about__info">
            <div class="about__box">
              <i class="bx bx-award about__icon"></i>
              <h3 class="about__title">Years of Experience</h3>
              <span class="about__subtitle">19+</span>
            </div>
            <div class="about__box">
              <i class="bx bx-briefcase-alt about__icon"></i>
              <h3 class="about__title">Company worked</h3>
              <span class="about__subtitle">10+</span>
            </div>
            <div class="about__box">
              <i class="bx bx-task about__icon"></i>
              <h3 class="about__title">realized Projects</h3>
              <span class="about__subtitle">5+ </span>
            </div>
          </div>
          <p class="about__description">
            Hi, I'm Sascha, Webapp-Developer and passionate about designing
            modern web-interfaces
          </p>
          <a href="#about" class="button">Contact Me</a>
        </div>
      </div>
    </section>
    <section class="skills section" id="skills">
      <h2 class="section__title">Skills</h2>
      <div class="skills__container container grid section__border">
        <div class="skills__content">
          <h3 class="skills__title">
            <i class="bx bx-code skills__title-img"></i>Development Language
          </h3>
          <div class="skills__box">
            <div class="skill__data">
              <img
                src="@/assets/img/html-1.svg"
                alt="HTML Logo"
                class="skills_img"
              />
              <div>
                <h3 class="skills__name">HTML 5</h3>
                <span class="skill__level">Intermediate</span>
              </div>
            </div>
            <div class="skill__data">
              <img
                src="@/assets/img/css-3.svg"
                alt="CSS Logo"
                class="skills_img"
              />
              <div>
                <h3 class="skills__name">CSS 3</h3>
                <span class="skill__level">Intermediate</span>
              </div>
            </div>
            <div class="skill__data">
              <img
                src="@/assets/img/javascript-1.svg"
                alt="JavaScript Logo"
                class="skills_img"
              />
              <div>
                <h3 class="skills__name">JS</h3>
                <span class="skill__level">Advanced</span>
              </div>
            </div>
            <div class="skill__data">
              <img
                src="@/assets/img/mysql-6.svg"
                alt="MySql Logo"
                class="skills_img"
              />
              <div>
                <h3 class="skills__name">MySQL</h3>
                <span class="skill__level">Advanced</span>
              </div>
            </div>
            <div class="skill__data">
              <img
                src="@/assets/img/php-1.svg"
                alt="PHP Logo"
                class="skills_img"
              />
              <div>
                <h3 class="skills__name">PHP</h3>
                <span class="skill__level">Advanced</span>
              </div>
            </div>
          </div>
        </div>
        <div class="skills__content">
          <h3 class="skills__title">
            <i class="bx bx-wrench skills__title-img"></i>Tooling
          </h3>

          <div class="skills__box">
            <div class="skill__data">
              <img
                src="@/assets/img/vue-js-1.svg"
                alt="VueJS Logo"
                class="skills_img"
              />
              <div>
                <h3 class="skills__name">Vue JS</h3>
                <span class="skill__level">Intermediate</span>
              </div>
            </div>
            <div class="skill__data">
              <img
                src="@/assets/img/firebase-1.svg"
                alt="Firebase Logo"
                class="skills_img"
              />
              <div>
                <h3 class="skills__name">Firebase</h3>
                <span class="skill__level">Intermediate</span>
              </div>
            </div>
            <div class="skill__data">
              <img
                src="@/assets/img/bootstrap-5-1.svg"
                alt="Bootstrap Logo"
                class="skills_img"
              />
              <div>
                <h3 class="skills__name">Bootstrap</h3>
                <span class="skill__level">Advanced</span>
              </div>
            </div>
            <div class="skill__data">
              <img
                src="@/assets/img/tailwind-css-2.svg"
                alt="Tailwind Logo"
                class="skills_img"
              />
              <div>
                <h3 class="skills__name">Tailwind</h3>
                <span class="skill__level">Advanced</span>
              </div>
            </div>
            <div class="skill__data">
              <img
                src="@/assets/img/nodejs-1.svg"
                alt="Node Logo"
                class="skills_img"
              />
              <div>
                <h3 class="skills__name">Node</h3>
                <span class="skill__level">Advanced</span>
              </div>
            </div>
            <div class="skill__data">
              <img
                src="@/assets/img/git-icon.svg"
                alt="Git Logo"
                class="skills_img"
              />
              <div>
                <h3 class="skills__name">Git</h3>
                <span class="skill__level">Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="qualifications section" id="qualifications">
      <h2 class="section__title">Qualifications</h2>
      <div
        class="qualifications__container container grid section__border"
      ></div>
    </section>
    <section class="service section" id="service">
      <span class="section__subtitle">My Services</span>
      <h2 class="section__title">What I Offer</h2>
      <div class="services__container container grid section__border">
        <div class="services__card">
          <h3 class="services__title">
            Development &<br />
            Testing
          </h3>
          <span @click.prevent="active = true" class="services__button">
            See more<i class="bx bx-right-arrow-alt services__icon"></i>
          </span>
          <div class="services__modal" :class="{ 'active-modal': active }">
            <div class="services__modal-content">
              <i
                @click.prevent="active = false"
                class="bx bx-x services__modal-close"
              ></i>
              <h3 class="services__modal-title">Development & Testing</h3>
              <p class="services__modal-description">
                Your website will be implemented with the latest standards of
                programming
              </p>
              <ul class="services__modal-list">
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    Using modern Frameworks like VueJs
                  </p>
                </li>
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">E2E Testing with Cypress</p>
                </li>
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">Unit Testing with Jest</p>
                </li>
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    Implementing development and production procedure with Git
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="services__card">
          <h3 class="services__title">
            Layout &<br />
            Design
          </h3>
          <span @click.prevent="active2 = true" class="services__button">
            See more<i class="bx bx-right-arrow-alt services__icon"></i>
          </span>
          <div class="services__modal" :class="{ 'active-modal': active2 }">
            <div class="services__modal-content">
              <i
                @click.prevent="active2 = false"
                class="bx bx-x services__modal-close"
              ></i>
              <h3 class="services__modal-title">Layout & Design</h3>
              <p class="services__modal-description">
                Professional implementation of your ideas and wishes for your
                website on the Internet
              </p>
              <ul class="services__modal-list">
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    Realize your Design from Figma
                  </p>
                </li>
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">I create user interfaces</p>
                </li>
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    I position your company brand
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="services__card">
          <h3 class="services__title">
            Hosting &<br />
            Administration
          </h3>
          <a @click.prevent="active3 = true" class="services__button">
            See more<i class="bx bx-right-arrow-alt services__icon"></i>
          </a>
          <div class="services__modal" :class="{ 'active-modal': active3 }">
            <div class="services__modal-content">
              <i
                @click.prevent="active3 = false"
                class="bx bx-x services__modal-close"
              ></i>
              <h3 class="services__modal-title">Hosting & Administration</h3>
              <p class="services__modal-description">
                Technical support for your complete website infrastructure
              </p>
              <ul class="services__modal-list">
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">Hosting</p>
                </li>
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">User Administration</p>
                </li>
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">Webserver configuration</p>
                </li>
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">Cloude integration</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contact section" id="contact">
      <h2 class="section__title">Contact</h2>
      <div class="contact__container container grid section__border"></div>
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue";

const active = ref(false);
const active2 = ref(false);
const active3 = ref(false);
</script>
