import {
  Brain,
  Code,
  LineChart,
  Cpu,
  MonitorPlay,
  PenTool,
  Bot,
  
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Bilal Mushtaq",
    headline: "AI Automation Developer | Software Developer | Civil & Water Resources Engineer",
    shortDescription:
      "I build AI-powered applications, automation systems, intelligent assistants, data-driven tools, and practical engineering solutions.",
    github: "https://github.com/bmushtaq65-eng",
    location: "Jammu & Kashmir, India",
    email: "bilal.mushtaq169@gmail.com", 
    linkedin: "https://www.linkedin.com/in/bilal-mushtaq-civil", phone: "+91-9484281015", 
  },
  capabilities: [
    {
      title: "AI Automation",
      description: "AI agents, workflow automation, intelligent assistants and task automation.",
      icon: Bot,
    },
    {
      title: "AI-Powered Applications",
      description: "Applications that combine AI models with practical user workflows.",
      icon: Brain,
    },
    {
      title: "Software Development",
      description: "Web applications, tools, APIs, Python applications and automation systems.",
      icon: Code,
    },
    {
      title: "Data & Analytics",
      description: "Data processing, visualization, analysis and decision-support tools.",
      icon: LineChart,
    },
    {
      title: "Engineering Applications",
      description: "Civil engineering and water-resources related computational applications.",
      icon: Cpu,
    },
    {
      title: "Developer Tools",
      description: "GitHub-based projects, developer utilities and productivity tools.",
      icon: PenTool,
    },
  ],
  projects: [
    {
      name: "Stock Analyzer",
      description:
        "An AI-assisted stock analysis application designed to collect market information, technical indicators, charts, support/resistance levels and different time-horizon analysis to help users research stocks.",
      category: "AI & Data Application",
      github: "https://github.com/bmushtaq65-eng/stock-analyzer",
      live: "https://stock-analyzer-i6j5e5wgujndqisabqhhaz.streamlit.app/",
      icon: LineChart,
    },
    {
      name: "Expert Solvers Hub",
      description:
        "An application/project focused on solving practical problems through technology.",
      category: "Software Development",
      github: "https://github.com/bmushtaq65-eng/expert-solvers-hub",
      icon: MonitorPlay,
    },
    {
      name: "WaterLab",
      description:
        "An engineering-focused software project related to water resources.",
      category: "Engineering Application",
      github: "https://github.com/bmushtaq65-eng/waterlab",
      icon: Cpu,
    },
    {
      name: "BeamLab",
      description:
        "An engineering/computational project.",
      category: "Engineering Application",
      github: "https://github.com/bmushtaq65-eng/beamlab",
      icon: Cpu,
    },
    {
      name: "Personal Website",
      description:
        "My personal portfolio website (this project).",
      category: "Web Development",
      github: "https://github.com/bmushtaq65-eng/website",
      icon: FaGithub,
    },
  ],
  skills: {
    programming: ["Python", "Java", "SQL", "JavaScript/TypeScript"],
    ai: [
      "AI agents",
      "AI automation",
      "OpenJarvis",
      "Ollama",
      "Whisper",
      "LLM integration",
      "Prompt engineering",
      "Workflow automation",
    ],
    data: ["Pandas", "Excel", "Google Sheets", "Tableau", "SPSS"],
    engineering: [
      "AutoCAD",
      "EPANET",
      "MATLAB",
      "Simulink",
      "EES",
      "Water resources engineering",
      "Civil engineering",
    ],
    tools: ["Git", "GitHub", "VS Code", "NetBeans", "DBeaver"],
  },
  education: [
    {
      degree: "M.Tech Water Resources Engineering",
      institution: "National Institute of Technology, Srinagar",
      period: "2021–2023",
      details:
        'Thesis: "Bursting Phenomenon in Multi-Layered Vegetated Compound Channel" - Experimental investigation and analysis of flow behavior in vegetated compound channels.',
    },
    {
      degree: "B.E. Civil Engineering",
      institution: "University of Kashmir",
      period: "2016–2020",
    },
  ],
  experience: [
    {
      role: "Online Tutor",
      company: "Filo",
      location: "Srinagar, Jammu & Kashmir",
      period: "September 2021 – Present",
      highlights: [
        "Online tutoring",
        "Communication",
        "Problem solving",
        "Teaching",
        "Technical explanation",
        "Working with students remotely",
      ],
    },
    {
      role: "Online Tutor",
      company: "Chegg India",
      period: "September 2021 – March 2022",
      highlights: [
        "Online academic support",
        "Problem solving",
        "Written communication",
        "Technical explanations",
      ],
    },
  ],
  whyWorkWithMe: [
    {
      title: "Engineering Mindset",
      description: "Strong analytical and problem-solving foundation from engineering.",
    },
    {
      title: "AI First",
      description: "Focused on using AI to automate real-world workflows.",
    },
    {
      title: "Builder Mentality",
      description: "I learn by building practical applications and experiments.",
    },
    {
      title: "Cross-Domain Thinking",
      description: "Combines engineering, software, data and AI.",
    },
  ],
};
