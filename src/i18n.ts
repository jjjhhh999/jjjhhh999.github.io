import { createI18n } from "vue-i18n";

export const messages = {
  ko: {
    meta: {
      title: "구시완 | 백엔드 개발자 포트폴리오",
    },
    nav: {
      about: "소개",
      skills: "핵심 역량",
      portfolio: "포트폴리오",
      contact: "문의",
      menu: "메뉴 열기",
      lightMode: "라이트 모드",
      darkMode: "다크 모드",
      switchToEnglish: "영어로 보기",
    },
    home: {
      role: "Back-end Developer · Application Architect",
      profileAlt: "구시완 프로필 사진",
    },
    about: {
      title: "경력 및 자격",
      experience: "경력",
      certification: "자격증",
    },
    skills: {
      title: "핵심 역량",
    },
    portfolio: {
      title: "포트폴리오",
      tabsLabel: "포트폴리오 분류",
      projects: "프로젝트",
      awards: "수상·자격",
      education: "교육",
      showMore: "더 보기",
      collapse: "접기",
      coverAlt: "{name} 대표 이미지",
    },
    common: {
      viewDetails: "상세 보기",
      viewWebsite: "웹사이트 보기",
      close: "닫기",
    },
    modal: {
      projectClose: "프로젝트 상세 닫기",
      awardClose: "수상 및 자격 상세 닫기",
      educationClose: "교육 상세 닫기",
      overview: "프로젝트 개요",
      screens: "프로젝트 화면",
      techStack: "기술 스택",
    },
    gallery: {
      screen: "프로젝트 화면 {number}",
      enlarge: "{name} 크게 보기",
      previous: "이전 프로젝트 화면",
      next: "다음 프로젝트 화면",
      previousThumbnails: "이전 썸네일 보기",
      nextThumbnails: "다음 썸네일 보기",
      list: "프로젝트 화면 목록",
      select: "{name} 선택",
      close: "확대 이미지 닫기",
    },
    contact: {
      title: "문의",
      name: "이름",
      email: "이메일",
      message: "문의 내용",
      send: "메일 보내기",
      sending: "전송 중...",
      required: "이름, 이메일, 문의 내용을 모두 입력해 주세요.",
      success: "메일이 정상적으로 전송되었습니다.",
      rateLimit: "전송 요청이 많습니다. 잠시 후 다시 시도해 주세요.",
      connection: "메일 서비스 연결을 확인해 주세요. (오류 {status})",
      failure: "메일 전송에 실패했습니다.{code}",
      errorCode: " (오류 {status})",
    },
  },
  en: {
    meta: {
      title: "Gu Siwan | Back-end Developer Portfolio",
    },
    nav: {
      about: "About",
      skills: "Core Skills",
      portfolio: "Portfolio",
      contact: "Contact",
      menu: "Open navigation menu",
      lightMode: "Light mode",
      darkMode: "Dark mode",
      switchToEnglish: "View in Korean",
    },
    home: {
      role: "Back-end Developer · Application Architect",
      profileAlt: "Portrait of Gu Siwan",
    },
    about: {
      title: "Experience & Certifications",
      experience: "Experience",
      certification: "Certifications",
    },
    skills: {
      title: "Core Competencies",
    },
    portfolio: {
      title: "Portfolio",
      tabsLabel: "Portfolio categories",
      projects: "Projects",
      awards: "Awards & Credentials",
      education: "Education",
      showMore: "Show more",
      collapse: "Show less",
      coverAlt: "Cover image for {name}",
    },
    common: {
      viewDetails: "View details",
      viewWebsite: "Visit website",
      close: "Close",
    },
    modal: {
      projectClose: "Close project details",
      awardClose: "Close award and credential details",
      educationClose: "Close education details",
      overview: "Project Overview",
      screens: "Project Screens",
      techStack: "Tech Stack",
    },
    gallery: {
      screen: "Project screen {number}",
      enlarge: "Enlarge {name}",
      previous: "Previous project screen",
      next: "Next project screen",
      previousThumbnails: "Previous thumbnails",
      nextThumbnails: "Next thumbnails",
      list: "Project screen thumbnails",
      select: "Select {name}",
      close: "Close enlarged image",
    },
    contact: {
      title: "Contact",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send email",
      sending: "Sending...",
      required: "Please enter your name, email, and message.",
      success: "Your email was sent successfully.",
      rateLimit: "Too many requests. Please try again shortly.",
      connection: "Please check the email service connection. (Error {status})",
      failure: "Failed to send the email.{code}",
      errorCode: " (Error {status})",
    },
  },
} as const;

const savedLocale = window.localStorage.getItem("locale");
const initialLocale = savedLocale === "en" ? "en" : "ko";

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: "ko",
  messages,
});

document.documentElement.lang = initialLocale;
document.title = messages[initialLocale].meta.title;
