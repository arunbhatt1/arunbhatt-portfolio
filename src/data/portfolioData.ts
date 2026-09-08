import { Project, SkillCategory, EducationItem, ExperienceItem } from '../types';

export const personalInfo = {
  name: "Arun Bhatt",
  headline: "Computer Engineering Student & Developer",
  subheadline: "7th-Semester Computer Engineering Student at Sagarmatha Engineering College (SEC)",
  summary: "Computer Engineering undergraduate with practical experience across cross-platform mobile development (Flutter/Firebase), backend RESTful APIs (Node.js/Express with JWT authentication), and systems programming in C and C++. Demonstrates strong foundations in Data Structures & Algorithms, Object-Oriented Design, and Software Architecture, backed by 3 consecutive terms as elected Class Representative.",
  location: "Kathmandu / Lalitpur, Nepal",
  email: "arunbhattjb@gmail.com",
  phone: "+977 9860313523",
  github: "https://github.com/arunbhatt1",
  githubUsername: "arunbhatt1",
  linkedin: "https://linkedin.com/in/arun-bhatt-a61b4b299",
  resumePath: "/Arun_Bhatt_Resume.pdf",
  domain: "arunbhatt.com.np",
  avatarUrl: "/me.png",
  openToWork: true,
  statusBadge: "7th Sem BCT • Open to Opportunities",
};

