export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: 'Machine Learning' | 'Web Development' | 'Data Analysis' | 'Mobile App' | 'DevOps' | 'Image Processing' | 'Natural Language Processing'
  image?: string
  github: string
  live?: string
  featured: boolean
  status?: 'Completed' | 'In Progress' | 'Maintenance'
  date: string
  metrics?: {
    users?: string
    performance?: string
    impact?: string
  }
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Interactive Chatbot Engine",
    description: "Deployment ready Chatbot application using LangGraph",
    longDescription: "Sophisticated interactive Chatbot system using LLM and LangGraph technology. Capable of search documents using RAG and gather knowledge from web search. Also comes with a web demo with API intergration with backend.",
    technologies: ["Python", "LangGraph", "PostgreSQL", "Docker", "ReactJs"],
    category: "Natural Language Processing",
    image: "/images/chatbot.jpg",
    github: "https://github.com/chinhang0104/LangGraph-deploy",
    featured: true,
    status: "Completed",
    date: "2025",
  },
  {
    id: "2",
    title: "YOLO Image Classification with MLflow",
    description: "Demonstration for training a YOLO image classification model with local MLflow logging.",
    longDescription: "This project provides a hands-on demonstration of training a YOLO image classification model while leveraging MLflow for comprehensive experiment tracking. By utilizing MLflow's logging capabilities, users can efficiently monitor model performance, visualize metrics, and manage different training runs, making it easier to optimize their machine learning workflows. ",
    technologies: ["Python", "OpenCV", "MLflow", "YOLO"],
    category: "Machine Learning",
    image: "/images/yolo.jpg",
    github: "https://github.com/chinhang0104/Yolo_mlflow",
    featured: true,
    status: "Completed",
    date: "2025",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "Responsive portfolio website built with Next.js and TypeScript",
    longDescription: "Modern, responsive portfolio website showcasing projects and experience. Built with performance and SEO in mind, featuring dark mode, smooth animations, and optimal loading speeds.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React.js"],
    category: "Web Development",
    image: "/images/web.png",
    github: "https://github.com/chinhang0104/chinhang0104.github.io",
    live: "https://chinhang0104.github.io",
    featured: true,
    status: "Maintenance",
    date: "2023",
  },
  {
    id: "4",
    title: "Ensemble Learning for Named Entity Recognition",
    description: "Platform for ensemble learning in the field of Named Entity Recognition.",
    longDescription: "This repository includes the integrated NER packages, demos, and performance analysis on a public benchmark.",
    technologies: ["Python", "NLTK", "Spacy", "LAC", "Stanza", "Hanlp", "Numpy"],
    category: "Natural Language Processing",
    image: "/images/ner.jpg",
    github: "https://github.com/chinhang0104/Ensemble-Learning-for-Named-Entity-Recognition",
    featured: false,
    status: "Completed",
    date: "2021",
  },
  {
    id: "5",
    title: "Image Rotation",
    description: "Demonstration for image preprocessing technique.",
    longDescription: "Rotate a image to the correct angle given horizontal and vertical lines. Can be applied to forms and images for preprocessing before processed by ML and NLP tasks",
    technologies: ["Python", "OpenCV", "C++"], 
    category: "Image Processing",
    image: "/images/rotate.png",
    github: "https://github.com/chinhang0104/Image-Rotation",
    featured: false,
    status: "Completed",
    date: "2023",
  }
]
