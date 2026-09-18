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
          >문의</h2
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <br />
      <form class="text-center" @submit.prevent="sendEmail">
        <div
          class="mb-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <input
            type="text"
            name="user_name"
            v-model="name"
            placeholder="이름"
            autocomplete="name"
            required
            class="pinput"
            :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }"
            style="transition-delay: 0.2s"
          />
        </div>

        <div
          class="my-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <input
            type="email"
            name="user_email"
            v-model="email"
            placeholder="이메일"
            autocomplete="email"
            required
            class="pinput"
            :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }"
            style="transition-delay: 0.4s"
          />
        </div>

        <div
          class="my-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <textarea
            name="message"
            v-model="text"
            placeholder="문의 내용"
            required
            class="pinput"
            rows="4"
            :class="{
              pgray: !nightMode,
              'pgray-dark': nightMode,
              'text-light': nightMode,
            }"
            style="transition-delay: 0.6s"
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="isSending"
          class="mt-1 btn mb-3"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-offset="50"
        >
          {{ isSending ? "전송 중..." : "메일 보내기" }}
        </button>
      </form>

      <Snackbar
        :showSnackbar="showSnackbar"
        @close="closeSnackbar"
        :snackbarMessage="snackbarMessage"
        :snackbarColor="snackbarColor"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs, { type EmailJSResponseStatus } from "@emailjs/browser";

import config from "../../config";
import Snackbar from "./helpers/Snackbar.vue";

defineProps<{
  nightMode: boolean;
}>();

const email = ref("");
const name = ref("");
const text = ref("");
const showSnackbar = ref(false);
const snackbarMessage = ref("");
const snackbarColor = ref("");
const isSending = ref(false);

function showMessage(message: string, color: string) {
  showSnackbar.value = true;
  snackbarMessage.value = message;
  snackbarColor.value = color;
}

function closeSnackbar(visible: boolean) {
  if (!visible) {
    window.setTimeout(() => {
      showSnackbar.value = false;
    }, 1000);
  }
}

async function sendEmail() {
  if (isSending.value) {
    return;
  }

  if (!email.value || !name.value || !text.value) {
    showMessage("이름, 이메일, 문의 내용을 모두 입력해 주세요.", "rgb(212, 149, 97)");
    return;
  }

  const templateParams = {
    from_name: name.value,
    user_name: name.value,
    user_email: email.value,
    reply_to: email.value,
    message: text.value,
    message_html: text.value,
    to_name: "Gu Siwan",
  };

  isSending.value = true;

  try {
    await emailjs.send(
      config.emailjs.serviceID,
      config.emailjs.templateID,
      templateParams,
      { publicKey: config.emailjs.publicKey },
    );

    showMessage("메일이 정상적으로 전송되었습니다.", "#1aa260");
    email.value = "";
    text.value = "";
    name.value = "";
  } catch (error) {
    const emailError = error as EmailJSResponseStatus;
    console.error("EmailJS send failed", {
      status: emailError.status,
      text: emailError.text,
    });

    if (emailError.status === 429) {
      showMessage("전송 요청이 많습니다. 잠시 후 다시 시도해 주세요.", "rgb(212, 149, 97)");
    } else if (emailError.status === 401 || emailError.status === 403) {
      showMessage(`메일 서비스 연결을 확인해 주세요. (오류 ${emailError.status})`, "rgb(212, 149, 97)");
    } else {
      const errorCode = emailError.status ? ` (오류 ${emailError.status})` : "";
      showMessage(`메일 전송에 실패했습니다.${errorCode}`, "rgb(212, 149, 97)");
    }
  } finally {
    isSending.value = false;
  }
}
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 0;
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

.pinput {
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 10px;
  width: 50%;
  transition: all 1s;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
  width: 50%;
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

.pgray-dark {
  background-color: #3c4148 !important;
}

@media screen and (max-width: 1000px) {
  .pinput {
    width: 90%;
  }
  .pinput {
    width: 90%;
  }

  .btn {
    width: 90%;
  }
}
</style>
