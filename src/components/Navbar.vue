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
          :aria-label="t('nav.menu')"
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
                >{{ t("nav.about") }}</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="#skills"
                @click.prevent="navigate('skills')"
                :class="{ 'text-light': nightMode }"
                >{{ t("nav.skills") }}</a
              >
            </li>
            <li class="nav-item mx-2 ">
              <a
                class="nav-link"
                href="#portfolio"
                @click.prevent="navigate('portfolio')"
                :class="{ 'text-light': nightMode }"
                >{{ t("nav.portfolio") }}</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="#contact"
                @click.prevent="navigate('contact')"
                :class="{ 'text-light': nightMode }"
                >{{ t("nav.contact") }}</a
              >
            </li>
            <li class="nav-item ms-2 language-item">
              <button
                class="nav-link language-switch"
                type="button"
                :class="{ 'text-light': nightMode }"
                :aria-label="t('nav.switchToEnglish')"
                @click="switchLanguage"
              >
                <span :class="{ active: locale === 'ko' }">KO</span>
                <span class="language-divider" aria-hidden="true">/</span>
                <span :class="{ active: locale === 'en' }">EN</span>
              </button>
            </li>
            <li class="nav-item ms-2">
              <a
                class="nav-link"
                href="#"
                @click.prevent="switchMode"
                :class="{ 'text-light': nightMode }"
                :title="nightMode ? t('nav.lightMode') : t('nav.darkMode')"
                :aria-label="nightMode ? t('nav.lightMode') : t('nav.darkMode')"
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
import { useI18n } from "vue-i18n";
import Logo from "./helpers/Logo.vue";
import info from "../../info";
import { messages } from "../i18n";

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
const { locale, t } = useI18n();

function navigate(section: SectionId) {
  emit("scroll", section);
  menuOpen.value = false;
}

function switchMode() {
  emit("night-mode", !props.nightMode);
}

function switchLanguage() {
  locale.value = locale.value === "ko" ? "en" : "ko";
  window.localStorage.setItem("locale", locale.value);
  document.documentElement.lang = locale.value;
  document.title = messages[locale.value as "ko" | "en"].meta.title;
}
</script>

<style scoped>
.nav-link {
  font-weight: 500;
}

.language-switch {
  background: transparent;
  color: rgba(0, 0, 0, 0.55);
  cursor: pointer;
  font-size: 13px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.language-switch span:not(.language-divider) {
  opacity: 0.48;
}

.language-switch span.active {
  font-weight: 700;
  opacity: 1;
}

.language-divider {
  margin: 0 0.3rem;
  opacity: 0.4;
}

@media screen and (max-width: 991px) {
  .language-item {
    margin-left: 0 !important;
  }

  .language-switch {
    padding-left: 0;
  }
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
