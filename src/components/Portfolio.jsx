import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'path_to_project',
      link: 'deployed_link_project',
      repo: 'github_repo_link_project'
    },
    {
      title: 'Project 2',
      image: 'path_to_project',
      link: 'deployed_link_project',
      repo: 'github_repo_link_project'
    },
    {
      title: 'Project 3',
      image: 'path_to_project',
      link: 'deployed_link_project',
      repo: 'github_repo_link_project'
    }
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Deployed App</a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
