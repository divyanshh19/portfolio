export const personalInfo = {
  name: "Divyansh Dubey",
  location: "Bengaluru, Karnataka, India",
  email: "divyanshdubey1292@gmail.com",
  phone: "+91-9019262105",
  github: "divyanshh19",
  githubUrl: "https://github.com/divyanshh19",
  linkedin: "divyansh-dubey-83648a244",
  linkedinUrl: "https://www.linkedin.com/in/divyansh-dubey-83648a244",
  instagramUrl: "https://instagram.com/divyansh_dubey62",
  leetcodeUrl: "https://leetcode.com/divyansh_dubey62/",
  resumeUrl: "https://drive.google.com/file/d/1OQ9nzJA7A_XT9Qwl_D-eCIutivWDLSrp/view?usp=drivesdk",
  primaryRole: "Java Backend Developer | Full-Stack Developer | AI/ML Enthusiast",
  shortIntro: "Building secure, scalable backend systems and intelligent applications using Java, Spring Boot, React, and modern AI/ML technologies.",
  summary: "Aspiring Java Backend Developer with hands-on experience in Java, Spring Boot, Spring Security, MySQL, REST APIs, and JWT authentication. Strong foundation in OOP, Data Structures and Algorithms, with practical experience in Machine Learning, Computer Vision, and Generative AI."
};

export const aboutPillars = [
  {
    title: "Backend Engineering",
    icon: "Server",
    skills: ["Java", "Spring Boot", "REST APIs", "Spring Security", "JWT", "MySQL"],
    description: "Architecting production-ready microservices, implementing JWT auth, and building robust RESTful APIs with Spring Boot."
  },
  {
    title: "AI / ML Integration",
    icon: "Brain",
    skills: ["PyTorch", "CNNs", "Vision Transformers", "Computer Vision", "LLM Integration"],
    description: "Developing deep learning vision pipelines, ensemble neural networks, and integrating LLMs like GPT-4o-mini & Nemotron 3.5."
  },
  {
    title: "Problem Solving",
    icon: "Code2",
    skills: ["Data Structures", "Algorithms", "Java", "LeetCode (2x 100 Days Streak)"],
    description: "Consistent daily problem solving in Data Structures and Algorithms with clean, optimized Java solutions."
  }
];

export const skillsData = {
  Languages: ["Java", "Python", "C", "SQL"],
  Backend: ["Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs", "JWT", "Hibernate", "BCrypt"],
  Frontend: ["HTML", "CSS", "JavaScript", "React.js"],
  "Machine Learning": ["PyTorch", "CNNs", "Vision Transformers", "Computer Vision", "Image Classification", "LLM Integration"],
  Databases: ["MySQL", "MongoDB"],
  "Cloud & Deployment": ["Docker", "Render", "Vercel", "Cloudinary", "Aiven Cloud MySQL"],
  Tools: ["Git", "GitHub", "Postman"],
  "Core Concepts": ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Computer Networks"]
};

