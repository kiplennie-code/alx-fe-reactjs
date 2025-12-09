import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './pages/Login';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
          <Navbar />
          
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            
            {/* Dynamic Route */}
            <Route path="/blog/:id" element={<BlogPost />} />
            
            {/* Protected Routes with Nested Routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              {/* Nested Routes */}
              <Route 
                index 
                element={
                  <div>
                    <h2 style={{ color: '#1976d2' }}>Profile Overview</h2>
                    <p>Welcome to your profile! Use the tabs above to navigate to different sections.</p>
                    <div style={{
                      marginTop: '1.5rem',
                      padding: '1rem',
                      backgroundColor: '#e8f5e9',
                      borderRadius: '4px'
                    }}>
                      <p style={{ margin: 0, color: '#2e7d32' }}>
                        🎯 This is the default nested route (index route) that displays when you visit /profile
                      </p>
                    </div>
                  </div>
                } 
              />
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            {/* 404 Not Found */}
            <Route 
              path="*" 
              element={
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h1 style={{ color: '#d32f2f' }}>404 - Page Not Found</h1>
                  <p>The page you're looking for doesn't exist.</p>
                </div>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
