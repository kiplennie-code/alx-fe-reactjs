import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white text-center">
            GitHub User Search
          </h1>
          <p className="text-center text-gray-400 mt-2">
            Search and discover GitHub profiles
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Search />
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-gray-500 border-t border-gray-800">
        <p>Built with React & GitHub API</p>
      </footer>
    </div>
  );
}

export default App;
