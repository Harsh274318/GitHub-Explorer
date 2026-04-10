import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Context from "./Context";

const UserDetails = () => {
  const { state } = useContext(Context);
  const [userDetails, setUserDetails] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!state.selectedUser) return;

    // 👉 user details
    axios
      .get(`https://api.github.com/users/${state.selectedUser}`)
      .then((res) => setUserDetails(res.data));

    // 👉 repos
    axios
      .get(`https://api.github.com/users/${state.selectedUser}/repos`)
      .then((res) => setRepos(res.data));
  }, [state.selectedUser]);

  if (!state.selectedUser) return <p>Select a user 👈</p>;

  return (
    <div className="right-panel">
      
      {/* USER DETAILS */}
      {userDetails && (
      <div className="user-details-card">
  <h2>👤 User Details</h2>

  <div className="user-details-grid">

    <div className="user-item">
      <span>Name</span>
      <b>{userDetails.name || "Not specified"}</b>
    </div>

    <div className="user-item">
      <span>Company</span>
      <b>{userDetails.company || "Not specified"}</b>
    </div>

    <div className="user-item">
      <span>Location</span>
      <b>{userDetails.location || "Not specified"}</b>
    </div>

    <div className="user-item">
      <span>Blog/Website</span>
      <b>{userDetails.blog || "Not specified"}</b>
    </div>

    <div className="user-item">
      <span>Followers</span>
      <b>👥 {userDetails.followers}</b>
    </div>

    <div className="user-item">
      <span>Following</span>
      <b>✏️ {userDetails.following}</b>
    </div>

    <div className="user-item">
      <span>Public Repos</span>
      <b>📦 {userDetails.public_repos}</b>
    </div>

    <div className="user-item">
      <span>Joined</span>
      <b>{new Date(userDetails.created_at).toLocaleDateString()}</b>
    </div>

  </div>
</div>
      )}

      {/* REPOSITORIES */}
      <div className="repo-section">
        <h2>Repositories</h2>

        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <p><b>{repo.name}</b></p>
            <p>{repo.description || "No description"}</p>
            <p>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;