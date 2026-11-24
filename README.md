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

- Vue 3, TypeScript
- Vite 8, Bootstrap 5, AOS
- ESLint Flat Config, vue-tsc
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

기존 챗봇에 사내 문서를 검색해 답변하는 기능을 추가하고 있습니다. 관리자가 등록한 파일과 그룹웨어 게시물을 검색할 수 있는 형태로 만들고, 검토가 끝난 자료만 테스트와 운영에 반영합니다. 사용자가 질문하면 벡터 검색과 키워드 검색으로 관련 문서를 찾고, 해당 내용을 바탕으로 LLM이 답변합니다.

#### 시스템 구성

- **관리자 화면:** 파일·그룹웨어 자료 수집, PDF·DOCX·OCR 처리, 자료 검토·승인, 사전 테스트와 운영 반영
- **검색·답변 서버:** FAISS 벡터 검색과 BM25 검색, RRF 결과 통합, Reranker 재정렬, 관련도 확인과 LLM 답변 생성
- **사용자 챗봇 화면:** JWT 인증, 서비스 선택, 대화 이력 관리, 출처 목록, PDF 페이지와 PDF·Word 원문 미리보기
- **운영 기능:** 암호화된 LLM API Key 관리, 요청 로그 마스킹, AI 호출 상태와 오류 확인
- **배포 환경:** Gradle, Docker, Docker Compose

#### 질문이 답변으로 만들어지는 과정

1. 파일이나 그룹웨어 게시물과 첨부파일 등록
2. PDF·DOCX 내용 추출과 이미지 문서 OCR 처리
3. 문서를 검색 단위로 나누고 임베딩 데이터 생성
4. 관리자가 내용을 확인한 뒤 테스트하고 운영 서비스에 반영
5. 사용자 질문과 관련된 문서를 벡터 검색과 키워드 검색으로 조회
6. 검색 결과를 합치고 관련도가 높은 순서로 다시 정렬
7. 관련 문서가 충분한 경우 LLM 답변과 출처 생성
8. 챗봇 화면에서 참고 문서, 해당 페이지와 원문 표시

검색 결과가 부족할 때는 억지로 답변을 만들지 않도록 했습니다. 사용자가 답변 내용을 직접 확인할 수 있도록 참고 문서와 원문 보기 기능도 함께 제공합니다.

#### Dorothy 기술 스택

`Java 17` `Spring Boot 3.5` `Spring Security` `Spring Data JPA` `QueryDSL` `MariaDB` `Python 3.11` `FastAPI` `React 19` `TypeScript` `Vite` `JWT/JWKS` `EmbeddingGemma` `FAISS` `BM25` `RRF` `BGE Reranker` `Claude` `OpenAI` `Gemini` `Ollama` `OCR` `Docker` `Docker Compose`

## 로컬 실행

`config.example.ts`를 `config.ts`로 복사한 뒤 EmailJS 설정값을 입력합니다.

```bash
cp config.example.ts config.ts
```

```bash
npm install
npm run dev
```

개발 서버가 시작되면 터미널에 표시되는 로컬 주소로 접속합니다.

> Node.js 22.18 이상이 필요하며 Node.js 24 LTS 사용을 권장합니다.

## 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | Vite 개발 서버 실행 |
| `npm run type-check` | Vue 및 TypeScript 타입 검사 |
| `npm run lint` | Vue, TypeScript 린트 검사 |
| `npm run build` | 운영 배포용 정적 파일 생성 |
| `npm run preview` | 프로덕션 빌드 로컬 미리보기 |
| `npm run deploy` | `dist` 디렉터리를 GitHub Pages에 배포 |

## 프로젝트 구조

```text
.
├─ public/                 # 정적 아이콘과 GitHub Pages 보조 파일
├─ src/
│  ├─ assets/             # 프로필, 프로젝트, 수상 및 교육 이미지
│  ├─ components/         # 화면 섹션과 공통 UI 컴포넌트
│  ├─ mixins/             # 공통 접근성 동작
│  ├─ App.vue
│  └─ main.ts
├─ index.html              # Vite HTML 진입점
├─ info.js                # 경력, 기술, 프로젝트 콘텐츠
├─ config.ts              # EmailJS 설정
├─ tsconfig.json          # TypeScript 설정
└─ vite.config.ts         # Vite 설정
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
