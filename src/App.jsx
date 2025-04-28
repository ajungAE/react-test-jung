// src/App.jsx
import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  const profiles = [
    {
      name: "Jane Doe",
      description: "Web Developer aus Berlin",
      skills: ["JavaScript", "React", "CSS"],
    },
    {
      name: "Max Mustermann",
      description: "Backend Spezialist aus Hamburg",
      skills: ["Node.js", "Express", "MongoDB"],
    },
    {
      name: "Sara Müller",
      description: "UI/UX Designerin aus München",
      skills: ["Figma", "Adobe XD", "HTML/CSS"],
    },
  ];

  return (
    <div>
      <h1>Unsere Teammitglieder</h1>
      <p>Hier findest du eine kurze Übersicht über unsere tollen Entwicklerinnen und Entwickler:</p>

      {profiles.map((profile, index) => (
        <ProfileCard 
          key={index}
          name={profile.name}
          description={profile.description}
          skills={profile.skills}
        />
      ))}
    </div>
  );
}

export default App;
