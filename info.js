let info = {
  name: "Gu Siwan",
  logo_name: "Siwan",
  //flat_picture: require("./src/assets/potrait.jpg"),
  flat_picture: require("./src/assets/koo.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
      "<p>기업용 솔루션을 설계·제품화하고 운영까지 책임져 온 11년 차 개발자입니다. HR·ERP·전자전표 도메인에서 백엔드 API와 데이터 모델, 시스템 아키텍처 및 CI/CD를 구축해 왔습니다.</p>" +
      "<p>팀장과 개발 PL, Application Architect(AA) 역할을 수행하며 기술 의사결정, 개발 표준, 협업 프로세스와 배포·운영 체계를 주도했습니다.</p>" +
      "<p>최근에는 Dorothy 기업용 AI 챗봇 플랫폼의 고도화를 준비하며, 기존 검색 구조를 바탕으로 그룹웨어 문서를 연계하는 RAG 기능을 설계·개발할 예정입니다. 안정성과 확장성, 팀 생산성을 고려해 기술을 비즈니스 가치로 연결하는 개발을 지향합니다.</p>",
    email : "contact : 하단의 Contact Me 항목을 통해 이메일 전송 기능을 활용해 주세요.\n",
  links: {
    //linkedin: "https://www.linkedin.com/in/hrishikeshpaul/",
    github: "https://github.com/jjjhhh999",
    //angellist: "https://angel.co/u/hrishikesh-paul",
    //resume: "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
  },
  certification: [
    {
      name: "AWS Certified Solutions Architect",
      date: "Jan, 2025"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      date: "Sep, 2024"
    },
    {
      name: "정보처리기사",
      date: "Nov, 2013"
    },
    {
      name: "SQLD",
      date: "Dec, 2019"
    }
  ],
  experience: [
      {
          name: "[GS] 지에스 비즈플",
          //place: "서울 마포구 마포대로 45 일진빌딩 14층",
          date: "Jun, 2025 - Present",
          position: "HR사업팀 · Application Architect / Back-end Developer",
          description: "기업용 HR 솔루션 개발과 Application Architect(AA) 역할을 수행하며, EmbeddingGemma·FAISS 기반 검색 구조를 분석하고 AI 챗봇의 그룹웨어 연계 RAG 고도화를 추진하고 있습니다.",
          skills: ["Application Architecture (AA)", "HR Solution", "Java 17/21", "Spring Boot", "AI Chatbot Enhancement", "RAG", "EmbeddingGemma", "FAISS", "Docker", "CI/CD"]
      },
    {
      name: "[일진그룹] 일진C&S",
      //place: "서울 마포구 마포대로 45 일진빌딩 14층",
      date: "Jan, 2020 - Present",
      position: "R&D팀, Back-end Developer",
      description: "R&D팀 연구개발전담부서에서 그룹 내 최연소 팀장으로 발탁되어, 신규 구독형 서비스의 제품화를 목표로 한 핵심 프로젝트를 주도적으로 이끌었습니다. ",
      skills: ["Java21", "Spring-boot", "JPA", "AWS", "Docker", "JWT", "JUnit 5", "Vue", "Git", "GitHub-Action", "GitLab-Runner", "MariaDB", "Docker-Hub", "CI/CD", "Nginx", "REST-API"]
    },
    {
      name: "Inbus",
      date: "Jun, 2015 - Jan, 2020",
      position: "솔루션 1팀, Full Stack Developer",
      description: "프로젝트를 수행하며 주로 인사, 회계, 예산 등 전반적인 Web기반 ERP시스템을 개발하였습니다. ",
        /*"인사, 회계, 예산 등 ERP시스템 구축하였으며 개발 PL로 프로젝트에 참여하여 개발 및 ERD설계, 업무협의 등 전반적인 SI프로젝트 경험을 하였습니다.",*/
      skills: ["Java", "Spring-Framework", "Javascript", "RDMS(Oracle, Mssql)", "DB Modeling", "Jsp", "ERwin"]
    },
    {
      name: "중앙정보기술인재개발원",
      //place: "서울시 마포구 신촌로 176",
      date: "Dec, 2014 - May, 2015",
      description: "멀티디바이스 하이브리드 웹 & 앱 게임전문과정",
      skills: ["Java", "Spring-Framework", "Javascript", "Database", "Jsp"]
    }
  ],
  skills: [
    {
      title: "architecture & AI",
      info: ["Application Architecture (AA)", "System Design", "Domain Design", "API Design", "Integration Architecture", "RAG Architecture", "LLM Application", "Groupware Integration", "LangChain", "EmbeddingGemma", "FAISS", "AI Platform Enhancement"],
      icon: "fas fa-project-diagram"
    },
    {
      title: "back-end engineering",
      info: ["Java 17/21", "Spring Boot", "Spring Security", "JPA", "QueryDSL", "MyBatis", "JWT", "REST API", "External API Integration"],
      icon: "fa fa-code"
    },
    {
      title: "data & performance",
      info: ["MariaDB", "Oracle", "SQL Server", "MySQL", "Data Modeling", "ERD", "SQL Tuning", "Index", "Execution Plan", "Transaction"],
      icon: "fa fa-database"
    },
    {
      title: "cloud & delivery",
      info: ["AWS", "Azure", "Docker", "Docker Compose", "GitHub Actions", "GitLab Runner", "Jenkins", "Nginx", "CI/CD", "Linux"],
      icon: "fas fa-cloud"
    },
    {
      title: "quality & reliability",
      info: ["JUnit 5", "Mockito", "Testcontainers", "ArchUnit", "JMeter", "Logging", "Monitoring", "Operations", "Incident Response"],
      icon: "fas fa-vial"
    },
    {
      title: "leadership & domain",
      info: ["Tech Lead", "Application Architect", "Development PL", "Architecture Decision", "Code Review", "HR", "ERP", "Productization"],
      icon: "fas fa-users"
    },
    {
      title: "front-end",
      info: ["Vue.js", "JavaScript", "Thymeleaf", "JSP", "jQuery", "AG Grid", "RealGrid"],
      icon: "fas fa-laptop-code"
    }
  ],
  portfolio: [
      {
          name: "Dorothy — 기업용 AI 챗봇 플랫폼",
          pictures: [
              {img: require("./src/assets/portfolio/dorothy/cover.svg")}
          ],
          technologies: ["Java", "Spring Boot", "Spring Security", "MyBatis", "MariaDB", "Python", "FastAPI", "Sentence-Transformers", "EmbeddingGemma", "FAISS", "PyTorch", "KoNLPy", "Docker", "Docker Compose"],
          category: "AI Chatbot Platform · Enhancement",
          date: "진행 중",
          github: "",
          visit: "",
          description: "관리자가 챗봇 시나리오, Q&A, 동의어 및 미응답 데이터를 관리하고 학습·테스트·배포할 수 있는 기업용 AI 챗봇 플랫폼입니다.<br><br>" +
              "<strong>현행 구조</strong><br>기존 Dorothy는 문장 임베딩과 FAISS 기반 의미 검색으로 등록된 Q&A에서 유사 답변을 제공하며, Spring Boot 서비스와 FastAPI 모델 서버가 분리된 구조입니다.<br><br>" +
              "<strong>고도화 담당</strong><br>기존 검색 구조를 분석하고 그룹웨어 문서와 업무 데이터를 연계하는 RAG 기능을 설계·개발하여 플랫폼을 고도화할 예정입니다."
      },
      {
          name: "IM금융지주(대구은행) 인사시스템 구축(AA)",
          pictures: [
              {img: require("./src/assets/portfolio/imbank/im-financial-group-ci-official.png")}
          ],
          technologies: ["Java 21", "Spring Boot 3.4", "Spring Security", "JWT", "Spring Data JPA", "Hibernate", "QueryDSL", "Thymeleaf", "WebtoB", "JEUS", "GitLab", "GitHub", "GitHub Actions", "Jenkins", "Docker Compose", "Docker Hub"],
          category: "Application Architecture · HR System",
          date: "2026. 06 ~",
          github: "",
          visit: "",
          description: "금융권 인사시스템의 Application Architect(AA)로 참여하여 시스템 설계부터 개발·운영 환경 구성, 애플리케이션 배포 체계 구축까지 담당하고 있습니다.<br><br>" +
              "<strong>애플리케이션 아키텍처</strong><br>Java 21과 Spring Boot 3.4를 기반으로 애플리케이션 구조를 설계하고, Spring Security·JWT 인증과 Spring Data JPA(Hibernate)·QueryDSL 기반의 데이터 접근 환경을 구성했습니다.<br><br>" +
              "<strong>미들웨어 및 운영환경</strong><br>WebtoB와 JEUS를 연계하여 개발·운영 서버 환경을 구성하고 Spring Boot 애플리케이션의 배포 환경을 구축했습니다. 운영 서버와 대기 서버를 Active-Standby 구조로 구성하고 이중화 환경의 배포를 지원했습니다.<br><br>" +
              "<strong>형상관리 및 배포 자동화</strong><br>GitHub 기반의 형상관리·협업 프로세스를 운영하고, GitHub Actions와 Jenkins, Docker Compose 및 Docker Hub를 활용하여 환경 설정과 배포 과정을 자동화했습니다."
      },
      {
          name: "현대하이라이프손해사정 인사시스템 솔루션 구축",
          pictures: [
              {img: require("./src/assets/portfolio/hilife/hilife-ci.png")}
          ],
          technologies: ["Java 17", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "Hibernate", "QueryDSL", "Thymeleaf", "GitLab", "GitHub", "GitHub Actions", "Jenkins", "Docker Compose", "Docker Hub", "Microsoft Azure"],
          category: "HR System · Web Application",
          date: "2025. 06 ~",
          github: "",
          visit: "",
          description: "기업의 인사 업무를 통합 관리하는 인사시스템 솔루션 구축 프로젝트입니다. 새로운 업무 환경에 빠르게 적응하고 개발 표준과 협업 체계를 정비하여 프로젝트 초기 안정화와 기능 개선에 기여했습니다.<br><br>" +
              "<strong>도메인 및 시스템 분석</strong><br>기존에 접하지 않았던 사내 솔루션 구조와 인사 업무 프로세스를 단기간에 분석·습득하고, 프로젝트 초기 시스템 안정화와 담당 기능 개선을 수행했습니다.<br><br>" +
              "<strong>개발 표준 및 협업 리딩</strong><br>이전 프로젝트 리딩 경험을 바탕으로 코드 컨벤션과 개발 가이드를 정비하고, 스크럼 기반의 일정 공유와 이슈 관리 등 협업 프로세스 운영을 주도했습니다.<br><br>" +
              "<strong>일정 및 품질 관리</strong><br>담당 기능의 개발 일정을 준수하고 주요 작업을 선제적으로 완료하여 후속 검증과 개선 시간을 확보함으로써 프로젝트 생산성 향상에 기여했습니다.<br><br>" +
              "<strong>기술 구성</strong><br>Java 17과 Spring Boot를 기반으로 Spring Security·JWT 인증, Spring Data JPA(Hibernate)·QueryDSL 데이터 접근 환경을 활용했습니다. GitHub Actions와 Jenkins, Docker Compose 및 Docker Hub를 연계하고 Microsoft Azure 환경에서 개발·배포 체계를 운영했습니다."
      },
    {
      name: "기업형 경비관리 전자전표 솔루션 제품화",
      pictures: [
        {img: require("./src/assets/portfolio/subscription/0.png")},
        {img: require("./src/assets/portfolio/subscription/1.png")},
        {img: require("./src/assets/portfolio/subscription/2.png")},
        {img: require("./src/assets/portfolio/subscription/3.png")},
        {img: require("./src/assets/portfolio/subscription/4.png")},
        {img: require("./src/assets/portfolio/subscription/5.png")},
        {img: require("./src/assets/portfolio/subscription/6.png")}
      ],
      technologies: ["Java 21", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "Hibernate", "QueryDSL", "DDD", "GitHub", "GitHub Actions", "Docker", "Docker Compose", "Docker Hub", "AWS EC2", "AWS RDS", "AWS S3", "NAVER CLOVA OCR", "Kakao Maps API"],
      category: "Productization · Expense Management",
      date: "2024. 03 ~ 2025. 05",
      github: "",
      visit: "",
      description: "기업의 증빙 관리, 전표 처리 및 경비 업무를 통합 지원하는 기업형 경비관리 전자전표 솔루션의 제품화 프로젝트입니다. 백엔드 3명, 프론트엔드 3명, 디자이너 1명으로 구성된 7인 팀에서 팀장을 맡았습니다.<br><br>" +
          "<strong>팀 리딩 및 기여도</strong><br>Jira, Confluence, Slack을 기반으로 업무와 일정을 관리하고 백엔드·프론트엔드·디자인 간 협업을 조율했습니다. 프로젝트 전체 기여도는 40%이며, 아래의 백엔드 아키텍처·인증·조회 기능·CI/CD·인프라·파일 저장소 영역은 설계부터 구현까지 직접 담당했습니다(각 기여도 100%).<br><br>" +
          "<strong>백엔드 아키텍처</strong><br>도메인 주도 설계(DDD)를 기반으로 백엔드 서비스와 데이터 모델 전반을 설계했습니다. Spring Boot와 Spring Security·JWT 기반 인증 체계를 구현하고, JPA(Hibernate) 연관관계 매핑과 QueryDSL 기반 동적 조회 기능을 개발했습니다.<br><br>" +
          "<strong>클라우드 인프라 및 배포 자동화</strong><br>GitHub Actions, Docker Compose 및 Docker Hub 기반 CI/CD 파이프라인을 구축했습니다. AWS와 온프레미스에 개발·운영·데모 환경을 구성하고 운영을 자동화했으며, AWS S3 저장소를 운영용과 데모용으로 분리해 환경 간 파일을 안전하게 관리했습니다.<br><br>" +
          "<strong>외부 서비스 연동</strong><br>NAVER CLOVA OCR을 활용한 증빙 인식, Kakao Maps API 기반 위치 정보 연동 및 환율 정보 크롤링 기능을 개발하여 경비 처리에 필요한 데이터 입력과 조회 과정을 개선했습니다.<br><br>" +
          "<strong>AWS 도입 문제 해결</strong><br>회사와 개인 모두 AWS 도입 경험이 부족하고 참고할 내부 사례도 제한적인 상황이었습니다. AWS 기술 학습과 자격증 취득을 병행하고 실제 데모 시스템을 직접 구축·운영하며, 클라우드 인프라 도입에 필요한 설계와 운영 역량을 확보했습니다."
    },
    {
      name: "일진전기 전자전표 시스템 구축",
      pictures: [
        {img: require("./src/assets/portfolio/elec/0.png")}
      ],
      technologies: ["Java", "Spring-boot", "JPA", "MariaDB", "Vue", "AgGrid", "Git", "CI/CD"],
      category: "Web App",
      date: "2023. 08 ~ 2024. 02",
      github:"",
      visit: "",
      description: "증빙관리, 전표처리 등 경비처리와 관련된 토탈 서비스를 제공하는 '기업형 경비관리' 솔루션"
    },
    {
      name: "대우루컴즈 - AS시스템 구축",
      pictures: [
        {img: require("./src/assets/portfolio/lucoms/0.png")}
      ],
      technologies: ["Java", "Spring-boot", "JPA", "Oracle", "Vue", "AgGrid", "Git", "CI/CD"],
      category: "Web App",
      date: "2023. 03 ~ 2023. 07",
      github:"",
      visit: "",
      description: "고객 요청 접수, 처리 현황 조회, 자동 알림 기능 등을 구현"
    },
    {
      name: "포스코MC머티리얼즈 - 전자전표시스템 구축",
      pictures: [
        {img: require("./src/assets/portfolio/pmctech/0.png")}
      ],
      technologies: ["Java", "Spring-boot", "JPA", "MariaDB", "Vue", "AgGrid", "Git", "CI/CD"],
      category: "Web App",
      date: "2022. 09 ~ 2023. 01",
      github:"",
      visit: "",
      description: "증빙관리, 전표처리 등 경비처리와 관련된 토탈 서비스를 제공하는 '기업형 경비관리' 솔루션"
    },
    {
      name: "일진전기 - 견적관리시스템 구축",
      pictures: [
        {img: require("./src/assets/portfolio/elec/0.png")},
        {img: require("./src/assets/portfolio/elec/1.png")},
        {img: require("./src/assets/portfolio/elec/2.png")},
        {img: require("./src/assets/portfolio/elec/3.png")},
        {img: require("./src/assets/portfolio/elec/4.png")},
        {img: require("./src/assets/portfolio/elec/5.png")},
        {img: require("./src/assets/portfolio/elec/6.png")},
      ],
      technologies: ["Java", "Spring-boot", "JPA", "Oracle", "Vue", "AgGrid", "Git", "CI/CD"],
      category: "Web App",
      date: "2022. 04 ~ 2022. 08",
      github:"",
      visit: "",
      description: "설계, 제조원가 산정, 물류 전자 입찰, 운송 관리 및 정산 등  '기업형 물류관리' 솔루션"
    },
    {
      name: "알피니언메디칼 - 전자전표시스템 구축",
      pictures: [
        {img: require("./src/assets/portfolio/alpinion/0.png")},
        {img: require("./src/assets/portfolio/alpinion/1.png")},
        {img: require("./src/assets/portfolio/alpinion/2.png")},
        {img: require("./src/assets/portfolio/alpinion/3.png")},
        {img: require("./src/assets/portfolio/alpinion/4.png")},
        {img: require("./src/assets/portfolio/alpinion/5.png")},
        {img: require("./src/assets/portfolio/alpinion/6.png")},
        {img: require("./src/assets/portfolio/alpinion/7.png")},
        {img: require("./src/assets/portfolio/alpinion/8.png")},
        {img: require("./src/assets/portfolio/alpinion/9.png")}
      ],
      technologies: ["Java", "Spring-boot", "JPA", "MariaDB", "Vue", "AgGrid", "Git", "CI/CD"],
      category: "Web App",
      date: "2021. 08 ~ 2022. 03",
      github: "",
      visit: "",
      description: "증빙관리, 전표처리 등 경비처리와 관련된 토탈 서비스를 제공하는 '기업형 경비관리' 솔루션"
    },
    {
      name: "일진제강 - 통합생산관리 시스템 구축",
      pictures: [
        {img: require("./src/assets/portfolio/steel/0.png")},
        {img: require("./src/assets/portfolio/steel/1.png")},
        {img: require("./src/assets/portfolio/steel/2.png")},
        {img: require("./src/assets/portfolio/steel/3.png")},
        {img: require("./src/assets/portfolio/steel/4.png")}
      ],
      technologies: ["Java", "Spring-Framework", "Javascript", "Oracle-SQL"],
      category: "Web App",
      github: "",
      date: "2021. 06 ~ 2021. 08",
      visit: "",
      description: "영업수주에서 생산계획, 생산지시, 생산실적, 분석에 이르기까지 현황을 조회 하고 처리 할 수 있는 시스템, 정보 집중과 관리 체계 수립 "
    },
    {
      name: "HK글로벌 - 경영자정보시스템(EIS) 구축",
      pictures: [
        {img: require("./src/assets/portfolio/eis/0.png")},
        {img: require("./src/assets/portfolio/eis/1.png")},
        {img: require("./src/assets/portfolio/eis/2.png")},
        {img: require("./src/assets/portfolio/eis/3.png")},
        {img: require("./src/assets/portfolio/eis/4.png")},
        {img: require("./src/assets/portfolio/eis/5.png")}
      ],
      technologies: ["Java", "Spring-boot", "JPA", "MariaDB", "Vue", "AgGrid", "Git", "CI/CD"],
      category: "Web App",
      date: "2021. 01 ~ 2021. 05",
      github: "",
      visit: "",
      description: "클라우드 기반 실시간 경영자정보시스템(EIS), billboard chart 라이브러리 적용"
    },
    {
      name: "HK글로벌 - e-Po시스템 구축",
      pictures: [
        {img: require("./src/assets/portfolio/epo/0.png")},
        {img: require("./src/assets/portfolio/epo/1.png")},
        {img: require("./src/assets/portfolio/epo/2.png")},
        {img: require("./src/assets/portfolio/epo/3.png")},
        {img: require("./src/assets/portfolio/epo/4.png")},
        {img: require("./src/assets/portfolio/epo/5.png")}
      ],
      technologies: ["Java", "Spring-boot", "JPA", "MariaDB", "Vue", "AgGrid", "Git", "CI/CD"],
      category: "Website",
      date: "2020. 11 ~ 2021. 02",
      github: "",
      visit: "",
      description: "클라우드 기반 실시간 e-Po시스템 구축"
    },
    {
      name: "일진제강 - 물류비정산관리 개발",
      pictures: [
        {img: require("./src/assets/portfolio/bms/0.png")},
        {img: require("./src/assets/portfolio/bms/1.png")},
        {img: require("./src/assets/portfolio/bms/2.png")},
        {img: require("./src/assets/portfolio/bms/3.png")},
        {img: require("./src/assets/portfolio/bms/4.png")}
      ],
      technologies: ["Java", "Spring-boot", "JPA", "MariaDB", "Vue", "AgGrid", "Git", "CI/CD"],
      category: "Web App",
      date: "2020. 07 ~ 2020. 11",
      github: "",
      visit: "",
      description: "웹베이스로 물류비 정산을 위한 시스템을 구현하여 내부사용자/물류실행사와 정보를 공유하며, ERP 와 정산" +
                   "결과를 인터페이스 할 수 있는 시스템을 구축 함"
    },
    {
      name: "해양환경공단 - E방제증서 시스템 고도화 및 정보처리 의뢰서 등 구축",
      pictures: [
        {img: require("./src/assets/portfolio/koem/0.png")},
        {img: require("./src/assets/portfolio/koem/1.png")}
      ],
      technologies: ["Java", "Spring-Framework", "Javascript", "Oracle-SQL", "Jsp"],
      category: "Website",
      date: "2020. 02 ~ 2020. 06",
      github: "",
      visit: "",
      description: "대국민 서비스 시스템 고도화 및 정보처리 의뢰서 구축"
    },
    {
      name: "연말정산 버전 업데이트",
      pictures: [
        {img: require("./src/assets/portfolio/thek/0.png")}
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis"],
      category: "Alogrithm",
      date: "2019. 10 ~ 2020. 01",
      github: "",
      visit: "",
      description: "시스템 버전별 연말정산 세법 업데이트"
    },
    {
      name: "롯데글로벌로지스 - 통합인사시스템 구축",
      pictures: [
        {img: require("./src/assets/portfolio/lotteglogis/0.png")},
        {img: require("./src/assets/portfolio/lotteglogis/1.png")},
        {img: require("./src/assets/portfolio/lotteglogis/2.png")},
        {img: require("./src/assets/portfolio/lotteglogis/3.png")},
        {img: require("./src/assets/portfolio/lotteglogis/4.png")},
        {img: require("./src/assets/portfolio/lotteglogis/5.png")},
        {img: require("./src/assets/portfolio/lotteglogis/6.png")},
        {img: require("./src/assets/portfolio/lotteglogis/7.png")},
        {img: require("./src/assets/portfolio/lotteglogis/8.png")},
        {img: require("./src/assets/portfolio/lotteglogis/9.png")},
        {img: require("./src/assets/portfolio/lotteglogis/10.png")},
        {img: require("./src/assets/portfolio/lotteglogis/11.png")}
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis", "Er-Win"],
      category: "Web App",
      date: "2018. 10 ~ 2019. 08",
      github: "",
      visit: "",
      description: "개발 PL 경험, 인사관리, 채용관리, 교육관리 등 설계, 개발 담당"
    },
    {
      name: "우리신용정보 - 법인카드 연동시스템 구축",
      pictures: [
        {img: require("./src/assets/portfolio/woori/0.png")}
      ],
      technologies: ["Java", "Javascript", "Oracle-SQL", "Jsp"],
      category: "Web App",
      github: "",
      date: "2018. 06 ~ 2018. 10",
      visit: "",
      description: "BC카드 데이터 연계"
    },
    {
      name: "국제교류재단 - 인사시스템(급여, 채용) 고도화",
      pictures: [
        {img: require("./src/assets/portfolio/kf/0.png")},
        {img: require("./src/assets/portfolio/kf/1.png")},
        {img: require("./src/assets/portfolio/kf/2.png")}
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis", "Er-Win"],
      category: "Web App",
      github: "",
      date: "2018. 03 - 2018. 05",
      visit: "https://www.kf.or.kr/recruit/",
      description: "블라인드 채용, 웹 접근성 품질인증, 기타 추가 기재사항 개발"
    },
    {
      name: "연말정산 업데이트",
      pictures: [
        {img: require("./src/assets/portfolio/kprc/0.png")},
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis", "Er-Win"],
      category: "Web App",
      github: "",
      date: "2017. 12  ~ 2018.03",
      visit: "",
      description: "시스템 버전별 연말정산 세법 업데이트"
    },
    {
      name: "한국조폐공사 - 근무평정(평가)시스템 구축",
      pictures: [
        {img: require("./src/assets/portfolio/komsco/0.png")}
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis", "Er-Win"],
      category: "Web App",
      github: "",
      date: "2017. 07 - 2017. 12",
      visit: "",
      description: "근무평정(평가관리) 시스템 구축"
    },
    {
      name: "국가식품클러스터 - 전자세금계산서 스마일빌 연계",
      pictures: [
        {img: require("./src/assets/portfolio/foodpolis/0.png")},
        {img: require("./src/assets/portfolio/foodpolis/1.png")}
      ],
      technologies: ["Java", "Javascript", "Oracle-SQL", "Jsp"],
      category: "Website",
      github: "",
      date: "2017. 01 ~ 2017. 06",
      visit: "",
      description: "세금계산서 SmildEDI 연계"
    },
    {
      name: "국제교류재단 - 인사시스템(급여, 채용) 고도화",
      pictures: [
        {img: require("./src/assets/portfolio/kf/0.png")},
        {img: require("./src/assets/portfolio/kf/3.png")},
        {img: require("./src/assets/portfolio/kf/4.png")},
        {img: require("./src/assets/portfolio/kf/5.png")},
        {img: require("./src/assets/portfolio/kf/6.png")},
        {img: require("./src/assets/portfolio/kf/7.png")},
        {img: require("./src/assets/portfolio/kf/8.png")},
        {img: require("./src/assets/portfolio/kf/9.png")},
        {img: require("./src/assets/portfolio/kf/10.png")}
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis", "Er-Win"],
      category: "Web App",
      github: "",
      date: "2016. 06 - 2016. 12",
      visit: "https://www.kf.or.kr/recruit/",
      description: "급여관리, 채용시스템 구축 및 고도화"
    },
    {
      name: "ZARA - 인사시스템 근태관리 고도화",
      pictures: [
        {img: require("./src/assets/portfolio/zara/0.png")},
        {img: require("./src/assets/portfolio/zara/1.png")},
        {img: require("./src/assets/portfolio/zara/2.png")},
        {img: require("./src/assets/portfolio/zara/3.png")},
        {img: require("./src/assets/portfolio/zara/4.png")}
      ],
      technologies: ["Java", "Spring-Framework", "Javascript", "Ms-sql", "Jsp"],
      category: "Website",
      github: "",
      date: "2016. 01 ~ 2016. 06",
      visit: "",
      description: "직원 및 파트타이머별 근무 스케쥴 관리"
    },
    {
      name: "롯데칠성음료 - 통합인사시스템 구축",
      pictures: [
        {img: require("./src/assets/portfolio/chilsung/0.png")},
        {img: require("./src/assets/portfolio/chilsung/1.png")},
        {img: require("./src/assets/portfolio/chilsung/2.png")},
        {img: require("./src/assets/portfolio/chilsung/3.png")},
        {img: require("./src/assets/portfolio/chilsung/4.png")},
        {img: require("./src/assets/portfolio/chilsung/5.png")}
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis", "Er-Win"],
      category: "Web App",
      github: "",
      date: "2015. 07 ~ 2016. 01",
      visit: "",
      description: "인사시스템 구축 (문화복지, 4대보험, 학자금 등)"
    }
  ],
  portfolio_design: [
    {
      name: "일진C&S, 2025년도 R&D팀 팀장 발령",
      title: "일진C&S, 2025년도 R&D팀 팀장 발령",
      pictures: [
        {
          img: require("./src/assets/awards/iljin/2.png"),
          title: "인사발령"
        }
      ],
      github: "",
      date: "2025. 01" ,
      visit: "",
      description: "2025년도 인사발령"
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      title: "AWS Certified Solutions Architect – Associate",
      pictures: [
        {
          img: require("./src/assets/awards/aws/saa.png"),
          title: "AWS Certified Solutions Architect – Associate"
        }
      ],
      github: "",
      date: "2025. 01" ,
      visit: "",
      description: "AWS Certified Solutions Architect – Associate"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      title: "AWS Certified Cloud Practitioner",
      pictures: [
        {
          img: require("./src/assets/awards/aws/acp.png"),
          title: "AWS Certified Cloud Practitioner"
        }
      ],
      github: "",
      date: "2024. 09" ,
      visit: "",
      description: "AWS Certified Cloud Practitioner"
    },
    {
      name: "Saas Boot Camp",
      title: "Saas Boot Camp",
      pictures: [
        {
          img: require("./src/assets/awards/aws/saas_boot_camp.png"),
          title: "Saas Boot Camp"
        }
      ],
      github: "",
      date: "2024. 03" ,
      visit: "",
      description: "Saas Boot Camp"
    },
    {
      name: "일진C&S, 2021년도 개인 KPI 평가",
      title: "일진C&S, 2021년도 개인 KPI 평가",
      pictures: [
        {
          img: require("./src/assets/awards/iljin/1.png"),
          title: "KPI 평가"
        }
      ],
      github: "",
      date: "2022. 02" ,
      visit: "",
      description: "2021년도 개인 KPI 평가"
    },
    {
      name: "일진C&S, 2021년도 우수직원 포상",
      title: "일진C&S, 2021년도 우수직원 포상",
      pictures: [
        {
          img: require("./src/assets/awards/iljin/0.png"),
          title: "우수직원 포상"
        }
      ],
      github: "",
      date: "Dec, 2021" ,
      visit: "",
      description: "2021년 12월 우수직원 포상"
    },
    {
      name: "Inbus, 2016년도 우수직원 포상",
      title: "Inbus, 2016년도 우수직원 포상",
      pictures: [
        {
          img: require("./src/assets/awards/inbus/0.png"),
          title: "2016년도 우수직원 포상"
        }
      ],
      github: "",
      date: "Jun, 2016",
      visit: "",
      description: "2016년 우수직원 포상"
    }
  ],
  portfolio_education:[
    {
      name: "RAG를 활용한 LLM Application 개발 (feat. LangChain)",
      pictures: [
        {img: require("./src/assets/education/getsmart/rag-llm-certificate-redacted.png")}
      ],
      technologies: ["RAG", "LLM Application", "LangChain"],
      category: "AI · RAG",
      date: "Aug, 2026",
      visit: "",
      description: "GetSmart Academy에서 RAG를 활용한 LLM Application 개발 과정을 수료했습니다.<br><br>" +
          "<strong>교육 과정</strong><br>LangChain을 활용한 RAG 기반 LLM Application 개발<br><br>" +
          "<strong>수료 정보</strong><br>수료일: 2026.08.11 · 교육시간: 3시간 36분"
    },
    {
      name: "스스로 구축하는 AWS 클라우드 인프라 - 기본편",
      pictures: [
        {img: require("./src/assets/education/inflearn/10.png")}
      ],
      technologies: ["AWS", "Cloud"],
      category: "AWS",
      date: "Jan, 2025 - Jan, 2025",
      visit: "https://www.inflearn.com/",
      description: "AWS 아키텍처 구현을 위한 기술과 관련 서비스, AWS의 핵심적인 주요 서비스들의 사용 방법과 세부 기능 및 옵션"
    },
    {
      name: "AWS Certified Solutions Architect - Associate 자격증 준비하기",
      pictures: [
        {img: require("./src/assets/education/inflearn/9.png")}
      ],
      technologies: ["AWS", "Cloud"],
      category: "AWS",
      date: "Oct, 2024 - Oct, 2024",
      visit: "https://www.inflearn.com/",
      description: "AWS Certified Solutions Architect - Associate 자격증 준비"
    },
    {
      name: "개발자를 위한 쉬운 도커",
      pictures: [
        {img: require("./src/assets/education/inflearn/8.png")}
      ],
      technologies: ["Docker", "Container", "Image", "Iac", "MSA", "Cloud"],
      category: "Docker",
      date: "Apr, 2024 - Apr, 2024",
      visit: "https://www.inflearn.com/",
      description: "3Tier 아키텍처 애플리케이션 컨테이너화, 도커 컴포즈 및 깃허브 액션 파이프라인 사용법"
    },
    {
      name: "더 자바, 애플리케이션을 테스트하는 다양한 방법",
      pictures: [
        {img: require("./src/assets/education/inflearn/7.png")}
      ],
      technologies: ["JUnit 5", "Mockito", "Testcontainers", "Chaos Monkey for Spring Boot", "JMeter", "ArchUnit"],
      category: "TEST",
      date: "Jan, 2024 - Jan, 2024",
      visit: "https://www.inflearn.com/",
      description: "자바 애플리케이션에서 테스트를 작성하는 방법, 자바 애플리케이션 성능을 테스트하는 방법"
    },
    {
      name: "따라하며 배우는 도커와 CI환경",
      pictures: [
        {img: require("./src/assets/education/inflearn/6.png")}
      ],
      technologies: ["Docker", "CI/CD"],
      category: "Docker",
      date: "Dec, 2023 - Dec, 2023",
      visit: "https://www.inflearn.com/",
      description: "AWS Cloud Services, Travis CI, Docker, ReactJS NodeJS Mysql"
    },
    {
      name: "코딩으로 학습하는 GoF의 디자인 패턴",
      pictures: [
        {img: require("./src/assets/education/inflearn/5.png")}
      ],
      technologies: ["JAVA", "Design Pattern"],
      category: "JAVA",
      date: "Oct, 2023 - Oct, 2023",
      visit: "https://www.inflearn.com/",
      description: "디자인 패턴 코딩하기, GoF의 총 23개 디자인 패턴, 자바와 스프링에 적용된 디자인 패턴"
    },
    {
      name: "실전! Querydsl",
      pictures: [
        {img: require("./src/assets/education/inflearn/4.png")}
      ],
      technologies: ["JPA", "JAVA", "API"],
      category: "JAVA",
      date: "May, 2023 - May, 2023",
      visit: "https://www.inflearn.com/",
      description: "Querydsl을 기초부터 실무활용, JPA를 사용할 때 동적 쿼리와 복잡한 쿼리 문제 활용 "
    },
    {
      name: "실전! 스프링 데이터 JPA",
      pictures: [
        {img: require("./src/assets/education/inflearn/3.png")}
      ],
      technologies: ["JPA", "JAVA", "API"],
      category: "JAVA",
      date: "Apr, 2023 - Apr, 2023",
      visit: "https://www.inflearn.com/",
      description: "JPA와 스프링 데이터 JPA의 차이를 명확하게 이해"
    },
    {
      name: "실전! 스프링 부트와 JPA 활용1 - 웹 애플리케이션 개발",
      pictures: [
        {img: require("./src/assets/education/inflearn/2.png")}
      ],
      technologies: ["JPA", "JAVA", "API"],
      category: "JAVA",
      date: "Mar, 2023 - Mar, 2023",
      visit: "https://www.inflearn.com/",
      description: "스프링 부트와 JPA를 활용해서 자바 웹 애플리케이션을 개발 <br>" +
          "스프링 부트와 JPA를 활용하는 최적의 방법을 이해 <br> "+
          "도메인 모델을 이해하고 주도적으로 설계 "
    },
    {
      name: "실전! 스프링 부트와 JPA 활용2 - API 개발과 성능 최적화",
      pictures: [
        {img: require("./src/assets/education/inflearn/1.png")}
      ],
      technologies: ["JPA", "JAVA", "API"],
      category: "JAVA",
      date: "Feb, 2023 - Feb, 2023",
      visit: "https://www.inflearn.com/",
      description: "JPA의 기본기, JPA의 내부 동작 방식, 객체와 DB 테이블을 올바르게 설계하고 매핑"
    },
    {
      name: "실전! 스프링 부트와 JPA 활용2 - API 개발과 성능 최적화",
      pictures: [
        {img: require("./src/assets/education/inflearn/0.png")}
      ],
      technologies: ["JPA", "JAVA", "API"],
      category: "JAVA",
      date: "Dec, 2022 - Dec, 2022",
      visit: "https://www.inflearn.com/",
      description: "스프링 부트와 JPA를 활용해서 API를 개발하는 올바른 방법, API 조회 성능을 튜닝하는 방법, 실무 성능 최적화 방법"
    },
    {
      name: "업무에 바로쓰는 SQL튜닝",
      pictures: [
        {img: require("./src/assets/education/tuning/tuning.png")}
      ],
      technologies: ["tuning", "sql", "Optimizer"],
      category: "Database",
      date: "Mar, 2022 - Mar, 2022",
      visit: "https://www.multicampus.com/kr/index.html",
      description: "SQL 튜닝의 개념 이해, 적절한 튜닝계획을 수립, SQL 문장의 속도 향상, 복잡한 SQL문을 고급함수를 이용하여 단순/명료한 SQL문을 작성"
    },
    {
      name: "git",
      pictures: [
        {img: require("./src/assets/education/git/git.png")}
      ],
      technologies: ["git", "github", "형상관리"],
      category: "Git",
      date: "Aug, 2021 - Mar, 2022",
      visit: "https://hrd.hunet.co.kr/Contents/HunetContents",
      description: "Git과 GitHub의 개념 이해와 실습을 통한 활용"
    },
    {
      name: "SQL Tuning for Optimizing SW Performance",
      pictures: [
        {img: require("./src/assets/education/sqlTuning/sqlTuning.png")}
      ],
      technologies: ["sql", "Tuning", "Optimizing", "Performance"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      visit: "http://estudy.kitri.re.kr/usrs/eduRegMgnt/eduCrsScheduleByMonth.do?",
      description:"데이터베이스 및 조작프로시저의 성능 상의 문제점 분석 및 개선, 개선 수행 방법의 정의, 성능개선 수행, 성능개선 결과를 정량적으로 평가, 각 단계별 산출물 및 수행 활동을 규정 하는 능력을 함양"
    },
    {
      name: "Advanced Java Functional & Reactive Programming",
      pictures: [
        {img: require("./src/assets/education/reactiveProgramming/Advanced Java Functional & Reactive Programming.png")}
      ],
      technologies: ["Java", "Spring-boot", "JPA"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      visit: "http://estudy.kitri.re.kr/usrs/eduRegMgnt/eduCrsScheduleByMonth.do?",
      description: "소프트웨어 개발의 새로운 패러다임으로 부각되는 함수형 프로그래밍과 리액티브 프로그래밍 기법을 Java8+ 과 RxJava 라이브러리를 활용하여 프로그래밍 활용력 향상"
    },
    {
      name: "Spring Framework를 활용한 OpenAPI 서비스 개발",
      pictures: [
        {img: require("./src/assets/education/openAPI/openAPI.png")}
      ],
      technologies: ["Java", "Spring-boot", "JPA"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      visit: "https://www.multicampus.com/kr/index.html",
      description:"java기반의 RESTful Web Service 작성, Open API 서비스를 작성하고, 이를 이용하는 클라이언트를 작성, OAuth 인증 기법을 이해하고 OAuth 인증이 적용된 Service Provider를 구축"
    },
    {
      name: "Vue.js 실전 프로젝트",
      pictures: [
        {img: require("./src/assets/education/vueJs/vueJs.png")}
      ],
      technologies: ["Vue"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      visit: "http://estudy.kitri.re.kr/usrs/eduRegMgnt/eduCrsScheduleByMonth.do?",
      description:"자바스크립트 컴포넌트 구조기반 프론트엔드 프레임워크 개발기법을 습득하고 현실적 프로젝트를 통해 Vue.js 학습"
    },
    {
      name: "모던웹 개발을 위한 JAVA9 프로그래밍",
      pictures: [
        {img: require("./src/assets/education/java9/java9.png")}
      ],
      technologies: ["Java", "Spring-boot", "JPA", "MariaDB", "Vue"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      visit: "https://hrd.hunet.co.kr/Contents/HunetContents",
      description: ""
    },
    {
      name: "HTML5&JavaScript",
      pictures: [
        {img: require("./src/assets/education/HTML5&JavaScript/HTML5&JavaScript.png")}
      ],
      technologies: ["JavaScript", "HTML5", "CSS"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      visit: "https://hrd.hunet.co.kr/Contents/HunetContents",
      description: ""
    }
  ],
  recommendations: [
      /*
    {
      title:
        "",
      author: "",
      position: "",
      company: "",
      location: ""
    },
    {
      title:
        "",
      author: "",
      position: "",
      company: "",
      location: ""
    },
    {
      title:
          "",
      author: "",
      position: "",
      company: "",
      location: ""
    },
    {
      title:
          "",
      author: "",
      position: "",
      company: "",
      location: ""
    }
       */
  ]
};

export default info;
