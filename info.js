let info = {
  name: "KooJaeHoon",
  logo_name: "Koo",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "개발에 관심있고 이것저것 개발하는 한량 개발자입니다.",
  links: {
    //linkedin: "https://www.linkedin.com/in/hrishikeshpaul/",
    github: "https://github.com/jjjhhh999",
    //angellist: "https://angel.co/u/hrishikesh-paul",
    //resume: "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
  },
  certification: [
    {
      name: "정보처리기사",
      date: "Nov, 2013"
    },
    {
      name: "SQLD",
      date: "Dec, 2019"
    }
  ],
/*
  certification: [
    {
      name: "Indiana University Bloomington",
      place: "USA",
      date: "Aug, 2019 - May, 2021",
      degree: "Masters in Computer Science",
      gpa: "3.7/4.0",
      description:
        "Currently pursuing my Master's in Computer Science, while specializing in the field of Artificial Intelligence and Machine Learning.",
      skills: [
        "Artificial Intelligence",
        "Software Engineering",
        "Algorithms",
        "Computer Vision",
        "Music Data Mining",
        "OS"
      ]
    },
    {
      name: "Manipal Institute of Technology",
      place: "India",
      date: "Aug, 2015 - July, 2019",
      degree: "Bachelors in Computer and Communication",
      gpa: "8.0/10.0",
      description:
        "Graduated from Manipal Institute of Technology, Manipal with a bachelors degree in Computer and Communications Engineering.",
      skills: [
        "AI",
        "Neural Netwroks",
        "Data Mining",
        "Computer Vision",
        "Pattern Recognition",
        "HCI",
        "Software Engineering"
      ]
    }
  ],

 */
  experience: [
    {
      name: "[일진그룹] 일진C&S",
      place: "서울 마포구 마포대로 45 일진빌딩 14층",
      date: "Jan, 2020 - Present",
      position: "DT사업팀, Full Stack Developer",
      description:
        "이것저것 했어요",
      skills: ["Java", "Spring-boot", "JPA", "MariaDB", "Vue", "Git"]
    },
    {
      name: "Inbus",
      place: "서울 구로구 디지털로 272 한신IT타워 8층",
      date: "Jun, 2015 - Jan, 2020",
      position: "솔루션 1팀, Full Stack Developer",
      description:
        "이것저것 했어요",
        /*"인사, 회계, 예산 등 ERP시스템 구축하였으며 개발 PL로 프로젝트에 참여하여 개발 및 ERD설계, 업무협의 등 전반적인 SI프로젝트 경험을 하였습니다.",*/
      skills: ["Java", "Spring-Framework", "Javascript", "Oracle-SQL", "Ms-SQL", "Jsp"]
    },
    {
      name: "중앙정보기술인재개발원",
      place: "서울시 마포구 신촌로 176",
      date: "Dec, 2014 - May, 2015",
      description:
          "멀티디바이스 하이브리드 웹 & 앱 게임전문과정",
      /*"인사, 회계, 예산 등 ERP시스템 구축하였으며 개발 PL로 프로젝트에 참여하여 개발 및 ERD설계, 업무협의 등 전반적인 SI프로젝트 경험을 하였습니다.",*/
      skills: ["Java", "Spring-Framework", "Javascript", "Database", "Jsp"]
    }
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Java",
        "Javascript",
        "Jsp"
      ],
      icon: "fa fa-code"
    },
    {
      title: "frameworks",
      info: [
        "Spring-boot",
        "Spring-Framework",
        "Egov"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue", "Rest-Api", "Html", "Css"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["Oracle-SQL", "My-SQL", "Ms-SQL"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "Windows", "Linux"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "erd tools",
      info: ["Er-Win"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "알피니언메디칼 전자전표 구축",
      pictures: [
        {
          img: require("./src/assets/portfolio/alpinion/0.png")
        },
        {
          img: require("./src/assets/portfolio/alpinion/1.png")
        },
        {
          img: require("./src/assets/portfolio/alpinion/2.png")
        },
        {
          img: require("./src/assets/portfolio/alpinion/3.png")
        },
        {
          img: require("./src/assets/portfolio/alpinion/4.png")
        },
        {
          img: require("./src/assets/portfolio/alpinion/5.png")
        },
        {
          img: require("./src/assets/portfolio/alpinion/6.png")
        },
        {
          img: require("./src/assets/portfolio/alpinion/7.png")
        },
        {
          img: require("./src/assets/portfolio/alpinion/8.png")
        },
        {
          img: require("./src/assets/portfolio/alpinion/9.png")
        }
      ],
      technologies: ["Java", "Spring-boot", "Jpa", "MariaDB", "Vue"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      github:
        "",
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      description:
        "증빙관리, 전표처리 등 경비처리와 관련된 토탈 서비스를 제공하는 '기업형 경비관리' 솔루션"
    },
    {
      name: "경영자정보시스템(EIS) 구축",
      pictures: [
        {
          img: require("./src/assets/portfolio/eis/0.png")
        },
        {
          img: require("./src/assets/portfolio/eis/1.png")
        },
        {
          img: require("./src/assets/portfolio/eis/2.png")
        },
        {
          img: require("./src/assets/portfolio/eis/3.png")
        },
        {
          img: require("./src/assets/portfolio/eis/4.png")
        },
        {
          img: require("./src/assets/portfolio/eis/5.png")
        }
      ],
      technologies: ["Java", "Spring-boot", "Jpa", "MariaDB", "Vue"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "",
      visit: "https://noq-client.herokuapp.com/",
      description:
        "클라우드 기반 실시간 경영자정보시스템(EIS), billboard chart 라이브러리 적용"
    },
    {
      name: "통합생산관리 시스템 구축",
      pictures: [
        {
          img: require("./src/assets/portfolio/steel/0.png")
        },
        {
          img: require("./src/assets/portfolio/steel/1.png")
        },
        {
          img: require("./src/assets/portfolio/steel/2.png")
        },
        {
          img: require("./src/assets/portfolio/steel/3.png")
        },
        {
          img: require("./src/assets/portfolio/steel/4.png")
        }
      ],
      technologies: ["Java", "Spring-Framework", "Javascript", "Oracle-SQL"],
      category: "Algorithm",
      github: "",
      date: "Oct, 2019 - Nov, 2019",
      visit: "https://post-client.herokuapp.com/",
      description:
        "영업수주에서 생산계획, 생산지시, 생산실적, 분석에 이르기까지 현황을 조회 하고 처리 할 수 있는 시스템, 정보 집중과 관리 체계 수립 "
    },
    {
      name: "e-Po시스템 구축",
      pictures: [
        {
          img: require("./src/assets/portfolio/epo/0.png")
        },
        {
          img: require("./src/assets/portfolio/epo/1.png")
        },
        {
          img: require("./src/assets/portfolio/epo/2.png")
        },
        {
          img: require("./src/assets/portfolio/epo/3.png")
        },
        {
          img: require("./src/assets/portfolio/epo/4.png")
        },
        {
          img: require("./src/assets/portfolio/epo/5.png")
        }
      ],
      technologies: ["Java", "Spring-boot", "Jpa", "MariaDB", "Vue"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "",
      visit: "https://noq-client.herokuapp.com/",
      description:
          "클라우드 기반 실시간 경영자정보시스템(EIS), billboard chart 라이브러리 적용"
    },
    {
      name: "E방제증서 시스템 고도화",
      pictures: [
        {
          img: require("./src/assets/portfolio/koem/0.png")
        },
        {
          img: require("./src/assets/portfolio/koem/1.png")
        }
      ],
      technologies: ["Java", "Spring-Framework", "Javascript", "Oracle-SQL", "Jsp"],
      category: "Website",
      date: "Oct, 2018 - Nov, 2018",
      github: "",
      visit: "https://skylarktiral.herokuapp.com/",
      description:
        "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent."
    },
    {
      name: "연말정산 버전 업데이트",
      pictures: [
        {
          img: require("./src/assets/portfolio/thek/0.png")
        }
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "",
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
      description:
          "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    },
    {
      name: "통합인사시스템 구축",
      pictures: [
        {
          img: require("./src/assets/portfolio/lotteglogis/0.png")
        },
        {
          img: require("./src/assets/portfolio/lotteglogis/1.png")
        },
        {
          img: require("./src/assets/portfolio/lotteglogis/2.png")
        },
        {
          img: require("./src/assets/portfolio/lotteglogis/3.png")
        },
        {
          img: require("./src/assets/portfolio/lotteglogis/4.png")
        },
        {
          img: require("./src/assets/portfolio/lotteglogis/5.png")
        },
        {
          img: require("./src/assets/portfolio/lotteglogis/6.png")
        },
        {
          img: require("./src/assets/portfolio/lotteglogis/7.png")
        },
        {
          img: require("./src/assets/portfolio/lotteglogis/8.png")
        },
        {
          img: require("./src/assets/portfolio/lotteglogis/9.png")
        },
        {
          img: require("./src/assets/portfolio/lotteglogis/10.png")
        },
        {
          img: require("./src/assets/portfolio/lotteglogis/11.png")
        }
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis", "Er-Win"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "",
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
      description:
        "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    },
    {
      name: "법인카드 연동시스템 구축",
      pictures: [
        {
          img: require("./src/assets/portfolio/woori/0.png")
        }
      ],
      technologies: ["Java", "Javascript", "Oracle-SQL", "Jsp"],
      category: "Web App",
      github: "",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    },
    {
      name: "인사시스템(급여, 채용) 고도화",
      pictures: [
        {
          img: require("./src/assets/portfolio/kf/0.png")
        },
        {
          img: require("./src/assets/portfolio/kf/1.png")
        },
        {
          img: require("./src/assets/portfolio/kf/2.png")
        },
        {
          img: require("./src/assets/portfolio/kf/3.png")
        },
        {
          img: require("./src/assets/portfolio/kf/4.png")
        },
        {
          img: require("./src/assets/portfolio/kf/5.png")
        },
        {
          img: require("./src/assets/portfolio/kf/6.png")
        },
        {
          img: require("./src/assets/portfolio/kf/7.png")
        },
        {
          img: require("./src/assets/portfolio/kf/8.png")
        },
        {
          img: require("./src/assets/portfolio/kf/9.png")
        },
        {
          img: require("./src/assets/portfolio/kf/10.png")
        }
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis", "Er-Win"],
      category: "Website",
      github: "",
      date: "May, 2017 - Aug, 2017",
      visit: "https://www.kf.or.kr/recruit/",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    },
    {
      name: "연말정산 업데이트",
      pictures: [
        {
          img: require("./src/assets/portfolio/kprc/0.png")
        },
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis", "Er-Win"],
      category: "Website",
      github: "",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
          "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    },
    {
      name: "근무평정(평가)시스템 구축",
      pictures: [
        {
          img: require("./src/assets/portfolio/komsco/0.png")
        }
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis", "Er-Win"],
      category: "Website",
      github: "",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
          "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    },
    {
      name: "인사시스템 근태관리 고도화",
      pictures: [
        {
          img: require("./src/assets/portfolio/zara/0.png")
        },
        {
          img: require("./src/assets/portfolio/zara/1.png")
        },
        {
          img: require("./src/assets/portfolio/zara/2.png")
        },
        {
          img: require("./src/assets/portfolio/zara/3.png")
        },
        {
          img: require("./src/assets/portfolio/zara/4.png")
        }
      ],
      technologies: ["Java", "Spring-Framework", "Javascript", "Ms-sql", "Jsp"],
      category: "Website",
      github: "",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
          "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    },
    {
      name: "전자세금계산서 스마일빌 연계",
      pictures: [
        {
          img: require("./src/assets/portfolio/foodpolis/0.png")
        },
        {
          img: require("./src/assets/portfolio/foodpolis/1.png")
        }
      ],
      technologies: ["Java", "Javascript", "Oracle-SQL", "Jsp"],
      category: "Website",
      github: "",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
          "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    },
    {
      name: "통합인사시스템 구축",
      pictures: [
        {
          img: require("./src/assets/portfolio/chilsung/0.png")
        },
        {
          img: require("./src/assets/portfolio/chilsung/1.png")
        },
        {
          img: require("./src/assets/portfolio/chilsung/2.png")
        },
        {
          img: require("./src/assets/portfolio/chilsung/3.png")
        },
        {
          img: require("./src/assets/portfolio/chilsung/4.png")
        },
        {
          img: require("./src/assets/portfolio/chilsung/5.png")
        }
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle-SQL", "Jquery", "Ibatis", "Er-Win"],
      category: "Website",
      github: "",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
          "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    }
  ],
  portfolio_design: [
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
      description:
        "2021년 12월 우수직원 포상"
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
      description:
        "2016년 우수직원 포상"
    }
  ],
  portfolio_education: [
    {
      name: "SQL Tuning for Optimizing SW Performance",
      pictures: [
        {
          img: require("./src/assets/education/sqlTuning/sqlTuning.png")
        }
      ],
      technologies: ["Java", "Spring-boot", "Jpa", "MariaDB", "Vue"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      visit: "http://estudy.kitri.re.kr/usrs/eduRegMgnt/eduCrsScheduleByMonth.do?",
      description:
          "데이터베이스 및 조작프로시저의 성능 상의 문제점 분석 및 개선, 개선 수행 방법의 정의, 성능개선 수행, 성능개선 결과를 정량적으로 평가, 각 단계별 산출물 및 수행 활동을 규정 하는 능력을 함양"
    },
    {
      name: "Advanced Java Functional & Reactive Programming",
      pictures: [
        {
          img: require("./src/assets/education/reactiveProgramming/Advanced Java Functional & Reactive Programming.png")
        }
      ],
      technologies: ["Java", "Spring-boot", "Jpa", "MariaDB", "Vue"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      visit: "http://estudy.kitri.re.kr/usrs/eduRegMgnt/eduCrsScheduleByMonth.do?",
      description:
          "소프트웨어 개발의 새로운 패러다임으로 부각되는 함수형 프로그래밍과 리액티브 프로그래밍 기법을 Java8+ 과 RxJava 라이브러리를 활용하여 프로그래밍 활용력 향상"
    },
    {
      name: "Spring Framework를 활용한 OpenAPI 서비스 개발",
      pictures: [
        {
          img: require("./src/assets/education/openAPI/openAPI.png")
        }
      ],
      technologies: ["Java", "Spring-boot", "Jpa", "MariaDB", "Vue"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      visit: "https://www.multicampus.com/kr/index.html",
      description:
          "java기반의 RESTful Web Service 작성, Open API 서비스를 작성하고, 이를 이용하는 클라이언트를 작성, OAuth 인증 기법을 이해하고 OAuth 인증이 적용된 Service Provider를 구축"
    },
    {
      name: "Vue.js 실전 프로젝트",
      pictures: [
        {
          img: require("./src/assets/education/vueJs/vueJs.png")
        }
      ],
      technologies: ["Java", "Spring-boot", "Jpa", "MariaDB", "Vue"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      visit: "http://estudy.kitri.re.kr/usrs/eduRegMgnt/eduCrsScheduleByMonth.do?",
      description:
          "자바스크립트 컴포넌트 구조기반 프론트엔드 프레임워크 개발기법을 습득하고 현실적 프로젝트를 통해 Vue.js 학습"
    },
    {
      name: "모던웹 개발을 위한 JAVA9 프로그래밍",
      pictures: [
        {
          img: require("./src/assets/education/java9/java9.png")
        }
      ],
      technologies: ["Java", "Spring-boot", "Jpa", "MariaDB", "Vue"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      visit: "https://hrd.hunet.co.kr/Contents/HunetContents",
      description:
          ""
    },
    {
      name: "HTML5&JavaScript",
      pictures: [
        {
          img: require("./src/assets/education/HTML5&JavaScript/HTML5&JavaScript.png")
        }
      ],
      technologies: ["Java", "Spring-boot", "Jpa", "MariaDB", "Vue"],
      category: "Web App",
      date: "Aug, 2021 - Mar, 2022",
      visit: "https://hrd.hunet.co.kr/Contents/HunetContents",
      description:
          ""
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]
};

export default info;
