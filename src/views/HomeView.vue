<template>
  <main>
    <section class="home section" id="home">
      <div class="home__container container grid section__border">
        <div class="home__data">
          <span class="home__greeting"></span>
          <h1 class="home__name">Hi, I'm Sascha</h1>
          <h3 class="home__education">Webapp-Developer</h3>
          <div class="home__buttons">
            <a
              download="CV.pdf"
              href="../assets/pdf/CV.pdf"
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
        <div class="home__info">
          <div>
            <h3 class="about__info-title">Biography</h3>
            <p class="about__info-description">
              Hi, I'm Sascha, Webapp-Developer and passionate about designing
              modern web-interfaces
            </p>
          </div>
          <div>
            <h3 class="about__info-title">Contact</h3>
            <p class="about__info-description">
              Cologne, Germany <br />
              sascha_dietrich@outlook.com <br />
            </p>
          </div>
          <div>
            <h3 class="about__info-title">Service</h3>
            <p class="about__info-description">
              Website Design<br />Webapp Development <br />
              Framework integration<br />Hosting and Administration
            </p>
          </div>
        </div>
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

          <a href="#contact" class="button">Contact Me</a>
        </div>
      </div>
    </section>
    <section class="skills section" id="skills">
      <h2 class="section__title">Skills</h2>
      <span class="section__subtitle">My favorite skills</span>
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
      <span class="section__subtitle">Experience & education</span>
      <div class="qualifications__container container grid section__border">
        <div class="qualifiaction__content">
          <h3 class="qualification_title">
            <i class="bx bxs-graduation"></i>Education
          </h3>
          <div class="qulification__info">
            <div>
              <h3 class="qualification__name">
                Vue.js & TypeScript Intensiv-Schulung
              </h3>
              <span class="qualification__year"> 2022/11</span><br />
              <span class="qualification__company">workshops.de</span>
              <p class="qualification__discription">
                Construction of webapps in the framework Vue.js based on
                TypeScript
              </p>
            </div>
          </div>
          <div class="qulification__info">
            <div>
              <h3 class="qualification__name">Web-Developer</h3>
              <span class="qualification__year">since 2022/07</span><br />
              <span class="qualification__company">
                Coding Bootcamp Europe
              </span>
              <p class="qualification__discription">
                Develeoping Website based on HTML / CSS / JS | Framework Vue.js
                | Unit and E2E testing with Jest and Cypress
              </p>
            </div>
          </div>
          <div class="qulification__info">
            <div>
              <h3 class="qualification__name">
                MCITP Enterprise Administrator
              </h3>
              <span class="qualification__year"> 2010/06 – 2010/10 </span><br />
              <span class="qualification__company"> FutureTraining</span>
            </div>
          </div>
        </div>
        <div class="qualifiaction__content">
          <h3 class="qualification_title">
            <i class="bx bx-buildings"></i> Experience
          </h3>
          <div class="qulification__info">
            <div>
              <h3 class="qualification__name">
                Webapp-Developer & IT-Administor
              </h3>
              <span class="qualification__year">2021/12 - 2022/12</span><br />
              <span class="qualification__company">digiblue GmbH</span>
              <p class="qualification__discription">
                Deployment and configuration of internal IT infrastructure, web
                app development for data visualization in project-related
                customer use-case, project-related communication with customers
              </p>
            </div>
          </div>
          <div class="qulification__info">
            <div>
              <h3 class="qualification__name">IT-Administor</h3>
              <span class="qualification__year">2019/04 - 2010/07</span><br />
              <span class="qualification__company">
                Indeed Germany | Pieritz select* | RHT | KI-Group GmbH | Jerocom
                GmbH | Hays Professional Solution GmbH | Jar Media GmbH |
                Job@tive |AixConcept GmbH | NetCologne GmbH |
                Marko-Medien-Dienst GmbH
              </span>
            </div>
          </div>
          <div class="qulification__info">
            <div>
              <h3 class="qualification__name">Service-Technician</h3>
              <span class="qualification__year">2010/04 – 2010/06 </span><br />
              <span class="qualification__company"
                >Hemmersbach GmbH & Co KG</span
              >
            </div>
          </div>
          <div class="qulification__info">
            <div>
              <h3 class="qualification__name">UHD-Employee</h3>
              <span class="qualification__year">2010/04 – 2010/06 </span><br />
              <span class="qualification__company"
                >Comline Computer&Softwarelösungen AG | Ducon Consulting GmbH |
                TechTeam International AG</span
              >
            </div>
          </div>
        </div>
        <div class="qualifiaction__content">
          <h3 class="qualification_title">
            <i class="bx bx-book-reader"></i> Apprenticeship
          </h3>
          <div class="qulification__info">
            <div>
              <h3 class="qualification__name">
                Apprenticeship by IHK as IT-System Kaufmann
              </h3>
              <span class="qualification__year">2003/09 – 2006/06</span><br />
              <span class="qualification__company">Deutsche Telekom AG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="service section" id="service">
      <span class="section__subtitle">My Services</span>
      <h2 class="section__title">What I Offer</h2>
      <div class="services__container container grid section__border">
        <div class="services__card">
          <i class="bx bx-code-alt"></i><i class="bx bx-terminal"></i>
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
          <i class="bx bx-layout"></i><i class="bx bx-image"></i>
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
          <i class="bx bx-cloud"></i>
          <i class="bx bxs-devices"></i>
          <i class="bx bx-cog"></i>
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
    <section class="testimonial section" id="testimonial">
      <h2 class="section__title">Testimonial</h2>
      <span class="section__subtitle">My colleagues and superior saying </span>
      <div class="container section__border">
        <div class="testimoial__container">
          <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide class="testimonial__content swiper-slide">
              <p class="testimonial__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                adipisci fuga labore fugit repudiandae quaerat iure, impedit
                quam id delectus placeat saepe aut porro assumenda expedita
                error, eum exercitationem architecto.
              </p>
              <div>
                <h3 class="testimonial__name">Max</h3>
                <p class="testimonial__subtitle">Co-Worker</p>
              </div>
            </swiper-slide>
            <swiper-slide class="testimonial__content swiper-slide">
              <p class="testimonial__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                adipisci fuga labore fugit repudiandae quaerat iure, impedit
                quam id delectus placeat saepe aut porro assumenda expedita
                error, eum exercitationem architecto.
              </p>
              <div>
                <h3 class="testimonial__name">Stefan</h3>
                <p class="testimonial__subtitle">Supervisior</p>
              </div>
            </swiper-slide>
            <swiper-slide class="testimonial__content swiper-slide">
              <p class="testimonial__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                adipisci fuga labore fugit repudiandae quaerat iure, impedit
                quam id delectus placeat saepe aut porro assumenda expedita
                error, eum exercitationem architecto.
              </p>
              <div>
                <h3 class="testimonial__name">Julian</h3>
                <p class="testimonial__subtitle">Supervisior</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
    <section class="contact section" id="contact">
      <h2 class="section__title">Contact</h2>
      <span class="section__subtitle">Get in touch </span>
      <div class="contact__container container grid section__border">
        <div class="contact__content">
          <h3 class="contact__title"><i class="bx bx-chat"></i>Talk to me</h3>
          <div class="contact__info">
            <div class="contact__data">
              <span class="contact__data-title">Email</span>
              <span class="contact__data-info"
                >sascha_dietrich(at)outlook.com</span
              >
              <a
                href="https://m.me/sdietrich1987"
                target="_blank"
                class="contact__button"
              >
              </a>
            </div>
            <div class="contact__data">
              <span class="contact__data-title">Whatsapp</span>
              <span class="contact__data-info">(+49)-151- 1785-2500</span>
              <a
                href="https://api.whatsapp.com/send?phone=4915117852500&text=Find your contact at your Portfolio."
                target="_blank"
                class="contact__button"
                >Write me <i class="bx bx-right-arrow-alt"></i
              ></a>
            </div>
            <div class="contact__data">
              <span class="contact__data-title">Messenger</span>
              <span class="contact__data-info">@sdietrich1987</span>
              <a
                href="https://m.me/sdietrich1987"
                target="_blank"
                class="contact__button"
                >Write me <i class="bx bx-right-arrow-alt"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="contact__content">
          <h3 class="contact__title">
            <i class="bx bx-send"></i>You want me for your project?
          </h3>
          <form ref="form" @submit.prevent="sendEmail" class="contact__form">
            <div class="contact__form-item">
              <label>Name</label>
              <input
                type="text"
                v-model="name"
                name="user_name"
                placeholder="Your Name"
              />
            </div>
            <div class="contact__form-item">
              <label>Email</label>
              <input
                type="email"
                v-model="email"
                name="user_email"
                placeholder="Your Email"
              />
            </div>
            <div class="contact__form-item">
              <label>Message</label>
              <textarea
                name="user_project"
                v-model="message"
                cols="30"
                rows="5"
                placeholder="Message"
              >
              </textarea>
            </div>
            <div class="contact__form-item">
              <button type="submit" class="contact__form-button">
                Submit<i class="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import emailjs from "../../node_modules/emailjs-com";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
      active: ref(false),
      active2: ref(false),
      active3: ref(false),
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_pvkjntj",
          "template_6ytyosq",
          this.$refs.form,
          "DsZHBt1lwbMV_UDGP"
        )
        .then(
          () => {},
          (error) => {
            alert("Something has failed...." + { error });
          }
        );
    },
  },
};
</script>
