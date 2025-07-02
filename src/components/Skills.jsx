import React from 'react';
import './Skills.css';

const skillsData = {
  "Programming Languages": ["Python"],
  "Libraries & Frameworks": ["Scikit-learn", "TensorFlow", "PyTorch", "Langchain", "Langgraph", "FastAPI"],
  "Databases": ["PostgreSQL", "MySQL", "Redis"],
  "Tools & Platforms": ["Git", "Docker", "Jupyter Notebooks", "AWS", "Azure"]
};

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skillsList]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul className="skill-list">
              {skillsList.map(skill => (
                <li key={skill} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;