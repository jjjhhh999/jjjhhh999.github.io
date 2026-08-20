<template>
  <div
    id="portfolio-app"
    :class="{ 'text-dark': !nightMode, 'text-light': nightMode }"
  >
    <Navbar @scroll="scrollTo" @night-mode="switchMode" :nightMode="nightMode" />
    <div class="parent">
      <Home id="home" :nightMode="nightMode" />
      <About id="about" :nightMode="nightMode" />
      <Skills id="skills" :nightMode="nightMode" />
      <Portfolio id="portfolio" :nightMode="nightMode" />
      <Recommendation :nightMode="nightMode" />
      <Contact id="contact" :nightMode="nightMode" />
      <Footer :nightMode="nightMode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Portfolio from "./components/Portfolio.vue";
import Recommendation from "./components/Recommendation.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

import info from "../info";

type SectionId = "home" | "about" | "skills" | "portfolio" | "contact";

const nightMode = ref(false);
const config = info.config;

if (config.use_cookies) {
  nightMode.value = window.localStorage.getItem("nightMode") === "true";
}

function switchMode(mode: boolean) {
  if (config.use_cookies) {
    window.localStorage.setItem("nightMode", String(mode));
  }

  nightMode.value = mode;
}

function scrollToSection(section: SectionId, behavior: ScrollBehavior = "smooth") {
  if (section === "home") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const element = document.getElementById(section);
  if (element) {
    window.scrollTo({ top: element.offsetTop - 35, behavior });
  }
}

function scrollToCurrentSection(behavior: ScrollBehavior = "smooth") {
  const section = (window.location.hash.slice(1) || "home") as SectionId;
  scrollToSection(section, behavior);
}

function handlePopState() {
  scrollToCurrentSection();
}

function scrollTo(section: SectionId) {
  const hash = section === "home" ? "" : `#${section}`;

  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash || import.meta.env.BASE_URL);
  }

  scrollToSection(section);
}

onMounted(() => {
  window.addEventListener("popstate", handlePopState);
  void nextTick(() => scrollToCurrentSection("auto"));
});

onBeforeUnmount(() => {
  window.removeEventListener("popstate", handlePopState);
});
</script>

<style>
#portfolio-app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

@media screen and (max-width: 580px) {
  #portfolio-app {
    width: fit-content;
  }
}

.parent {
  margin-top: 38px;
  padding-top: 40px;
  position: relative;
}

#home,
#about,
#skills,
#portfolio,
#contact {
  scroll-margin-top: 80px;
}

.pgray {
  color: #535a5e;
}

.pblue {
  color: #669db3ff;
}

.bg-dark2 {
  background-color: #262c30 !important;
}

.text-light {
  color: #d3d2d2 !important;
}

.p-st {
  transition: all 0.5s !important;
}

/* To set scrollbar width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 9px;
  border: 2px solid white; /* Use your background color instead of White */
  background-clip: content-box;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 9px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
