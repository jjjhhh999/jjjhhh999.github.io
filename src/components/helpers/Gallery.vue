<template>
  <div class="gallery" :class="{ 'gallery-design': design }">
    <div v-if="activeImage" class="main-stage">
      <button
        class="main-preview"
        type="button"
        :aria-label="`${activeImage.title || `프로젝트 화면 ${activeIndex + 1}`} 크게 보기`"
        @click="showActiveImage"
      >
        <img
          class="main-image"
          :src="activeImage.img"
          :alt="activeImage.title || `프로젝트 화면 ${activeIndex + 1}`"
        />
      </button>

      <span v-if="images.length > 1" class="image-counter">
        {{ activeIndex + 1 }} / {{ images.length }}
      </span>

      <button
        v-if="images.length > 1"
        class="gallery-nav gallery-nav-prev"
        type="button"
        aria-label="이전 프로젝트 화면"
        @click="previousImage"
      >
        <i class="fas fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button
        v-if="images.length > 1"
        class="gallery-nav gallery-nav-next"
        type="button"
        aria-label="다음 프로젝트 화면"
        @click="nextImage"
      >
        <i class="fas fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>

    <div v-if="images.length > 1" class="thumbnail-row">
      <button
        class="thumbnail-scroll"
        type="button"
        aria-label="이전 썸네일 보기"
        @click="scrollThumbnails(-1)"
      >
        <i class="fas fa-chevron-left" aria-hidden="true"></i>
      </button>

      <div ref="thumbnailList" class="thumbnail-list" aria-label="프로젝트 화면 목록">
        <button
          v-for="(image, idx) in images"
          :key="`${image.img}-${idx}`"
          ref="thumbnailButtons"
          class="thumbnail-button"
          :class="{ active: activeIndex === idx }"
          type="button"
          :aria-label="`${image.title || `프로젝트 화면 ${idx + 1}`} 선택`"
          :aria-pressed="activeIndex === idx"
          @click="selectImage(idx)"
        >
          <img
            :src="image.img"
            :alt="image.title || `프로젝트 화면 ${idx + 1}`"
          />
          <span class="thumbnail-number">{{ idx + 1 }}</span>
        </button>
      </div>

      <button
        class="thumbnail-scroll"
        type="button"
        aria-label="다음 썸네일 보기"
        @click="scrollThumbnails(1)"
      >
        <i class="fas fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>

    <p v-if="activeImage?.title" class="image-caption">
      {{ activeImage.title }}
    </p>

    <div ref="imageModal" class="modal" @click.self="closeImage">
      <button
        type="button"
        class="close"
        aria-label="확대 이미지 닫기"
        @click="closeImage"
      >
        &times;
      </button>
      <img
        ref="modalImage"
        class="modal-content"
        :alt="activeImage?.title || `프로젝트 화면 ${activeIndex + 1}`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Picture } from "../../types/content";

export default defineComponent({
  name: "Gallery",
  props: {
    images: {
      type: Array as PropType<Picture[]>,
      required: true,
    },
    design: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    activeImage() {
      return this.images[this.activeIndex] || this.images[0];
    },
  },
  methods: {
    selectImage(idx: number) {
      this.activeIndex = idx;
      this.scrollActiveThumbnail();
    },
    previousImage() {
      this.activeIndex =
        (this.activeIndex - 1 + this.images.length) % this.images.length;
      this.scrollActiveThumbnail();
    },
    nextImage() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
      this.scrollActiveThumbnail();
    },
    scrollActiveThumbnail() {
      this.$nextTick(() => {
        const thumbnails = this.$refs.thumbnailButtons as HTMLButtonElement[] | undefined;
        thumbnails?.[this.activeIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      });
    },
    scrollThumbnails(direction: number) {
      const list = this.$refs.thumbnailList as HTMLElement | undefined;
      list?.scrollBy({ left: direction * 320, behavior: "smooth" });
    },
    showActiveImage() {
      const modal = this.$refs.imageModal as HTMLElement | undefined;
      const modalImg = this.$refs.modalImage as HTMLImageElement | undefined;

      if (!modal || !modalImg || !this.activeImage) {
        return;
      }

      modal.style.display = "flex";
      modalImg.src = this.activeImage.img;
    },
    closeImage() {
      const modal = this.$refs.imageModal as HTMLElement | undefined;
      const modalImg = this.$refs.modalImage as HTMLImageElement | undefined;

      if (!modal || !modalImg) {
        return;
      }

      modalImg.classList.add("closeModal");
      modal.classList.add("modalClose");
      setTimeout(() => {
        modal.style.display = "none";
        modalImg.classList.remove("closeModal");
        modal.classList.remove("modalClose");
      }, 200);
    },
  },
});
</script>

<style scoped>
.gallery {
  width: 100%;
}

.main-stage {
  position: relative;
}

.main-preview {
  appearance: none;
  background-color: #fff;
  border: 1px solid #dfe5e8;
  border-radius: 8px;
  cursor: zoom-in;
  display: block;
  padding: 0.75rem;
  width: 100%;
}

