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

관리자가 챗봇의 시나리오, Q&A, 동의어와 미응답 데이터를 관리하고 학습·테스트·배포할 수 있으며, 사용자의 자연어 질문과 의미적으로 가장 유사한 답변을 제공하는 기업용 챗봇 플랫폼입니다.

#### 시스템 구성

- **Admin:** 직접 파일·그룹웨어 자료 수집, PDF·DOCX·OCR 처리, Chunk 생성, 검토·승인, Pretest 및 운영 반영
- **Model:** 벡터·BM25 검색, RRF 통합, Reranker 재정렬, 관련도 판정, Claude Sonnet 기반 답변·출처 생성
- **Front:** 질문 전달, 답변 표시, 출처 정보와 원문 링크 및 오류·대체 답변 상태 표시
- **운영 구조:** Admin, Model, Front의 책임을 분리하고 MariaDB에 Chunk·Embedding과 출처 메타데이터 저장
- **배포 환경:** Gradle, Docker, Docker Compose

#### 문서 지식화와 배포 흐름

1. 직접 파일, 그룹웨어 게시물과 첨부파일 수집
2. PDF·DOCX 텍스트 추출 및 이미지 문서 OCR 처리
3. 제목·게시판·작성일·원문 위치를 포함한 Chunk 생성
4. 관리자 검토와 승인
5. Pretest 검색 품질 확인 후 Release 운영 반영
6. MariaDB에 Chunk·Embedding과 출처 정보 저장

Admin은 지식 수집·검수·배포를 담당하며 검색과 Claude 호출은 수행하지 않습니다.

#### 하이브리드 검색과 답변 생성

1. 사용자 질문으로 벡터 검색 Top 20과 BM25 검색 Top 20 조회
2. RRF로 의미 검색과 키워드 검색 결과 통합
3. Reranker를 이용한 질문·Chunk 관련도 재정렬
4. 관련도가 낮으면 알 수 없음으로 종료
5. 관련도가 높으면 상위 Chunk 3~5개 선별
6. Claude Sonnet으로 답변·근거·출처 생성
7. Front에서 출처 제목·게시판·작성일·원문 링크 표시

Model은 검색과 생성형 AI 호출을 전담합니다. 의미 검색과 키워드 검색을 결합하고 관련도 기준을 충족하지 못한 질문에는 답변을 생성하지 않아 검색 정확성과 답변 신뢰성을 관리합니다.

#### Dorothy 기술 스택

`Java` `Spring Boot` `Spring Security` `MyBatis` `Thymeleaf` `MariaDB` `Python` `FastAPI` `Sentence-Transformers` `EmbeddingGemma` `FAISS` `BM25` `RRF` `Reranker` `Claude Sonnet` `OCR` `Docker` `Docker Compose`

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
