// src/ProfileCard.jsx
import React from 'react';

function ProfileCard({ name, description, skills }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;
