import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const githubUsername = "harryvtripathi"; // Replace with your GitHub username

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`);
        // Filter or take the top N repositories you want to showcase
        setRepos(response.data.slice(0, 6)); // Showcasing the 6 most recently updated repos
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchRepos();
  }, [githubUsername]);

  // You still might want a static list for projects not on GitHub or for more detail
  const staticProjects = [
    {
      name: "Vegetable Classification",
      description: "Developed a model to classify vegetables with high accuracy, showcasing deep learning skills.",
      html_url: "https://github.com/HarryVTripathi/vegetables",
    },
    // Add other key projects here
  ];

  return (
    <section id="projects">
      <h2>🚀 Projects</h2>
      <div className="project-list">
        {staticProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3><a href={project.html_url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
            <p>{project.description}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;

