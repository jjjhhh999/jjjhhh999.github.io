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
  education: [
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
      position: "프로젝트팀, Full Stack Developer",
      description:
        "이것저것 했어요",
        /*"인사, 회계, 예산 등 ERP시스템 구축하였으며 개발 PL로 프로젝트에 참여하여 개발 및 ERD설계, 업무협의 등 전반적인 SI프로젝트 경험을 하였습니다.",*/
      skills: ["Java", "Spring-Framework", "Javascript", "Oracle", "Ms-sql", "Jsp"]
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
      info: ["OracleSQL", "MySQL", "MsSQL"],
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
        "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
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
      github: "https://github.com/hrishikeshpaul/noq",
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
      github: "https://github.com/hrishikeshpaul/pos-tagger",
      date: "Oct, 2019 - Nov, 2019",
      visit: "https://post-client.herokuapp.com/",
      description:
        "영업수주에서 생산계획, 생산지시, 생산실적, 분석에 이르기까지 현황을 조회 하고 처리 할 수 있는 시스템, 정보 집중과 관리 체계 수립 "
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
      github: "https://github.com/hrishikeshpaul/whodata",
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
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle", "Jquery", "Ibatis"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "https://github.com/hrishikeshpaul/sih",
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
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle", "Jquery", "Ibatis", "Er-Win"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "https://github.com/hrishikeshpaul/sih",
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
      technologies: ["Java", "Javascript", "Oracle", "Jsp"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
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
        }
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle", "Jquery", "Ibatis", "Er-Win"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
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
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle", "Jquery", "Ibatis", "Er-Win"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
          "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    },
    {
      name: "평가(근무평정)시스템 구축",
      pictures: [
        {
          img: require("./src/assets/portfolio/komsco/0.png")
        }
      ],
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle", "Jquery", "Ibatis", "Er-Win"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
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
        }
      ],
      technologies: ["Java", "Spring-Framework", "Javascript", "Ms-sql", "Jsp"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
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
      technologies: ["Java", "Javascript", "Spring-Framework", "Oracle", "Jquery", "Ibatis", "Er-Win"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
          "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    }
  ],
  portfolio_design: [
    {
      name: "Guituna",
      title: "Guituna - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
          title: "App Elements"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
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