export const projectsData = [
  {
    id: "e-tradeloop",
    title: "E-TradeLoop",
    subtitle: "AI & LLM-Powered Barter E-Commerce Platform",
    tagline: "An AI and LLM-powered barter marketplace enabling cashless product exchanges through a points-based trading system.",
    techStack: ["Java 21", "Spring Boot", "React.js", "MySQL", "Spring Security", "JWT", "LLM", "Cloudinary", "Docker"],
    highlights: [
      "Developed a full-stack AI and LLM-powered barter marketplace enabling cashless product exchanges through a points-based trading system using Spring Boot, React.js, and MySQL.",
      "Designed and secured 15+ RESTful APIs using Spring Boot, Spring Security, JWT, BCrypt, and role-based authorization for users and administrators.",
      "Integrated OpenAI GPT-4o-mini to develop LoopBot, an AI chatbot with generative product descriptions and an AI-powered trade fairness checker with a rule-based fallback mechanism.",
      "Integrated Cloudinary for cloud-based image management, implemented dynamic product search using JPA Specifications."
    ],
    architecture: {
      backend: ["React Frontend", "Spring Boot REST API", "Spring Security / JWT", "Service Layer", "JPA / Hibernate", "MySQL"],
      ai: ["Spring Boot", "OpenAI GPT-4o-mini", "LoopBot / Product Description / Trade Fairness"],
      flow: ["Product", "Marketplace", "Barter / Points System", "AI Fairness Checker", "Trade Decision"]
    },
    githubUrl: "https://github.com/divyanshh19",
    liveDemoUrl: "https://e-barter-ai-trade-loop-ten.vercel.app",
    badgeText: "Spring Boot + AI Chatbot",
    isFeatured: true
  },
  {
    id: "derma-ai",
    title: "DermaAI",
    subtitle: "AI Skin Lesion Detection & Medical Assistant System",
    tagline: "An AI-powered skin lesion detection and medical assistant system combining a Spring Boot microservices architecture with Python-based ML and LLM services.",
    techStack: ["Java", "Spring Boot", "Python", "PyTorch", "CNNs", "ViT", "FastAPI", "OpenCV", "MySQL", "React", "Docker"],
    highlights: [
      "Built a Spring Boot microservices architecture integrating Python-based ML and LLM services with MySQL and REST APIs.",
      "Developed a CNN + ViT ensemble using EfficientNet-B0, ConvNeXt-Tiny, and DeiT-Tiny on HAM10000, achieving 93.27% ROC-AUC with Focal Loss and Temperature Scaling.",
      "Integrated NVIDIA Nemotron 3.5 with medical safety guardrails to generate patient-friendly explanations.",
      "Implemented OpenCV preprocessing with DullRazor and CLAHE and added Grad-CAM for visual model explainability."
    ],
    architecture: {
      backend: ["React", "Spring Boot", "REST APIs", "Python ML Service / FastAPI", "PyTorch Model", "CNN + ViT Ensemble"],
      ai: ["Spring Boot", "NVIDIA Nemotron 3.5", "Safety Guardrails", "Patient-Friendly Explanation"],
      pipeline: ["Image", "OpenCV Preprocessing", "DullRazor / CLAHE", "CNN + ViT Ensemble", "Prediction", "Grad-CAM Explainability"]
    },
    metric: {
      label: "ROC-AUC Score",
      value: "93.27%",
      detail: "Evaluated on HAM10000 with Focal Loss & Temperature Scaling"
    },
    githubUrl: "https://github.com/divyanshh19",
    liveDemoUrl: "https://dermaai-kohl.vercel.app/",
    badgeText: "93.27% ROC-AUC Ensemble",
    isFeatured: true
  }
];

export const achievementsData = [
  {
    id: "leetcode",
    title: "LeetCode 100 Days Streak Badges",
    category: "DSA & Problem Solving",
    description: "Earned two 100 Days Streak Badges on LeetCode, demonstrating consistent problem-solving in Data Structures and Algorithms.",
    badge: "2x 100 Days",
    icon: "Trophy"
  },
  {
    id: "workshop",
    title: "Technical Workshop Instructor",
    category: "Mentorship & Community",
    description: "Delivered a technical workshop on Web Development (HTML, CSS, JavaScript) and Git Version Control at RNSIT.",
    badge: "Workshop Lead",
    icon: "Presentation"
  },
  {
    id: "hackathons",
    title: "Hackathons & Project Showcases",
    category: "Competitive Coding",
    description: "Secured top rankings in multiple college-level hackathons and project showcases.",
    badge: "Top Ranker",
    icon: "Award"
  },
  {
    id: "sih",
    title: "Smart India Hackathon (SIH)",
    category: "National Level Selection",
    description: "Selected for the Smart India Hackathon (SIH) at the college level among 80+ competing teams.",
    badge: "Selected (80+ Teams)",
    icon: "Target"
  }
];

export const educationData = [
  {
    degree: "B.E. (Honors) in Computer Science and Engineering with Artificial Intelligence & Machine Learning",
    institution: "RNS Institute of Technology, Bengaluru",
    period: "2023 – 2027",
    score: "CGPA: 8.80 / 10",
    isCurrent: true
  }
];

export const certificationsData = [
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    icon: "Cpu"
  },
  {
    title: "Fundamentals of Java Programming",
    issuer: "Certification Assessment",
    icon: "Coffee"
  },
  {
    title: "Databases and SQL",
    issuer: "Certification Assessment",
    icon: "Database"
  },
  {
    title: "Generative AI for Java and Spring Developers",
    issuer: "Google",
    icon: "Sparkles"
  },
  {
    title: "Data Structures and Algorithms with Java",
    issuer: "Certification Assessment",
    icon: "Code"
  }
];
