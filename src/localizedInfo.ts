import info from "../info";

const portfolioTranslations = [
  {
    name: "Daou Data — HR Platform Modernization & External Integrations",
    category: "HR Platform Modernization · API Integration · CI/CD",
    date: "2026.11.01 – Present",
    description: `
      <p>Modernized the Daou Data HR platform back end, standardized external-system integrations, and established a deployment architecture designed for service continuity. I refined HR APIs on Java 21 and Spring Boot 3.4, integrated PC OFF, Daou Office, and SECOM through REST APIs, and applied Jenkins and Nginx-based blue-green deployment across two application instances.</p>

      <h4>Responsibilities and key implementation</h4>
      <div class="architecture-grid">
        <section class="architecture-module">
          <h5>Deployment architecture</h5>
          <p class="module-purpose">CI/CD designed for service continuity</p>
          <ul>
            <li>Built and deployed the HR application and external REST API as separate Jenkins pipeline targets</li>
            <li>Deployed releases to the idle instance and switched Nginx routing after startup verification</li>
            <li>Configured blue-green deployment by alternating two application instances</li>
            <li>Refined development and production profiles and instance-aware logging</li>
          </ul>
        </section>
        <section class="architecture-module">
          <h5>External integrations</h5>
          <p class="module-purpose">Consistent attendance and organization interfaces</p>
          <ul>
            <li>Integrated attendance data between the PC OFF and HR systems</li>
            <li>Integrated HR data with Daou Office groupware</li>
            <li>Implemented bulk receipt, validation, and per-record results for SECOM attendance events</li>
            <li>Applied received SECOM events to HR attendance records through scheduled processing</li>
          </ul>
        </section>
        <section class="architecture-module">
          <h5>API operational quality</h5>
          <p class="module-purpose">Security, traceability, and error-handling standards</p>
          <ul>
            <li>Applied API authentication with Spring Security and JWT</li>
            <li>Standardized request validation and success or failure response envelopes</li>
            <li>Recorded inbound processing results and exceptions with trace identifiers</li>
            <li>Published interface specifications through Swagger and OpenAPI</li>
          </ul>
        </section>
      </div>

      <h4>Deployment and integration flow</h4>
      <ol class="process-list">
        <li><span><strong>Separate builds</strong>Jenkins creates independent artifacts for the UI application and external REST API</span></li>
        <li><span><strong>Idle-instance deployment</strong>The active instance remains available while the new release is installed on the idle instance</span></li>
        <li><span><strong>Verification and switch</strong>Nginx routing changes after the new instance passes startup verification</span></li>
        <li><span><strong>API ingestion</strong>External requests are authenticated and validated against required fields and business rules</span></li>
        <li><span><strong>Domain update and tracing</strong>Validated data is applied to the HR domain with per-record results and processing history</span></li>
      </ol>

      <p class="architecture-note"><strong>Design decision</strong> The user-facing application and external-integration process are separated to contain failures, while the active instance continues serving requests during deployment. System-specific differences are absorbed at the API boundary, with common authentication, validation, response, and logging standards improving maintainability and operational traceability.</p>`,
  },
  {
    name: "Dorothy — Enterprise AI Chatbot Platform",
    category: "Enterprise AI Chatbot · RAG Search",
    date: "2026.07 – Present",
    description: `
      <p>I am improving an existing enterprise chatbot by adding document search and LLM-based answers. Administrators can upload files or collect groupware posts, review the extracted content, and release approved documents to test and production services. When a user asks a question, the system combines semantic and keyword search, builds an answer from the selected documents, and shows the source material used for that answer.</p>

      <h4>What I built</h4>
      <div class="architecture-grid">
        <section class="architecture-module">
          <h5>Admin</h5>
          <p class="module-purpose">Manage documents from upload to release</p>
          <ul>
            <li>Upload files and collect groupware posts and attachments</li>
            <li>Extract text from PDF and DOCX files and process scanned documents with OCR</li>
            <li>Split documents into searchable chunks and create embeddings</li>
            <li>Review, approve, test, and release document changes</li>
            <li>Manage LLM providers, models, and encrypted API keys</li>
          </ul>
        </section>
        <section class="architecture-module">
          <h5>Search and answer server</h5>
          <p class="module-purpose">Find related documents and create answers</p>
          <ul>
            <li>Search documents with FAISS vectors and BM25 keywords</li>
            <li>Combine results with RRF and reorder them with a reranker</li>
            <li>Stop answer generation when there is not enough related material</li>
            <li>Connect Claude, OpenAI, Gemini, and Ollama</li>
            <li>Save conversations and return the sources used in each answer</li>
          </ul>
        </section>
        <section class="architecture-module">
          <h5>User chatbot</h5>
          <p class="module-purpose">Ask questions, reopen conversations, and check sources</p>
          <ul>
            <li>Build the chatbot UI with React and TypeScript</li>
            <li>Authenticate users with JWT and load services available to their company</li>
            <li>Create, rename, delete, and reopen conversations</li>
            <li>Show source lists, PDF pages, and PDF or Word previews</li>
            <li>Display loading, error, and retry states</li>
          </ul>
        </section>
      </div>

      <h4>How a question becomes an answer</h4>
      <ol class="process-list">
        <li><span><strong>Add documents</strong>Upload files or collect groupware posts and attachments.</span></li>
        <li><span><strong>Extract content</strong>Read PDF and DOCX text and apply OCR to scanned documents.</span></li>
        <li><span><strong>Review and release</strong>Check the extracted content, test it, and release approved changes.</span></li>
        <li><span><strong>Search</strong>Use vector and keyword search to find documents related to the question.</span></li>
        <li><span><strong>Sort results</strong>Merge overlapping results and move the closest documents to the top.</span></li>
        <li><span><strong>Create the answer</strong>Call the selected LLM only when the search results provide enough context.</span></li>
        <li><span><strong>Show sources</strong>Display the answer together with the referenced documents, pages, and original files.</span></li>
      </ol>

      <p class="architecture-note"><strong>What mattered during implementation</strong> I kept document management separate from search and answer generation so that the two areas could change independently. I also added a relevance check to avoid producing a confident-looking answer from weak search results, and made the source documents available so users can verify the answer themselves.</p>`,
  },
  {
    name: "iM Financial Group (Daegu Bank) HR System — Application Architect",
    date: "2026.06 – Present",
    description:
      "Serving as the Application Architect for a financial-sector HR system, covering system design, development and production environments, and application delivery.<br><br>" +
      "<strong>Application Architecture</strong><br>Designed the application structure with Java 21 and Spring Boot 3.4, including Spring Security and JWT authentication and a Spring Data JPA, Hibernate, and QueryDSL data-access stack.<br><br>" +
      "<strong>Middleware & Operations</strong><br>Configured WebtoB and JEUS environments and supported Active-Standby deployment across production and standby servers.<br><br>" +
      "<strong>Source Control & Delivery Automation</strong><br>Established GitHub-based collaboration and automated configuration and deployment with GitHub Actions, Jenkins, Docker Compose, and Docker Hub.",
  },
  {
    name: "Hyundai Hi-Life Loss Adjusting HR Solution Implementation",
    description:
      "Implemented an integrated HR solution and helped stabilize the project by quickly understanding the product architecture and HR processes.<br><br>" +
      "<strong>Domain & System Analysis</strong><br>Analyzed the existing solution and HR workflows, stabilized the initial environment, and improved assigned features.<br><br>" +
      "<strong>Development Standards & Collaboration</strong><br>Refined coding conventions and development guidelines and led Scrum-based schedule and issue management.<br><br>" +
      "<strong>Schedule & Quality</strong><br>Completed major work ahead of schedule to secure time for verification and improvement.",
  },
  {
    name: "Enterprise Expense & E-Voucher Solution Productization",
    description:
      "Led a seven-person team—three back-end developers, three front-end developers, and one designer—to productize an enterprise expense and electronic voucher solution.<br><br>" +
      "<strong>Leadership & Contribution</strong><br>Managed work and schedules through Jira, Confluence, and Slack. Designed and implemented the back-end architecture, authentication, query functions, CI/CD, infrastructure, and file storage.<br><br>" +
      "<strong>Architecture & Delivery</strong><br>Designed the domain model, implemented Spring Security and JWT authentication, JPA mappings, and QueryDSL queries, and built automated delivery for AWS and on-premises environments.<br><br>" +
      "<strong>External Integrations</strong><br>Integrated NAVER CLOVA OCR, Kakao Maps, exchange-rate data, and enterprise systems.",
  },
  { name: "ILJIN Electric Electronic Voucher System", description: "Implemented an enterprise expense solution covering evidence management, voucher processing, and expense workflows." },
  { name: "Daewoo Lucoms After-Sales Service System", description: "Implemented customer request intake, processing-status tracking, and automated notifications." },
  { name: "POSCO MC Materials Electronic Voucher System", description: "Implemented an enterprise expense solution covering evidence management and electronic voucher processing." },
  { name: "ILJIN Electric Quotation Management System", description: "Implemented an enterprise logistics solution for design, manufacturing-cost calculation, electronic bidding, transportation, and settlement." },
  { name: "Alpinion Medical Systems Electronic Voucher System", description: "Implemented an enterprise expense solution covering evidence management and electronic voucher processing." },
  { name: "ILJIN Steel Integrated Production Management System", description: "Built a centralized system spanning sales orders, production planning, work orders, production results, and operational analysis." },
  { name: "HK Global Executive Information System (EIS)", description: "Built a cloud-based real-time executive information system and integrated the Billboard chart library." },
  { name: "HK Global e-Po System", description: "Built a cloud-based real-time e-Po system." },
  { name: "ILJIN Steel Logistics Cost Settlement System", description: "Built a web-based logistics settlement system for internal users and logistics partners, including ERP settlement interfaces." },
  { name: "KOEM E-Certificate Service Enhancement", description: "Enhanced a public-facing certificate service and implemented additional information-processing requests." },
  { name: "Year-End Tax Settlement Version Update", category: "Algorithm", description: "Updated year-end tax settlement rules and tax-law logic across product versions." },
  { name: "Lotte Global Logistics Integrated HR System", description: "Served as development PL and designed and implemented HR, recruiting, and training modules." },
  { name: "Woori Credit Information Corporate Card Integration", description: "Implemented BC Card data integration." },
  { name: "Korea Foundation HR System Enhancement", description: "Implemented blind recruitment, web-accessibility certification requirements, and additional application fields." },
  { name: "Year-End Tax Settlement Update", description: "Updated year-end tax settlement rules and tax-law logic across product versions." },
  { name: "KOMSCO Performance Evaluation System", description: "Built an employee performance evaluation and appraisal system." },
  { name: "Foodpolis SmileEDI E-Tax Invoice Integration", description: "Integrated electronic tax invoices with SmileEDI." },
  { name: "Korea Foundation HR System Enhancement", description: "Built and enhanced payroll and recruitment systems." },
  { name: "ZARA HR Attendance Management Enhancement", description: "Enhanced shift and attendance scheduling for employees and part-time staff." },
  { name: "Lotte Chilsung Integrated HR System", description: "Implemented HR modules including employee welfare, social insurance, and tuition assistance." },
];

