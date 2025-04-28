// src/App.jsx
import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <h1>Unsere Teammitglieder</h1>
      <p>Hier findest du eine kurze Übersicht über unsere tollen Entwicklerinnen und Entwickler:</p>

      <ProfileCard 
        name="Jane Doe" 
        description="Web Developer aus Berlin" 
        skills={['JavaScript', 'React', 'CSS']} 
      />

      <ProfileCard 
        name="Max Mustermann" 
        description="Backend Spezialist aus Hamburg" 
        skills={['Node.js', 'Express', 'MongoDB']} 
      />

      <ProfileCard 
        name="Sara Müller" 
        description="UI/UX Designerin aus München" 
        skills={['Figma', 'Adobe XD', 'HTML/CSS']} 
      />
    </div>
  );
}

export default App;
