export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  expiryDate?: string
  credentialId: string
  //badge: string
  description: string
  skills: string[]
  verificationUrl: string
}

export const certifications: Certification[] = [
  {
    "id": "1",
    "name": "AWS Certified Machine Learning - Specialty",
    "issuer": "Amazon Web Services",
    "date": "2024",
    "expiryDate": "2027",
    "credentialId": "97f3064784554484b45f468292b3ae78",
    "description": "Certification recognizing expertise in designing, implementing, deploying, and maintaining machine learning solutions using AWS services.",
    "skills": [
      "AWS Architecture",
      "Security",
      "Cost Optimization",
      "Performance",
      "Reliability",
      "Machine Learning",
      "Data Engineering",
      "Model Deployment"
    ],
    "verificationUrl": "https://aws.amazon.com/verification"
  },
  {
    "id": "2",
    "name": "Microsoft Certified: Azure Data Scientist Associate",
    "issuer": "Microsoft",
    "date": "2024",
    "expiryDate": "2025",
    "credentialId": "FC28AF49FAA244DA",
    "description": "Certification validating proficiency in applying data science and machine learning techniques using Azure tools and services.",
    "skills": [
      "BigQuery",
      "Dataflow",
      "Pub/Sub",
      "Machine Learning",
      "Data Pipeline"
    ],
    "verificationUrl": "https://cloud.google.com/certification/verification"
  },
  {
    "id": "3",
    "name": "AWS Certified AI Practitioner",
    "issuer": "Amazon Web Services",
    "date": "2024",
    "expiryDate": "2027",
    "credentialId": "4b526471b47c451692d7bdf4b47f5c83",
    "description": "Credential demonstrating foundational knowledge and practical skills in applying artificial intelligence and machine learning on AWS.",
    "skills": [
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "NLP",
      "TensorFlow"
    ],
    "verificationUrl": "https://aws.amazon.com/verification"
  },
  {
    "id": "4",
    "name": "AWS Certified Machine Learning Engineer - Associate",
    "issuer": "Amazon Web Services",
    "date": "2024",
    "expiryDate": "2027",
    "credentialId": "b019894a56fe41349bac662f1b63c59a",
    "description": "Certification for validating abilities in building, training, tuning, and deploying machine learning models on AWS.",
    "skills": [
      "Kubernetes",
      "Container Orchestration",
      "DevOps",
      "Cloud Native",
      "Docker",
      "Model Training",
      "Hyperparameter Tuning"
    ],
    "verificationUrl": "https://aws.amazon.com/verification"
  },
  {
    "id": "5",
    "name": "AWS Certified Cloud Practitioner",
    "issuer": "Amazon Web Services",
    "date": "2024",
    "expiryDate": "2027",
    "credentialId": "c9e8d2c03f1a4b0ca192dc9a56f18ca2",
    "description": "Entry-level certification confirming overall understanding of AWS Cloud, its core services, security, and billing.",
    "skills": [
      "AWS Cloud Basics",
      "Security",
      "Billing",
      "Cloud Concepts"
    ],
    "verificationUrl": "https://aws.amazon.com/verification"
  },
  {
    "id": "6",
    "name": "Chartered Financial Analyst (CFA) Level 2",
    "issuer": "Chartered Financial Analysts",
    "date": "2023",
    "expiryDate": "NIL",
    "credentialId": "NIL",
    "description": "Professional certification that demonstrates advanced knowledge and application of investment analysis, asset valuation, and portfolio management.",
    "skills": [
      "Investment Analysis",
      "Asset Valuation",
      "Portfolio Management",
      "Financial Reporting"
    ],
    "verificationUrl": "https://www.cfainstitute.org/"
  },
  {
    "id": "7",
    "name": "IBM Data Science Specialization",
    "issuer": "Coursera",
    "date": "2023",
    "expiryDate": "NIL",
    "credentialId": "VCASAA6MXXCV",
    "description": "Certification program covering the essential skills and tools for data science, including data visualization, analysis, and machine learning with Python.",
    "skills": [
      "Data Visualization",
      "Data Analysis",
      "Machine Learning",
      "Python Programming",
      "Statistics"
    ],
    "verificationUrl": "https://www.coursera.org/account/accomplishments/specialization/VCASAA6MXXCV"
  }
]


