export interface SkillCategory {
  name: string
  skills: {
    name: string
    level: number // 1-100
    icon?: string
  }[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "R", level: 85 },
      { name: "SQL", level: 90 },
      { name: "Java", level: 75 },
      { name: "Go", level: 70 }
    ]
  },
  {
    name: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 95 },
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 90 },
      { name: "OpenCV", level: 80 }
    ]
  },
  {
    name: "Web Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Terraform", level: 70 },
      { name: "Git", level: 95 }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Elasticsearch", level: 75 },
      { name: "Apache Spark", level: 80 },
      { name: "Kafka", level: 75 }
    ]
  }
]
