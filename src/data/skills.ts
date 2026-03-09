export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "C++", "SQL", "TypeScript", "MATLAB"],
  },
  {
    name: "ML / AI",
    skills: ["PyTorch", "scikit-learn", "Hugging Face", "XGBoost", "Stable-Baselines3"],
  },
  {
    name: "Data Engineering",
    skills: ["Spark SQL", "Kafka", "Docker", "ETL Pipelines"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL", "TimescaleDB", "MongoDB"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Linux", "Git", "CI/CD"],
  },
  {
    name: "Web / Tools",
    skills: ["Next.js", "Vue.js", "Streamlit", "FastAPI", "ROS"],
  },
];
