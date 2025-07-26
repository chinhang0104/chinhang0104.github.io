export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  duration: string
  honour: string
  description: string
  coursework: string[]
  projects?: {
    name: string
    description: string
    technologies: string[]
    github?: string
  }[]
}

export const education: Education[] = [
  {
    id: "1",
    institution: "The Hong Kong University of Science and Technology",
    degree: "Master of Engineering",
    field: "Big Data Technology",
    duration: "2020 - 2021",
    honour: "Upper Second Class Honours",
    description: "Specialized in artificial intelligence and machine learning with focus on deep learning and natural language processing.",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Statistical Methods"
    ],
    projects: [
      {
        name: "Traffic Speed Estimation",
        description: "Using xgboost with GridSearchCV to predict traffic speed.",
        technologies: ["Python", "Sklearn", "Xgboost", "Pandas"],
        github: "https://github.com/chinhang0104/Predict-traffic-speed-using-XGB"
      },
      {
        name: "Predicting COVID-19 using Graph Neural Network",
        description: "Built a Graph Neural Network model utilizing outputs from traditional SIR model, achieved mean squared log error of 3.60.",
        technologies: ["Python", "PyTorch", "Sklearn", "Networkx", "Dgl"],
        github: "https://github.com/chinhang0104/Predicting-COVID-19-using-GNN"
      },
      {
        name: "Credit Card Default Detection",
        description: "Using various machine learning and deep learning models with model ensemble to predict credit card default.",
        technologies: ["Python", "Sklearn", "Tensorflow", "Pandas", "SMOTE"],
        github: "https://github.com/chinhang0104/Credit-Card-Default-Detection-using-Machine-Learning-Deep-Learning"
      }
    ]
  },
  {
    id: "2",
    institution: "The Hong Kong University of Science and Technology",
    degree: "Bachelor of Science",
    field: "Mathematics and Economics",
    duration: "2012 - 2016",
    honour: "Upper Second Class Honours",
    description: "Comprehensive program combining statistics, economy, and domain expertise with hands-on experience in quantatative analysis.",
    coursework: [
      "Statistics and Probability",
      "Economy",
      "Linear Algebra",
      "Calculus",
    ]
  }
]
