import React, { useState } from 'react';
import { Github, AlertCircle } from 'lucide-react';
import Search from './components/Search';
import AdvancedSearch from './components/AdvancedSearch';
import UserCard from './components/UserCard';
import { searchUsers, getUserDetails, advancedSearch } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchMode, setSearchMode] = useState('basic'); // 'basic' or 'advanced'

  // Basic search handler
  const handleBasicSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      // Get detailed user information
      const userData = await getUserDetails(username);
      setUsers([userData]);
    } catch (err) {
      setError(err.message || 'User not found');
    } finally {
      setLoading(false);
    }
  };

  // Advanced search handler
  const handleAdvancedSearch = async (filters) => {
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await advancedSearch(filters);
      
      if (data.items && data.items.length > 0) {
        // Fetch detailed info for each user
        const detailedUsers = await Promise.all(
          data.items.slice(0, 10).map(user => getUserDetails(user.login))
        );
        setUsers(detailedUsers);
      } else {
        setError('No users found matching your criteria');
      }
    } catch (err) {
      setError(err.message || 'Search failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-3">
            <Github className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">
              GitHub User Search
            </h1>
          </div>
          <p className="text-center text-gray-400 mt-2">
            Search and discover GitHub profiles
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Search Mode Toggle */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setSearchMode('basic')}
              className={`px-6 py-2 rounded-lg font-semibold transition duration-200 ${
                searchMode === 'basic'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Basic Search
            </button>
            <button
              onClick={() => setSearchMode('advanced')}
              className={`px-6 py-2 rounded-lg font-semibold transition duration-200 ${
                searchMode === 'advanced'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Advanced Search
            </button>
          </div>

          {/* Search Section */}
          <div className="bg-gray-800 rounded-lg shadow-2xl p-8 border border-gray-700 mb-8">
            {searchMode === 'basic' ? (
              <Search onSearch={handleBasicSearch} loading={loading} />
            ) : (
              <AdvancedSearch onSearch={handleAdvancedSearch} loading={loading} />
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 mb-8 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-200">{error}</p>
            </div>
          )}

          {/* Results */}
          {users.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Search Results ({users.length})
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {users.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && users.length === 0 && (
            <div className="bg-gray-800 rounded-lg shadow-2xl p-12 border border-gray-700 text-center">
              <Github className="w-16 h-16 mx-auto mb-4 text-gray-600" />
              <p className="text-lg text-gray-400">No search results yet</p>
              <p className="text-sm text-gray-500 mt-2">
                Try searching for a GitHub username to get started
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-gray-500 border-t border-gray-800">
        <p>Built with React, Tailwind CSS & GitHub API</p>
      </footer>
    </div>
  );
}

export default App;
