# 구시완 백엔드 개발자 포트폴리오

11년 차 Java·Spring 백엔드 개발자 구시완의 경력과 프로젝트 경험을 소개하는 개인 포트폴리오입니다. HR·ERP 도메인의 시스템 구축과 고도화, API 및 아키텍처 설계, 배포와 운영 경험을 정리했습니다.

**Live:** [https://jjjhhh999.github.io/](https://jjjhhh999.github.io/)

## 주요 콘텐츠

- 경력과 자격증 타임라인
- 백엔드, 프론트엔드, 데이터베이스 및 CI/CD 기술 역량
- 프로젝트별 담당 기술과 구축 화면
- 수상·자격 및 교육 이력
- EmailJS 기반 연락 폼

## 기술 스택

- Vue 2, JavaScript
- Bootstrap 4, AOS
- GitHub Pages
- EmailJS

## Architecture & AI Experience

### Application Architect (AA)

백엔드 개발 경험을 바탕으로 Application Architect 역할을 수행하며 시스템 구조와 기술 구성을 설계한 경험이 있습니다.

- 서비스와 모듈의 책임 및 연계 구조 설계
- 백엔드 API, 데이터베이스 및 배포 아키텍처 검토
- 인증·인가, 예외 처리, 로깅 등 공통 개발 기준 수립
- 기술 스택 검토와 구현 방향 제시
- 코드 리뷰를 통한 구조 일관성과 유지보수성 관리

### Dorothy — 기업용 AI 챗봇 플랫폼

관리자가 챗봇의 시나리오, Q&A, 동의어와 미응답 데이터를 관리하고 학습·테스트·배포할 수 있으며, 사용자의 자연어 질문과 의미적으로 가장 유사한 답변을 제공하는 기업용 챗봇 플랫폼입니다.

#### 시스템 구성

- **Admin:** 서비스, 시나리오, Q&A, 키워드, 학습, 사전 테스트 및 운영 배포 관리
- **Front:** 사용자 챗봇 UI와 Model API 연동
- **Model:** 문장 임베딩 생성, 벡터 검색 및 답변 제공 API
- **운영 구조:** Spring Boot 서비스와 FastAPI 모델 서버를 분리하고 MariaDB를 중심으로 데이터 연계
- **배포 환경:** Gradle, Docker, Docker Compose

#### 기존 AI 검색 구조

기존 Dorothy는 Sentence-Transformers와 EmbeddingGemma로 사용자 질문을 문장 벡터로 변환하고, FAISS 기반 의미 유사도 검색으로 등록된 Q&A에서 답변을 찾도록 구성되어 있습니다.

- 의도, Q&A, 동의어 및 미응답 데이터를 EmbeddingGemma 기반 문장 임베딩으로 변환
- 서비스별 FAISS `IndexFlatL2` 인덱스를 메모리에 구성
- 사용자 질문을 실시간으로 벡터화하여 유사 답변 검색
- 거리 임계값을 충족하지 못하는 질문을 미응답으로 처리

현재 구현의 핵심은 생성형 답변이나 LLM 파인튜닝이 아닌 **임베딩 기반 Dense Retrieval·Semantic Search**입니다.

#### 고도화 담당 영역

기존 임베딩·FAISS 검색 기능은 현행 플랫폼의 구현입니다. 담당 영역은 기존 구조를 분석하고 그룹웨어 문서와 업무 데이터를 연계하는 RAG 기능을 설계·개발하여 Dorothy 플랫폼을 고도화하는 것입니다.

#### Dorothy 기술 스택

`Java` `Spring Boot` `Spring Security` `MyBatis` `Thymeleaf` `MariaDB` `Python` `FastAPI` `Sentence-Transformers` `EmbeddingGemma` `FAISS` `PyTorch` `Pandas` `NumPy` `KoNLPy` `Docker` `Docker Compose`

## 로컬 실행

```bash
npm install
npm run serve
```

개발 서버가 시작되면 터미널에 표시되는 로컬 주소로 접속합니다.

## 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run serve` | 개발 서버 실행 |
| `npm run lint` | Vue 및 JavaScript 린트 검사 |
| `npm run build` | 운영 배포용 정적 파일 생성 |
| `npm run deploy` | `dist` 디렉터리를 GitHub Pages에 배포 |

## 프로젝트 구조

```text
.
├─ public/                 # HTML 템플릿과 정적 아이콘
├─ src/
│  ├─ assets/             # 프로필, 프로젝트, 수상 및 교육 이미지
│  ├─ components/         # 화면 섹션과 공통 UI 컴포넌트
│  ├─ mixins/             # 공통 접근성 동작
│  ├─ App.vue
│  └─ main.js
├─ info.js                # 경력, 기술, 프로젝트 콘텐츠
├─ config.js              # EmailJS 설정
└─ vue.config.js
```

포트폴리오의 주요 텍스트와 프로젝트 데이터는 [`info.js`](./info.js)에서 관리합니다. 화면 구조와 스타일은 [`src/components`](./src/components)에서 수정할 수 있습니다.

## 품질 기준

- 한국어 문서 언어와 검색·공유용 메타데이터 제공
- 하나의 `h1`과 섹션별 `h2`를 사용하는 시맨틱 문서 구조
- 상세 모달의 `dialog` 역할, 포커스 트랩, ESC 닫기 및 포커스 복귀 지원
- 데스크톱과 모바일 반응형 레이아웃 지원

변경 후에는 다음 명령으로 기본 품질을 확인합니다.

```bash
npm run lint
npm run build
```

## 배포

이 프로젝트는 GitHub Pages에서 정적 사이트로 제공됩니다.

```bash
npm run deploy
```

## 라이선스와 출처

이 저장소는 [hrishikeshpaul/portfolio-template](https://github.com/hrishikeshpaul/portfolio-template)을 기반으로 개인 콘텐츠와 기능을 수정한 프로젝트입니다. 원본 템플릿과 이 저장소의 코드 라이선스는 [`LICENSE`](./LICENSE)를 따릅니다.

프로젝트 화면과 회사·서비스 관련 이미지의 권리는 각 소유자에게 있습니다.
