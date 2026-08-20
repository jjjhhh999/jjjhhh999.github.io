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
        >
          portfolio.
        </h2>
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />

      <div class="portfolio-tabs" role="tablist" aria-label="포트폴리오 분류">
        <button
          v-for="tab in tabs"
          :id="`${tab.id}-tab`"
          :key="tab.id"
          class="tab-button"
          type="button"
          role="tab"
          :aria-controls="`${tab.id}-panel`"
          :aria-selected="activeTab === tab.id"
          :class="{
            active: activeTab === tab.id,
            'text-light': nightMode,
          }"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <section
        v-show="activeTab === 'projects'"
        id="projects-panel"
        role="tabpanel"
        aria-labelledby="projects-tab"
      >
        <div class="row pt-3">
          <div
            v-for="(portfolio, idx) in portfolioInfo"
            :key="portfolio.name"
            class="col-xl-4 col-bg-4 col-md-6 col-sm-12"
          >
            <Card
              :style="{ 'transition-delay': `${(idx % 3) / 4.2}s` }"
              :portfolio="portfolio"
              :nightMode="nightMode"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="10"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              @show="showProjectModal"
            />
          </div>
        </div>
        <div v-if="allInfo.length > initialVisibleCount" class="text-center py-3">
          <button class="btn" type="button" @click="toggleProjects">
            {{ projectButtonLabel }}
          </button>
        </div>
      </section>

      <section
        v-show="activeTab === 'award'"
        id="award-panel"
        role="tabpanel"
        aria-labelledby="award-tab"
      >
        <div class="row">
          <div
            v-for="design in designInfo"
            :key="design.name"
            class="col-xl-6 col-bg-6 col-md-12 col-sm-12 mt-4"
          >
            <button
              class="award-preview"
              type="button"
              :aria-label="`${design.title || design.name} 상세 보기`"
              @click="showDesignModal(design)"
            >
              <img
                :src="design.pictures[0]?.img"
                :alt="design.pictures[0]?.title || design.title || design.name"
              />
            </button>
            <div class="award-summary mt-2">
              <div>
                <div class="title2 fw-medium">{{ design.title }}</div>
                <span
                  v-for="tech in design.technologies || []"
                  :key="tech"
                  class="badge me-2 mb-2"
                  :class="{ 'bg-dark4': nightMode }"
                >
                  {{ tech }}
                </span>
                <span class="date">{{ design.date }}</span>
              </div>

              <button
                class="btn-sm btn btn-outline-secondary no-outline award-more"
                type="button"
                @click="showDesignModal(design)"
              >
                read more
              </button>
            </div>
          </div>
        </div>
        <br />
      </section>

      <section
        v-show="activeTab === 'education'"
        id="education-panel"
        role="tabpanel"
        aria-labelledby="education-tab"
      >
        <div class="row pt-3">
          <div
            v-for="(education, idx) in educationInfo"
            :key="education.name"
            class="col-xl-4 col-bg-4 col-md-6 col-sm-12"
          >
            <CardEducation
              :style="{ 'transition-delay': `${(idx % 3) / 4.2}s` }"
              :portfolio="education"
              :nightMode="nightMode"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="10"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              @show="showEducationModal"
            />
          </div>
        </div>
        <div
          v-if="allEducationInfo.length > initialVisibleCount"
          class="text-center py-3"
        >
          <button class="btn" type="button" @click="toggleEducation">
            {{ educationButtonLabel }}
          </button>
        </div>
      </section>
    </div>

    <Transition name="modal">
      <Modal
        v-if="modalInfo"
        :showModal="true"
        :portfolio="modalInfo"
        :nightMode="nightMode"
        @close="closeModal"
      />
    </Transition>
    <Transition name="modal">
      <DesignModal
        v-if="designModalInfo"
        :showModal="true"
        :portfolio="designModalInfo"
        :nightMode="nightMode"
        @close="closeModal"
      />
    </Transition>
    <Transition name="modal">
      <EducationModal
        v-if="educationModalInfo"
        :showModal="true"
        :portfolio="educationModalInfo"
        :nightMode="nightMode"
        @close="closeModal"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import info from "../../info";
import type { PortfolioItem } from "../types/content";
import Card from "./helpers/Card.vue";
import CardEducation from "./helpers/CardEducation.vue";
import DesignModal from "./helpers/DesignModal.vue";
import EducationModal from "./helpers/EducationModal.vue";
import Modal from "./helpers/Modal.vue";