export const heroStats = [
  { label: "Engineering Semester", value: "7th Sem" },
  { label: "Core Projects", value: "4+" },
  { label: "Leadership Terms", value: "3 Semesters (CR)" },
  { label: "Core Stacks", value: "Flutter • Node • C++" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", level: "Proficient", highlight: true },
      { name: "C", level: "Proficient", highlight: true },
      { name: "Dart", level: "Proficient", highlight: true },
      { name: "JavaScript (ES6+)", level: "Proficient", highlight: true },
      { name: "Python (basic)", level: "Basic" }
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: "Proficient", highlight: true },
      { name: "Dart", level: "Proficient", highlight: true },
      { name: "Firebase (Auth, Firestore, FCM)", level: "Proficient", highlight: true },
      { name: "Android Studio", level: "Familiar" }
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: "Proficient", highlight: true },
      { name: "Express.js", level: "Proficient", highlight: true },
      { name: "RESTful APIs", level: "Proficient", highlight: true },
      { name: "JWT Authentication", level: "Proficient", highlight: true },
      { name: "node-cron Schedulers", level: "Familiar" }
    ]
  },
  {
    title: "Frontend & Web",
    skills: [
      { name: "HTML5", level: "Proficient" },
      { name: "CSS3", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Proficient", highlight: true },
      { name: "Next.js (basic)", level: "Basic" },
      { name: "React & Tailwind CSS", level: "Familiar" }
    ]
  },
  {
    title: "CS Fundamentals & Architecture",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: "Proficient", highlight: true },
      { name: "Object-Oriented Programming (OOP)", level: "Proficient", highlight: true },
      { name: "MVC Architecture", level: "Proficient" },
      { name: "UML / DFD Modeling", level: "Proficient" },
      { name: "Automata Theory & Formal Grammars", level: "Familiar" },
      { name: "Digital Logic & K-maps", level: "Familiar" },
      { name: "VHDL", level: "Basic" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: "Proficient", highlight: true },
      { name: "GitHub", level: "Proficient", highlight: true },
      { name: "VS Code", level: "Proficient" },
      { name: "Overleaf (LaTeX)", level: "Proficient" },
      { name: "DataCamp", level: "Familiar" }
    ]
  },
  {
    title: "Leadership & Soft Skills",
    skills: [
      { name: "Team Leadership", level: "Proficient", highlight: true },
      { name: "Technical Documentation", level: "Proficient", highlight: true },
      { name: "Cross-functional Collaboration", level: "Proficient" },
      { name: "Public Speaking & Presentations", level: "Proficient" }
    ]
  },
  {
    title: "Spoken Languages",
    skills: [
      { name: "Nepali (Native)", level: "Proficient" },
      { name: "English (Professional)", level: "Proficient" },
      { name: "Hindi", level: "Proficient" },
      { name: "Doteli", level: "Proficient" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "medication-adherence-app",
    title: "Cloud-Based Medication Adherence Monitoring Application",
    category: "Mobile & Cloud",
    role: "Full-Stack Mobile & Backend Developer (Team of 4)",
    year: "2024",
    shortDescription: "Cross-platform mobile healthcare system featuring real-time Firestore sync, role-based access, automated dose scheduling, and AI chatbot clinical explanations.",
    fullDescription: [
      "Engineered a cross-platform mobile application (Android/iOS) as a major collaborative coursework project with a team of four.",
      "Implemented real-time Firestore data synchronization with strict role-based access control for 4 user tiers: Supervisor, Doctor, Nurse, and Patient.",
      "Architected a JWT-secured Node.js/Express REST API backend paired with a node-cron scheduler for automated dose reminders and Firebase Cloud Messaging (FCM) push notifications.",
      "Integrated an AI assistant powered by Groq API to translate complex clinical terminology into accessible explanations for patients.",
      "Authored comprehensive engineering documentation including UML/DFD architecture diagrams and a formal LaTeX report on Overleaf."
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Cloud Messaging (FCM)",
      "Node.js",
      "Express.js",
      "JWT Auth",
      "node-cron",
      "Groq API",
      "LaTeX / Overleaf"
    ],
    featured: true,
    githubUrl: "https://github.com/arunbhatt1",
    architectureHighlights: [
      "Role-Based Access: Supervisor, Doctor, Nurse, Patient",
      "Push Notifications via FCM & cron scheduler",
      "AI Clinical Assistant via Groq API"
    ]
  },
  {
    id: "snake-game-cpp",
    title: "Graphical Snake Game Engine",
    category: "Systems & Graphics",
    role: "Team Leader & Lead Developer",
    year: "2023",
    shortDescription: "Classic interactive graphical Snake game built in C++ featuring real-time game loop architecture, collision detection, and dynamic score tracking.",
    fullDescription: [
      "Led a development team in building a graphical desktop Snake game using C++ and the graphics.h library for the Computer Graphics course.",
      "Engineered core game loop mechanics, smooth boundary collision handling, responsive directional controls, and high-score persistence.",
      "Conducted the final technical presentation to faculty as Team Leader, demonstrating architecture, algorithm design, and coordinate transformations."
    ],
    technologies: [
      "C++",
      "graphics.h",
      "Computer Graphics",
      "Game Loop Architecture",
      "Collision Algorithms"
    ],
    featured: true,
    githubUrl: "https://github.com/arunbhatt1",
    architectureHighlights: [
      "Custom game loop & rendering pipeline",
      "Coordinate collision boundary detection",
      "Team presentation to university faculty"
    ]
  },
  {
    id: "task-scheduler-cpp",
    title: "Task Scheduler Application",
    category: "DSA & Algorithms",
    role: "Coursework Project Developer",
    year: "2023",
    shortDescription: "High-performance event scheduling system using min/max priority queues (heaps) and linked lists to resolve temporal scheduling conflicts.",
    fullDescription: [
      "Designed and implemented an event scheduling engine in C++ as part of Data Structures & Algorithms coursework.",
      "Utilized priority queues and linked list structures to efficiently sort, prioritize, and dispatch tasks according to scheduled deadlines.",
      "Implemented algorithmic conflict resolution routines to detect and manage overlapping schedules and resource bottlenecks."
    ],
    technologies: [
      "C++",
      "Data Structures (DSA)",
      "Priority Queues / Heaps",
      "Linked Lists",
      "Conflict Resolution"
    ],
    featured: false,
    githubUrl: "https://github.com/arunbhatt1",
    architectureHighlights: [
      "Heap-based priority dispatching",
      "O(log n) task insertion & extraction",
      "Algorithmic conflict detection"
    ]
  },
  {
    id: "quiz-application-cpp",
    title: "Object-Oriented Quiz Application",
    category: "OOP",
    role: "Software Developer",
    year: "2022",
    shortDescription: "Modular console quiz engine rigorously demonstrating core OOP paradigms: encapsulation, inheritance, and polymorphism.",
    fullDescription: [
      "Designed a robust console-based interactive quiz application adhering strictly to OOP principles in C++.",
      "Applied encapsulation for secure state handling, class inheritance for polymorphic question types, and dynamic dispatching for scoring mechanisms.",
      "Created an extensible architecture allowing straightforward addition of new question categories and persistence of participant scores."
    ],
    technologies: [
      "C++",
      "Object-Oriented Programming (OOP)",
      "Polymorphism",
      "Inheritance & Encapsulation",
      "Console UI"
    ],
    featured: false,
    githubUrl: "https://github.com/arunbhatt1",
    architectureHighlights: [
      "Polymorphic question dispatch",
      "Encapsulated player scoring state",
      "Clean modular class hierarchy"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    organization: "Sagarmatha Engineering College (SEC)",
    department: "Department of Electronics & Computer Engineering (BCT)",
    role: "Class Representative (CR)",
    period: "5th Sem – Present (3 Consecutive Semesters)",
    location: "Sanepa, Lalitpur",
    highlights: [
      "Democratically elected and consistently re-confirmed as Class Representative across 5th, 6th, and 7th semesters.",
      "Acted as the official liaison between the student body and faculty / department administration to resolve academic, lab, and scheduling matters.",
      "Organized student review sessions, project presentation timetables, and coordinated cross-team coursework deliverables."
    ]
  },
  {
    organization: "Modern Montessori Bal Vidyalaya",
    role: "Student Body President",
    period: "2019 – 2020",
    location: "Kanchanpur, Nepal",
    highlights: [
      "Elected school president for Grade 10, representing overall student interests directly to the school administration.",
      "Structured and founded student-led collaborative initiatives, cultural programs, and academic competitions.",
      "Fostered a collaborative, disciplined school environment and organized student welfare activities."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    institution: "Sagarmatha Engineering College (SEC)",
    degree: "Bachelor of Engineering in Computer Engineering (BCT)",
    period: "Expected Mid-2027 (Currently 7th Semester)",
    location: "Sanepa, Lalitpur, Nepal",
    status: "Currently in 7th Semester",
    details: [
      "Affiliated with Tribhuvan University (IOE curriculum).",
      "Key coursework: Data Structures & Algorithms, Object-Oriented Analysis & Design, Database Management Systems, Computer Networks, Operating Systems, Software Engineering, Digital Logic, Automata Theory."
    ]
  },
  {
    institution: "Morning Glory Secondary School",
    degree: "+2 Science, Higher Secondary Education",
    period: "2020 – 2022",
    location: "Kanchanpur, Nepal",
    details: [
      "Majors: Physics, Chemistry, Mathematics, and Computer Science.",
      "Built solid foundation in analytical thinking, logic, and mathematics."
    ]
  },
  {
    institution: "Modern Montessori Bal Vidyalaya",
    degree: "Secondary Education (SEE)",
    period: "Graduated 2020",
    location: "Kanchanpur, Nepal",
    details: [
      "Completed Secondary Education Examination (SEE) with high academic distinction.",
      "Served concurrently as Student Body President."
    ]
  }
];

export const githubProfile = {
  url: "https://github.com/arunbhatt1",
  username: "arunbhatt1",
  bio: "Computer Engineering Student @ Sagarmatha Engineering College | Flutter, Node.js, C++",
  pinnedRepositories: [
    {
      name: "Medication-Adherence-System",
      description: "Cloud-Based Medication Adherence Monitoring App with Flutter, Firebase, Node.js REST API & Groq AI clinical chatbot.",
      language: "Dart",
      stars: "Minor Project",
      topics: ["flutter", "firebase", "nodejs", "jwt-auth", "groq-api"]
    },
    {
      name: "Snake-Game-CPP",
      description: "Graphical Snake game implementing game loop, collision detection, and score tracking with graphics.h in C++.",
      language: "C++",
      stars: "Computer Graphics",
      topics: ["cpp", "graphics-h", "game-loop", "algorithms"]
    },
    {
      name: "DSA-Task-Scheduler",
      description: "Conflict-resolving task scheduling engine utilizing min/max priority queues and linked lists.",
      language: "C++",
      stars: "DSA Coursework",
      topics: ["cpp", "dsa", "priority-queue", "heaps"]
    },
    {
      name: "OOP-Quiz-System",
      description: "Console-based interactive quiz engine applying OOP principles (encapsulation, inheritance, polymorphism).",
      language: "C++",
      stars: "OOP Coursework",
      topics: ["cpp", "oop", "polymorphism", "console-app"]
    }
  ]
};

export const codeSnippet = {
  fileName: "developer_profile.json",
  content: `{
  "name": "Arun Bhatt",
  "education": "B.E. Computer Engineering (7th Sem)",
  "institution": "Sagarmatha Engineering College",
  "location": "Kathmandu / Lalitpur, Nepal",
  "roles": ["Full-Stack Mobile Dev", "Backend REST Dev", "Systems & C++"],
  "primary_stack": {
    "mobile": ["Flutter", "Dart", "Firebase"],
    "backend": ["Node.js", "Express.js", "JWT"],
    "systems": ["C", "C++", "DSA", "OOP"]
  },
  "leadership": "3x Elected Class Representative (5th, 6th, 7th Sem)",
  "status": "Available for Opportunities",
  "domain": "arunbhatt.com.np"
}`
};
