<template>
  <div class="card-shell my-3 mx-3">
    <div
      class="card smcard"
      :class="{
        'pcard-dark': nightMode,
        pcard: !nightMode,
        'bg-dark3': nightMode,
      }"
    >
      <div class="card-media">
        <img
          class="card-img-top"
          :src="portfolio.cover?.img ?? portfolio.pictures[0].img"
          :alt="$t('portfolio.coverAlt', { name: portfolio.name })"
        />
      </div>
      <div class="card-body pborder-top">
        <h3 class="title2">{{ portfolio.name }}</h3>
        <div v-if="portfolio.date" class="project-meta">
          <span>{{ portfolio.date }}</span>
        </div>
        <p class="title3 card-summary m-0">
          {{ summaryText(portfolio.description) }}
        </p>
        <div v-if="portfolio.technologies?.length" class="tech-list">
          <span
            v-for="tech in portfolio.technologies.slice(0, 6)"
            :key="tech"
            class="badge me-2 mb-2"
            :class="{ 'bg-dark4': nightMode }"
          >
            {{ tech }}
          </span>
          <span
            v-if="portfolio.technologies.length > 6"
            class="badge me-2 mb-2 tech-more"
            :class="{ 'bg-dark4': nightMode }"
          >
            +{{ portfolio.technologies.length - 6 }}
          </span>
        </div>
        <div class="card-actions text-center mt-2">
          <button
            href=""
            class="btn-sm btn btn-outline-secondary no-outline"
            @click.prevent="showModal"
          >
            {{ $t("common.viewDetails") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { PortfolioItem } from "../../types/content";

export default defineComponent({
  name: "Card",
  props: {
    portfolio: {
      type: Object as PropType<PortfolioItem>,
      required: true,
    },
    nightMode: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["show"],
  methods: {
    summaryText(description: string) {
      const text = description
        .replace(/<br\s*\/?>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      return text.length > 115 ? `${text.slice(0, 115).trim()}…` : text;
    },
    showModal() {
      this.$emit("show", this.portfolio);
    },
  },
});
</script>

<style scoped>
.card-shell {
  height: calc(100% - 2rem);
}

.card-media {
  align-items: center;
  background-color: #fff;
  display: flex;
  height: 180px;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;
}

.card-img-top {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  height: 100%;
  object-fit: contain;
  width: 100%;
}

.card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.card-summary {
  display: -webkit-box;
  line-height: 1.55;
  min-height: 6.2rem;
  overflow: hidden;
  text-align: left;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.project-meta {
  align-items: center;
  color: #6c757d;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.82rem;
  gap: 0.35rem;
  line-height: 1.4;
  margin: -0.15rem 0 0.65rem;
}

.pcard-dark .project-meta {
  color: #c4cbd1;
}

.tech-list {
  margin-top: 0.75rem;
  min-height: 3.5rem;
}

.tech-more {
  opacity: 0.8;
}

.card-actions {
  margin-top: auto !important;
}

.pborder-top {
  border-top: 1px solid rgb(193, 193, 193);
}

.pcard {
  background-color: rgb(255, 255, 255);
  border-radius: 7px;
  border: none;
  box-shadow: 1px 1px 12px rgb(233, 233, 233);
  transition: all 0.5s;
  height: 100%;
  min-height: 470px;
}

.pcard:hover {
  transition: all 0.5s;
  /* cursor: pointer; */
  box-shadow: 1px 1px 15px rgb(216, 216, 216);
}

.pcard-dark {
  border-radius: 7px;
  border: none;
  background-color: #30363a !important;
  /* box-shadow: 1px 1px 12px rgb(53, 53, 53); */
  transition: all 0.5s;
  height: 100%;
  min-height: 470px;
}

.pcard-dark:hover {
  transition: all 0.5s;
  /* cursor: pointer; */
  box-shadow: 1px 1px 12px rgb(53, 53, 53);
}

.pcard-body {
  border-top: 1px solid rgb(220, 220, 220);
  z-index: -1;
  background-color: rgb(253, 254, 255);
}

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.badge {
  background-color: rgb(211, 227, 233);
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.bg-dark3 {
  background-color: rgb(82, 82, 82);
}

.bg-dark4 {
  background-color: #494e55 !important;
}
</style>