type TabId = "projects" | "award" | "education";

defineProps<{
  nightMode: boolean;
}>();

const tabs: Array<{ id: TabId; label: string }> = [
  { id: "projects", label: "projects" },
  { id: "award", label: "award" },
  { id: "education", label: "education" },
];
const initialVisibleCount = 3;
const allInfo = info.portfolio as PortfolioItem[];
const designInfo = info.portfolio_design as PortfolioItem[];
const allEducationInfo = info.portfolio_education as PortfolioItem[];
const activeTab = ref<TabId>("projects");
const visibleProjectCount = ref(initialVisibleCount);
const visibleEducationCount = ref(initialVisibleCount);
const modalInfo = ref<PortfolioItem | null>(null);
const designModalInfo = ref<PortfolioItem | null>(null);
const educationModalInfo = ref<PortfolioItem | null>(null);

const portfolioInfo = computed(() =>
  allInfo.slice(0, visibleProjectCount.value),
);
const educationInfo = computed(() =>
  allEducationInfo.slice(0, visibleEducationCount.value),
);
const projectButtonLabel = computed(() =>
  visibleProjectCount.value >= allInfo.length ? "show less" : "show more",
);
const educationButtonLabel = computed(() =>
  visibleEducationCount.value >= allEducationInfo.length
    ? "show less"
    : "show more",
);

function scrollToPortfolio() {
  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
}

function scrollByCardHeight() {
  const card = document.querySelector<HTMLElement>(".smcard");
  window.scrollBy({ top: card?.clientHeight ?? 0, behavior: "smooth" });
}

function toggleProjects() {
  if (visibleProjectCount.value >= allInfo.length) {
    visibleProjectCount.value = initialVisibleCount;
    scrollToPortfolio();
    return;
  }

  visibleProjectCount.value = Math.min(
    visibleProjectCount.value + initialVisibleCount,
    allInfo.length,
  );
  scrollByCardHeight();
}

function toggleEducation() {
  if (visibleEducationCount.value >= allEducationInfo.length) {
    visibleEducationCount.value = initialVisibleCount;
    scrollToPortfolio();
    return;
  }

  visibleEducationCount.value = Math.min(
    visibleEducationCount.value + initialVisibleCount,
    allEducationInfo.length,
  );
  scrollByCardHeight();
}

function showProjectModal(portfolio: PortfolioItem) {
  modalInfo.value = portfolio;
}

function showDesignModal(portfolio: PortfolioItem) {
  designModalInfo.value = portfolio;
}

function showEducationModal(portfolio: PortfolioItem) {
  educationModalInfo.value = portfolio;
}

function closeModal() {
  modalInfo.value = null;
  designModalInfo.value = null;
  educationModalInfo.value = null;
}
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 0;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}

.portfolio-tabs {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding: 0.5rem 0;
}

.tab-button {
  appearance: none;
  background: transparent;
  border: 0;
  color: #a0a0a0;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.tab-button::after {
  border-bottom: 2px solid currentColor;
  bottom: 0;
  content: "";
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  transition: width 0.3s ease;
  width: 20%;
}

.tab-button:hover,
.tab-button.active {
  color: #535a5e;
}

.tab-button.active::after {
  width: 100%;
}

.tab-button:focus-visible,
.award-preview:focus-visible {
  outline: 2px solid #669db3;
  outline-offset: 4px;
}

.award-preview {
  background: transparent;
  border: 0;
  border-radius: 10px;
  display: block;
  overflow: hidden;
  padding: 0;
  width: 100%;
}

.award-preview img {
  background: #fff;
  height: 300px;
  object-fit: contain;
  transition: opacity 0.3s ease;
  width: 100%;
}

.award-preview:hover img {
  opacity: 0.8;
}

.award-summary {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.award-more {
  height: 31px;
  margin-top: 5px;
  white-space: nowrap;
}

.btn {
  border-color: #669db3;
  color: #669db3;
}

.btn:hover,
.btn:focus {
  background-color: #669db3;
  border-color: #669db3;
  color: white;
}

.badge {
  background-color: rgb(211, 227, 233);
  font-size: 13px;
  font-weight: 500;
  transition: all 0.5s;
}

.bg-dark4 {
  background-color: #494e55 !important;
}

.date {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.75;
}
</style>
