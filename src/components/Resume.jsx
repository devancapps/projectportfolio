import React from 'react';

function Resume() {
  const skills = ['Skill 1', 'Skill 2', 'Skill 3'];

  return (
    <section>
      <h2>Resume</h2>
      <a href="path_to_your_resume">Download My Resume</a>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