const awardTranslations = [
  { name: "ILJIN C&S — Appointed R&D Team Lead", title: "ILJIN C&S — Appointed R&D Team Lead", description: "2025 personnel appointment" },
  {},
  {},
  { name: "SaaS Boot Camp", title: "SaaS Boot Camp", description: "SaaS Boot Camp" },
  { name: "ILJIN C&S — 2021 Individual KPI Review", title: "ILJIN C&S — 2021 Individual KPI Review", description: "2021 individual KPI review" },
  { name: "ILJIN C&S — 2021 Outstanding Employee Award", title: "ILJIN C&S — 2021 Outstanding Employee Award", date: "2021.12", description: "Outstanding Employee Award, December 2021" },
  { name: "Inbus — 2016 Outstanding Employee Award", title: "Inbus — 2016 Outstanding Employee Award", date: "2016.06", description: "2016 Outstanding Employee Award" },
];

const educationTranslations = [
  { name: "Building LLM Applications with RAG (LangChain)", date: "2026.08", description: "Completed GetSmart Academy training on building LLM applications with RAG, including document processing, embedding, retrieval, and LangChain-based generation." },
  { name: "Build Your Own AWS Cloud Infrastructure — Fundamentals", date: "2025.01", description: "AWS architecture fundamentals, core services, detailed features, and configuration options." },
  { name: "AWS Certified Solutions Architect — Associate Preparation", date: "2024.10", description: "Preparation course for the AWS Certified Solutions Architect — Associate certification." },
  { name: "Docker Made Easy for Developers", date: "2024.04", description: "Containerized a three-tier application and practiced Docker Compose and GitHub Actions pipelines." },
  { name: "Testing Java Applications in Practice", date: "2024.01", description: "Java application testing techniques and performance testing methods." },
  { name: "Hands-on Docker and CI", date: "2023.12", description: "AWS cloud services, Travis CI, Docker, React, Node.js, and MySQL." },
  { name: "Learning GoF Design Patterns through Code", date: "2023.10", description: "Implemented all 23 GoF design patterns and studied their use in Java and Spring." },
  { name: "Practical QueryDSL", date: "2023.05", description: "Applied QueryDSL to dynamic and complex query problems in JPA-based applications." },
  { name: "Practical Spring Data JPA", date: "2023.04", description: "Studied the roles and differences of JPA and Spring Data JPA." },
  { name: "Spring Boot and JPA in Practice 1 — Web Application Development", date: "2023.03", description: "Developed a Java web application with Spring Boot and JPA." },
  { name: "Spring Boot and JPA in Practice 2 — API Development & Performance", date: "2023.02", description: "Studied JPA internals and correct object-relational modeling and mapping." },
  { name: "Spring Boot and JPA in Practice 2 — API Development & Performance", date: "2022.12", description: "Built APIs with Spring Boot and JPA and practiced query-performance tuning and production optimization." },
  { name: "Practical SQL Tuning", date: "2022.03", description: "Planned and performed SQL tuning and simplified complex statements with advanced SQL functions." },
  { name: "Git & GitHub", description: "Learned Git and GitHub concepts through practical exercises." },
  { name: "SQL Tuning for Optimizing Software Performance", description: "Analyzed database and stored-procedure bottlenecks, executed improvements, and evaluated performance quantitatively." },
  { name: "Advanced Java Functional & Reactive Programming", description: "Applied functional and reactive programming with Java 8+ and RxJava." },
  { name: "OpenAPI Service Development with Spring Framework", description: "Built RESTful services and OAuth-enabled OpenAPI providers and clients in Java." },
  { name: "Practical Vue.js Projects", description: "Learned component-based front-end development through practical Vue.js projects." },
  { name: "Java 9 Programming for Modern Web Development" },
  { name: "HTML5 & JavaScript" },
];

