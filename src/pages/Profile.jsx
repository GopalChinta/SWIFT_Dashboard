import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/profile.css'; // add custom style if needed

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data[0])); // use only first user
  }, []);

  if (!user) return <p>Loading...</p>;

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0D8ABC&color=fff&size=128`;

  return (
    <div className="profile-container">
      <Link to="/dashboard">← Back to Dashboard</Link>
      <h2 className="profile-title">User Profile</h2>

      <div className="profile-card">
        <img src={avatarUrl} alt="User Avatar" className="avatar" />
        <div className="info">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

