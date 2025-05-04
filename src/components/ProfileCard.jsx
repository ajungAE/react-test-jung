import React, { useState } from "react";

function ProfileCard({ name, description, skills }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p><em>{description}</em></p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <button onClick={() => setLikes(likes + 1)}>
        ❤️ Gefällt mir ({likes})
      </button>
    </div>
  );
}

export default ProfileCard;
