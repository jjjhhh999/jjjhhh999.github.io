<template>
  <div>
    <div class="mx-3 mt-3 mb-5">
      <div class="row">
        <div class="col-xl-12 col-bg-12 col-md-12 col-sm-12">
          <h3
            class="title1"
            data-aos="fade"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="1000"
          >
            {{ data.title }}
          </h3>
          <ul
            class="timeline m-0 pt-1"
            v-for="(e, idx) in data.data"
            :key="e.name"
            :style="{ 'transition-delay': idx / 4.2 + 's' }"
            data-aos="fade-up"
            data-offset="10"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-duration="500"
          >
            <li class="m-0 pb-2">
              <div :class="{ 'timeline-entry-dark': nightMode }">
                <!--
                <div class="px-2 title2">{{ e.name }}, {{ e.place }}</div>
                -->
                <div
                  class="px-2 title2"
                  :class="{ 'company-title': data.title === '경력' }"
                >
                  {{ e.name }}
                </div>
                <div v-if="e.degree || e.position || e.gpa" class="px-2 title3">
                  {{ e.degree || e.position }}
                  {{ e.gpa ? "(" + e.gpa + ")" : "" }}
                </div>
                <div class="px-2 date">{{ e.date }}</div>
                <div v-if="e.description" class="px-2 pb-2 pt-2 description">
                  {{ e.description }}
                </div>
                <div v-if="e.sections?.length" class="px-2 experience-sections">
                  <section v-for="section in e.sections" :key="section.title">
                    <h4>{{ section.title }}</h4>
                    <ul class="experience-points">
                      <li v-for="item in section.items" :key="item">{{ item }}</li>
                    </ul>
                  </section>
                </div>
                <ul v-if="e.highlights?.length" class="mx-2 experience-points">
                  <li v-for="item in e.highlights" :key="item">{{ item }}</li>
                </ul>
                <span
                  class="mx-2 badge p-2 mb-2"
                  v-for="s in e.skills"
                  :key="s"
                  :class="{ 'bg-dark2': nightMode }"
                  >{{ s }}</span
                >
                <p class="m-2"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { TimelineGroup } from "../../types/content";

export default defineComponent({
  name: "Timeline",
  props: {
    data: {
      type: Object as PropType<TimelineGroup>,
      required: true,
    },
    nightMode: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped>
.title1 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.title2 {
  color: #26343c;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.35;
  margin-bottom: 0.15rem;
}

.company-title {
  font-size: 21px;
  font-weight: 700;
}

.title3 {
  color: #46545d;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
}

.badge {
  background-color: rgb(211, 227, 233);
  transition: all 0.5s;
  font-weight: 500;
}

.date {
  color: #75818a;
  font-size: 14px;
  font-weight: 500;
  margin-top: 0.1rem;
}

.timeline-entry-dark .title2 {
  color: #f1f3f5;
}

.timeline-entry-dark .title3,
.timeline-entry-dark .experience-sections h4 {
  color: #d9dee2;
}

.timeline-entry-dark .date {
  color: #aeb8bf;
}

.description {
  line-height: 1.65;
  text-align: left;
  white-space: pre-line;
}

.experience-sections {
  padding-top: 0.75rem;
}

.experience-sections section + section {
  margin-top: 1rem;
}

.experience-sections h4 {
  color: #3f4c54;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.experience-points {
  line-height: 1.6;
  margin-bottom: 0.75rem;
  padding-left: 1.25rem;
}

.experience-points li {
  margin-bottom: 0.25rem;
}

ul.timeline {
  list-style-type: none;
  position: relative;
}
ul.timeline:before {
  content: " ";
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 93%;
  margin-top: 20px;
  z-index: 400;
}
ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}
ul.timeline > li:before {
  content: " ";
  background: rgb(212, 149, 97);
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgb(236, 159, 117);
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}

.bg-dark2 {
  background-color: #3c4148 !important;
}
</style>
