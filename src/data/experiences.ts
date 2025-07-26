export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  //location: string
  description: string[]
  technologies: string[]
  projects: {
    name: string
    description: string
    impact: string
  }[]
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Llewellyn & Partners Co. Ltd.",
    position: "Data Scientist",
    duration: "2024 - 2024",
    description: [
      "Developed and deployed NLP and document processing solutions for data platforms with thousands of users",
      "Conducted site visits to gather client requirements, informing platform development.",
      "Managed Software Lifecycle by implementing Agile workflows using Jira and GitHub."
    ],
    technologies: ["Python", "LLM", "AWS", "Docker", "JavaScript", "OpenCV"],
    projects: [
      {
        name: "Interactive Chatbot",
        description: "Powered by an LLM using LangChain and Docker on AWS, provide immidiate customer support.",
        impact: "Improving user engagement and automating customer support by 25%"
      },
      {
        name: "Automated Pipelines for Document Data Extraction",
        description: "Developed and trained automated pipelines for document data extraction using OpenCV and NLP.",
        impact: "Achieving a 20% increase in processing efficiency."
      }
    ]
  },
  {
    id: "2",
    company: "Hong Kong Applied Science and Technology Research Institute (ASTRI)",
    position: "Engineer",
    duration: "2021 - 2023",
    description: [
      "Served as a machine learning-focused backend developer to create automation systems.",
      "Stayed updated on recent technology and applied them into production.",
      "Collaborated with cross-functional teams using Agile methodologies."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "MongoDB", "Python", "C#", "Azure"],
    projects: [
      {
        name: "Document Recognition, Information Extraction, and Automation",
        description: "Established an automated pipeline for extracting text and layouts from images using C++, C#.",
        impact: "Reducing 70% processing time in document classification."
      },
      {
        name: "KOL Platform - KOOLER AI",
        description: "Classified company logos and human faces using Python with YOLO and MLflow on Azure",
        impact: "Successfully created a product that generate over $1M revenue each year."
      }
    ]
  }
]
