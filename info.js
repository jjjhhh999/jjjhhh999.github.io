let info = {
  name: "GuSiWan",
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
    "음악을 들으며 코딩하는 것을 즐기는 11년 차 개발자로, 현재 지에스 비즈플 HR사업팀에서 근무하고 있습니다. <br>" +
    "솔루션 구축 및 고도화 프로젝트를 주도하며, 비즈니스 요구사항을 기술적으로 풀어내는 역할을 담당하고 있습니다. <br>" +
    "주요 업무는 백엔드 API 설계 및 개발, Vue.js 기반 프론트엔드 개발, 시스템 아키텍처 설계, <br>" +
    "그리고 시스템 환경 구축부터 CI/CD를 포함한 배포 전반까지 아우르고 있습니다. <br>" +
    "특히 엔터티(Entity) 및 데이터 모델링, 인증·인가(JWT, 권한 기반 접근 제어) 시스템 구축, <br>" +
    "그리고 팀 내 개발 표준 및 방향성 설정을 중점적으로 수행하고 있습니다. <br>" +
    "또한 다양한 사내·외부 시스템 연동(API, 배치, 메시징 등) 경험을 바탕으로 안정적이고 확장 가능한 아키텍처를 구현해왔으며,  <br>" +
    "프론트엔드에서는 Vue.js를 활용한 컴포넌트 설계, 상태 관리, 사용자 경험 개선에 집중하고 있습니다.  <br>" +
    "단순한 기능 구현을 넘어, 유지보수성과 확장성을 고려한 코드, 협업하기 좋은 구조, 그리고 비즈니스 관점에서 가치 있는 시스템을 만드는 개발자를 지향합니다.  <br>",
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
          position: "HR사업팀, Back-end Developer",
          description: "솔루션 개발 및 프로젝트 구축 ",
          skills: ["Java17", "Spring-boot", "JPA", "Azure", "jenkins", "JWT", "Git", "GitHub-Action", "GitLab-Runner", "MariaDB", "Docker-Hub", "CI/CD", "Nginx", "REST-API"]
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
      title: "back-end",
      info: [ "Java", "RESTful API", "JPA", "JWT", "Spring Security", "Open API"],
      icon: "fa fa-code"
    },
    {
      title: "front-end",
      info: ["Vue", "Node.js(npm)", "Javascript", "Jsp",  "Jquery", "AgGrid"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "frameworks",
      info: ["Spring-boot", "Spring-Framework", "Egov"],
      icon: "fa fa-cubes"
    },
    {
      title: "databases",
      info: ["RDMS(MariaDB, Oracle, MsSQL, MySQL)", "Modeling"],
      icon: "fa fa-database"
    },
    {
      title: "OS & tools",
      info: ["Linux(CentOS, Ubuntu)", "Window", "Mac", "IntelliJ", "DBeaver"],
      icon: "fas fa-tools"
    },
    {
      title: "CI/CD",
      info: ["Git", "GitLab", "GitHub", "GitHub-Action", "GitLab-Runner", "DockerHub", "Docker"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
      {
          name: "현대하이라이프손해사정 인사시스템 프로젝트 구축",
          pictures: [
              {img: require("./src/assets/portfolio/hilife/hilife-ci.png")}
          ],
          technologies: ["Java17", "Spring-boot", "JPA", "Azure", "jenkins", "JWT", "Git", "GitHub-Action", "GitLab-Runner", "MariaDB", "Docker-Hub", "CI/CD", "Nginx", "REST-API"],
          category: "Web App",
          date: "2025. 06 ~ " ,
          github:"",
          visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
          description: "HR 담당자의 고민을 한 번에 해결하는 스마트한 인사관리 통합 플랫폼 <br> " +
          "인사, 근태, 급여, 재무관리 등 기업의 필수 인사업무를  플랫폼에서 관리할 수 있는 통합 인사 관리 솔루션 입니다."
      },
    {
      name: "신규 솔루션 제품화",
      pictures: [
        {img: require("./src/assets/portfolio/subscription/0.png")},
        {img: require("./src/assets/portfolio/subscription/1.png")},
        {img: require("./src/assets/portfolio/subscription/2.png")},
        {img: require("./src/assets/portfolio/subscription/3.png")},
        {img: require("./src/assets/portfolio/subscription/4.png")},
        {img: require("./src/assets/portfolio/subscription/5.png")},
        {img: require("./src/assets/portfolio/subscription/6.png")}
      ],
      technologies: ["Java21", "Spring-boot", "JPA", "JWT", "docker", "AWS", "GitHub", "GitHub-Action", "MariaDB", "docker-Hub", "Git", "Vue", "AgGrid",  "CI/CD"],
      category: "Web App",
      date: "2024. 03 ~ 2025. 05" ,
      github:"",
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      description: "증빙관리, 전표처리 등 경비처리와 관련된 토탈 서비스를 제공하는 '기업형 경비관리' 솔루션"
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
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
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
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
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
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
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
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
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
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
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
      visit: "https://post-client.herokuapp.com/",
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
      visit: "https://noq-client.herokuapp.com/",
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
      visit: "https://noq-client.herokuapp.com/",
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
      visit: "https://noq-client.herokuapp.com/",
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
      visit: "https://skylarktiral.herokuapp.com/",
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
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
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
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
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
      visit: "https://github.com/hrishikeshpaul/clumpr",
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
      visit: "https://angel.co/projects/576300-nutricare",
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
      visit: "https://angel.co/projects/576300-nutricare",
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
      visit: "https://angel.co/projects/576300-nutricare",
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
      visit: "https://angel.co/projects/576300-nutricare",
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
      visit: "https://angel.co/projects/576300-nutricare",
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
