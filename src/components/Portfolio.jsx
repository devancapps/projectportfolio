import React from 'react';

import '../style/Portfolio.css';

function Portfolio() {
  const projects = [
    {
      // path to myfantastdraft.jpg in images folder
      title: 'An NBA Fantasy Draft Application',
      image: './images/myfantasydraft.jpg',
      link: 'https://myfantasydraft-3b76c1450b6a.herokuapp.com/',
      repo: 'https://github.com/DevonMcfarlen/MyFantasyDraft'
    },
    {
      title: 'TV Show Queue',
      image: './images/tvshowqueue.jpg',
      link: 'https://my-queue-proj2-17f6449399b4.herokuapp.com/',
      repo: 'https://github.com/devancapps/Binge-Watch'
    },
    {
      title: 'Weather Dashboard',
      image: './images/weatherdashboard.jpg',
      link: 'https://devancapps.github.io/Weather-Dashboard/',
      repo: 'https://github.com/devancapps/Weather-Dashboard'
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