.main-preview:focus-visible,
.gallery-nav:focus-visible,
.thumbnail-button:focus-visible,
.thumbnail-scroll:focus-visible,
.close:focus-visible {
  outline: 2px solid #669db3;
  outline-offset: 3px;
}

.main-image {
  display: block;
  height: clamp(320px, 52vh, 560px);
  object-fit: contain;
  width: 100%;
}

.gallery-design .main-image {
  height: clamp(360px, 58vh, 650px);
}

.image-counter {
  background-color: rgba(31, 40, 44, 0.78);
  border-radius: 999px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding: 0.35rem 0.65rem;
  pointer-events: none;
  position: absolute;
  right: 1rem;
  top: 1rem;
}

.gallery-nav {
  align-items: center;
  appearance: none;
  background-color: rgba(31, 40, 44, 0.72);
  border: 0;
  border-radius: 50%;
  color: #fff;
  display: flex;
  height: 44px;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.2s ease, transform 0.2s ease;
  width: 44px;
}

.gallery-nav:hover {
  background-color: rgba(31, 40, 44, 0.92);
  transform: translateY(-50%) scale(1.06);
}

.gallery-nav-prev {
  left: 1rem;
}

.gallery-nav-next {
  right: 1rem;
}

.thumbnail-row {
  align-items: center;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 38px minmax(0, 1fr) 38px;
  margin-top: 0.85rem;
}

.thumbnail-list {
  display: flex;
  gap: 0.7rem;
  overflow-x: auto;
  padding: 0.35rem 0.15rem 0.6rem;
  scrollbar-width: thin;
}

.thumbnail-scroll {
  align-items: center;
  appearance: none;
  background-color: rgba(102, 157, 179, 0.12);
  border: 1px solid rgba(102, 157, 179, 0.45);
  border-radius: 8px;
  color: #527f91;
  display: flex;
  height: 80px;
  justify-content: center;
  transition: background-color 0.2s ease, color 0.2s ease;
  width: 38px;
}

.thumbnail-scroll:hover {
  background-color: #669db3;
  color: #fff;
}

.thumbnail-button {
  appearance: none;
  background-color: #fff;
  border: 2px solid transparent;
  border-radius: 8px;
  flex: 0 0 120px;
  height: 80px;
  opacity: 0.58;
  padding: 0.3rem;
  position: relative;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.thumbnail-button:hover {
  opacity: 0.88;
}

.thumbnail-button.active {
  border-color: #669db3;
  box-shadow: 0 3px 9px rgba(61, 94, 107, 0.28);
  opacity: 1;
}

.thumbnail-button img {
  height: 100%;
  object-fit: contain;
  width: 100%;
}

.thumbnail-number {
  align-items: center;
  background-color: rgba(31, 40, 44, 0.78);
  border-radius: 50%;
  bottom: 0.3rem;
  color: #fff;
  display: flex;
  font-size: 10px;
  height: 20px;
  justify-content: center;
  position: absolute;
  right: 0.3rem;
  width: 20px;
}

.image-caption {
  font-size: 14px;
  margin: 0.35rem 0 0;
  opacity: 0.75;
  text-align: center;
}

.modal {
  align-items: center;
  animation-name: modalOpen;
  animation-duration: 0.2s;
  background-color: rgba(0, 0, 0, 0.92);
  display: none;
  inset: 0;
  justify-content: center;
  overflow: auto;
  padding: 3.5rem 2rem 2rem;
  position: fixed;
  transition: all 0.5s;
  z-index: 10000;
}

@keyframes modalOpen {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalClose {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.modal-content {
  display: block;
  margin: auto;
  max-height: calc(100vh - 5.5rem);
  max-width: 1200px;
  object-fit: contain;
  width: min(100%, 1200px);
}

.modal-content {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.2s;
  animation-name: zoom;
  animation-duration: 0.2s;
}

@keyframes zoom {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.close {
  appearance: none;
  background: transparent;
  border: 0;
  color: #f1f1f1;
  cursor: pointer;
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  right: 35px;
  top: 15px;
  transition: 0.3s;
}

.closeModal {
  animation-name: zoomClose;
  animation-duration: 0.2s;
}

@keyframes zoomClose {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .main-image {
    height: clamp(240px, 42vh, 420px);
  }

  .modal {
    padding: 3.5rem 0.75rem 1rem;
  }

  .modal-content {
    width: 95%;
  }

  .close {
    right: 15px;
  }

  .gallery-nav {
    height: 38px;
    width: 38px;
  }

  .gallery-nav-prev {
    left: 0.5rem;
  }

  .gallery-nav-next {
    right: 0.5rem;
  }

  .thumbnail-row {
    gap: 0.35rem;
    grid-template-columns: 32px minmax(0, 1fr) 32px;
  }

  .thumbnail-scroll {
    height: 70px;
    width: 32px;
  }

  .thumbnail-button {
    flex-basis: 96px;
    height: 70px;
  }
}
</style>
