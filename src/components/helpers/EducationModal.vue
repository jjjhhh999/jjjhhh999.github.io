<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div
          ref="modalContainer"
          class="modal-container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="education-modal-title"
          aria-describedby="education-modal-description"
          tabindex="-1"
          :class="{
            'bg-light': !nightMode,
            'bg-dark': nightMode,
            'text-light': nightMode,
          }"
        >
          <div class="title1 px-4 pt-3">
            <h2
              id="education-modal-title"
              class="modal-title"
              :class="{ 'text-light': nightMode }"
            >
              {{ portfolio.name }}
            </h2>
            <button
              type="button"
              class="modal-close-button float-end"
              aria-label="교육 상세 닫기"
              @click="closeModal"
            >
              <i class="fas fa-times" aria-hidden="true"></i>
            </button>
            <hr
              class="my-1"
              :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
            />
          </div>
          <div class="modal-body my-0 pb-0 px-4 pt-0">
            <div
              class="mb-2 date"
              :class="{ 'text-light': nightMode, pbgray: nightMode }"
            >
              <span>{{ portfolio.date }} • {{ portfolio.category }}</span>
            </div>
            <div class="pb-1 bheight">
              <span
                class="badge me-2 mb-2"
                v-for="tech in portfolio.technologies"
                :key="tech"
                :class="{ 'bg-dark4': nightMode }"
                >{{ tech }}</span
              >
            </div>

            <div id="education-modal-description" style="text-align: justify;">
              <span v-html="portfolio.description"></span>
            </div>
            <hr />
            <div>
              <Gallery :images="portfolio.pictures" :design="true" />
            </div>
          </div>

          <div class="text-center pb-3">
            <hr
              class="mt-1 mb-3"
              :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
            />
            <button class="btn w-25" type="button" @click="closeModal">close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import Gallery from "./Gallery.vue";
import accessibleModal from "../../mixins/accessibleModal";
import type { PortfolioItem } from "../../types/content";

export default defineComponent({
  name: "Modal",
  mixins: [accessibleModal],
  components: {
    Gallery,
  },
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    portfolio: {
      type: Object as PropType<PortfolioItem>,
      required: true,
    },
    nightMode: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
  transition: all 0.2s;
  cursor: pointer;
}

a:hover {
  transition: all 0.2s;
  color: gray;
}

.modal-title {
  display: inline;
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
}

.modal-close-button {
  appearance: none;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  font-size: 18px;
  padding: 0.25rem;
}

.modal-close-button:focus-visible {
  outline: 2px solid #669db3;
  outline-offset: 2px;
}

.date {
  font-size: 14px;
  font-weight: 400;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 40%;
  max-height: 70%;
  margin: 0px auto;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  flex-direction: column;
  display: flex; /*added*/
}

@media screen and (max-width: 1600px) {
  .modal-container {
    width: 60%;
  }
}

@media screen and (max-width: 1200px) {
  .modal-container {
    width: 80%;
  }
}

@media screen and (max-width: 580px) {
  .modal-container {
    width: 90%;
  }
}

.modal-body {
  margin: 20px 0;
  overflow-y: scroll;
  max-height: inherit;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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
  font-weight: 500;
}

.badge {
  background-color: rgb(211, 227, 233);
  transition: all 0.5s;
  font-weight: 500;
}

.badge:hover {
  transition: all 0.5s;
  box-shadow: 2px 2px 5px rgb(179, 179, 179);
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

.bg-dark4 {
  background-color: #494e55 !important;
}
</style>
