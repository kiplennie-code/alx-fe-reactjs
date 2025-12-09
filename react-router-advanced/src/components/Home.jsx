import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#1976d2', marginBottom: '1rem' }}>
        Welcome to React Router Advanced Demo
      </h1>
      
      <div style={{ 
        backgroundColor: '#e3f2fd', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginTop: 0 }}>Features Demonstrated:</h2>
        <ul style={{ lineHeight: '2' }}>
          <li> <strong>Protected Routes</strong> - Routes that require authentication</li>
          <li><strong>Nested Routes</strong> - Sub-routes within Profile section</li>
          <li><strong>Dynamic Routes</strong> - Blog posts with variable URLs</li>
          <li><strong>Navigation</strong> - Seamless routing between pages</li>
        </ul>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#1976d2' }}>Protected Profile</h3>
          <p>Try accessing the profile without logging in!</p>
          <Link 
            to="/profile"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#1976d2',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            Go to Profile
          </Link>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#1976d2' }}>Dynamic Blog</h3>
          <p>Visit different blog posts with dynamic routing</p>
          <Link 
            to="/blog/1"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#1976d2',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            Read Blog Post
          </Link>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#1976d2' }}>Login</h3>
          <p>Authenticate to access protected routes</p>
          <Link 
            to="/login"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#4caf50',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            Login Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