const englishInfo = {
  ...info,
  name: "Gu Siwan",
  description:
    "<p><strong>11 years of experience · Java/Spring Back-end Development · Application Architect</strong><br>" +
    "Design, implementation, productization, delivery, and operations for HR, ERP, and electronic voucher solutions<br>" +
    "Team Lead and Development Project Lead experience · Technical design, development standards, collaboration, and schedule management<br>" +
    "Building Dorothy enterprise AI chatbot features · Document ingestion, search, answer generation, and source review</p>",
  email: "<strong>Contact</strong><br>For collaboration and career opportunities, please use the contact form below.",
  certification: info.certification.map((item, index) => ({
    ...item,
    name: [
      "AWS Certified Solutions Architect",
      "AWS Certified Cloud Practitioner",
      "Engineer Information Processing",
      "SQL Developer (SQLD)",
    ][index],
  })),
  experience: [
    {
      ...info.experience[0],
      name: "GS Bizple",
      date: "2025.06 – Present",
      sections: [
        {
          title: "USTRA AI Chatbot | Back-end Developer",
          items: [
            "Built admin features that collect files and groupware posts, support review and approval, and release approved content to test and production",
            "Built RAG search that combines vector and BM25 results with RRF and reorders them with a reranker",
            "Connected Claude, OpenAI, Gemini, and Ollama and blocked answer generation when the retrieved documents were not relevant enough",
            "Connected the React chatbot UI with JWT authentication, conversation history, and PDF or Word source previews",
          ],
        },
        {
          title: "USTRA HR System | Application Architect · PL",
          items: [
            "Designed the HR application architecture and configured development and production servers",
            "Designed and developed HR, organization, appraisal, training, recruitment, and payroll modules",
            "Managed AWS and Azure delivery environments, schedules, and quality",
          ],
        },
      ],
    },
    {
      ...info.experience[1],
      name: "ILJIN C&S",
      position: "R&D Team Lead · Back-end Developer",
      highlights: [
        "Led the design, development, and productization of electronic voucher and expense-management solutions",
        "Led a seven-person team of three back-end developers, three front-end developers, and one designer",
        "Designed the back-end architecture and data model and implemented core authentication and query features",
        "Developed integrations with ERP, card issuers, SSO, OCR, and other enterprise systems",
        "Built AWS and on-premises infrastructure and automated CI/CD delivery",
      ],
    },
    {
      ...info.experience[2],
      position: "Full Stack Developer · Development PL",
      highlights: [
        "Designed and developed HR, payroll, recruitment, attendance, and appraisal systems",
        "Designed data models, migrated data, and developed system-to-system interfaces",
        "Integrated SAP, card issuers, and external business systems",
        "Managed requirements, schedules, and development quality",
        "Improved and operated features in response to client requirements and policy changes",
      ],
    },
  ],
  skills: [
    { ...info.skills[0], title: "Back-end & Architecture", info: ["Java 17/21", "Spring Boot", "JPA", "QueryDSL", "MyBatis", "REST API", "Domain & Data Design"] },
    { ...info.skills[1], title: "Authentication, Authorization & SSO", info: ["Spring Security", "Authentication & Authorization Design", "SSO", "OAuth 2.0", "JWT", "External Identity Integration"] },
    { ...info.skills[2], title: "Data & Performance", info: ["MariaDB", "Oracle", "SQL Server", "Data Modeling", "SQL Tuning", "Indexes", "Execution Plans", "Transactions"] },
    { ...info.skills[3], title: "AI & System Integration", info: ["FastAPI", "RAG", "EmbeddingGemma", "FAISS", "OCR", "LLM", "Enterprise API Integration"] },
    { ...info.skills[4], title: "Cloud & Delivery", info: info.skills[4].info },
    { ...info.skills[5], title: "Leadership & Quality", info: ["Application Architect", "Tech Lead", "Development PL", "Development Standards", "Code Review", "JUnit 5", "Monitoring"] },
    { ...info.skills[6], title: "Front-end", info: info.skills[6].info },
  ],
  portfolio: info.portfolio.map((item, index) => ({ ...item, ...portfolioTranslations[index] })),
  portfolio_design: info.portfolio_design.map((item, index) => {
    const translation = awardTranslations[index];
    const localizedTitle = translation?.title ?? translation?.name;

    return {
      ...item,
      ...translation,
      pictures: item.pictures?.map((picture) => ({
        ...picture,
        title: localizedTitle ?? picture.title,
      })),
    };
  }),
  portfolio_education: info.portfolio_education.map((item, index) => {
    const translation = educationTranslations[index];

    return {
      ...item,
      ...translation,
      pictures: item.pictures?.map((picture) => ({
        ...picture,
        title: translation?.name ?? item.name,
      })),
    };
  }),
};

export function getLocalizedInfo(locale: string) {
  return locale === "en" ? englishInfo : info;
}
