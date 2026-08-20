<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top p-st"
      :class="{
        'bg-light': !nightMode,
        'navbar-blur': navbarConfig.blur,
        'bg-dark2': nightMode,
      }"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="#home"
          @click.prevent="navigate('home')"
        >
          <Logo :nightMode="nightMode" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          <span style="color: gray; font-size: 23px;"
            ><i class="fas fa-bars"></i
          ></span>
        </button>

        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse"
          :class="{ show: menuOpen }"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="#about"
                @click.prevent="navigate('about')"
                :class="{ 'text-light': nightMode }"
                >about</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="#skills"
                @click.prevent="navigate('skills')"
                :class="{ 'text-light': nightMode }"
                >skills</a
              >
            </li>
            <li class="nav-item mx-2 ">
              <a
                class="nav-link"
                href="#portfolio"
                @click.prevent="navigate('portfolio')"
                :class="{ 'text-light': nightMode }"
                >portfolio</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="#contact"
                @click.prevent="navigate('contact')"
                :class="{ 'text-light': nightMode }"
                >contact</a
              >
            </li>
            <li class="nav-item ms-2">
              <a
                class="nav-link"
                href="#"
                @click.prevent="switchMode"
                :class="{ 'text-light': nightMode }"
                :title="nightMode ? 'Light Mode' : 'Night Mode'"
                :aria-label="nightMode ? 'Light Mode' : 'Night Mode'"
                ><i
                  :class="{
                    'fas fa-moon': nightMode,
                    'far fa-moon': !nightMode,
                  }"
                  aria-hidden="true"
                ></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Logo from "./helpers/Logo.vue";
import info from "../../info";

type SectionId = "home" | "about" | "skills" | "portfolio" | "contact";

const props = defineProps<{
  nightMode: boolean;
}>();

const emit = defineEmits<{
  scroll: [section: SectionId];
  "night-mode": [mode: boolean];
}>();

const navbarConfig = info.config.navbar;
const menuOpen = ref(false);

function navigate(section: SectionId) {
  emit("scroll", section);
  menuOpen.value = false;
}

function switchMode() {
  emit("night-mode", !props.nightMode);
}
</script>

<style scoped>
.nav-link {
  font-weight: 500;
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

nav {
  border-bottom: 1px solid rgba(160, 159, 159, 0.336);
  position: fixed !important;
}

.navbar-blur {
  background-color: #ffffff7e;
  backdrop-filter: blur(12px);
}
</style>
