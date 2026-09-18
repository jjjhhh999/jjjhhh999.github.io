<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <h2
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >{{ t("about.title") }}</h2
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12">
          <Timeline :data="experience" :nightMode="nightMode" :isExperience="true" />
        </div>
        <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12">
          <Timeline :data="certification" :nightMode="nightMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import Timeline from "./helpers/Timeline.vue";
import { getLocalizedInfo } from "../localizedInfo";

defineProps<{
  nightMode: boolean;
}>();

const { locale, t } = useI18n();
const content = computed(() => getLocalizedInfo(locale.value));
const certification = computed(() => ({
  title: t("about.certification"),
  data: content.value.certification,
}));
const experience = computed(() => ({
  title: t("about.experience"),
  data: content.value.experience,
}));
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 0;
}
</style>
