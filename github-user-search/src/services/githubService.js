import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username..."
            className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition duration-200"
          >
            Search
          </button>
        </div>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-gray-400 text-lg">
          Loading...
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center text-red-400 text-lg">
          Looks like we cant find the user
        </div>
      )}

      {/* User Data Display */}
      {userData && !loading && !error && (
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-24 h-24 rounded-full border-2 border-blue-500"
            />
            
            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">
                {userData.name || userData.login}
              </h2>
              <p className="text-blue-400 mb-3">@{userData.login}</p>
              
              {userData.bio && (
                <p className="text-gray-300 mb-4">{userData.bio}</p>
              )}
              
              {/* Stats */}
              <div className="flex gap-4 mb-4 text-sm text-gray-400">
                {userData.location && (
                  <span>📍 {userData.location}</span>
                )}
                <span>📚 {userData.public_repos} repos</span>
                <span>👥 {userData.followers} followers</span>
              </div>
              
              {/* View Profile Link */}
              
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
