import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#1976d2', marginBottom: '1rem' }}>
        {user?.username}'s Profile
      </h1>

      <div style={{
        backgroundColor: '#e8f5e9',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0, color: '#2e7d32', fontWeight: 'bold' }}>
           You are authenticated! This is a protected route.
        </p>
      </div>

      {/* Nested Route Navigation */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        borderBottom: '2px solid #e0e0e0',
        paddingBottom: '1rem'
      }}>
        <Link
          to="/profile"
          end
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#1976d2',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          Overview
        </Link>
        
        <Link
          to="/profile/details"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#1976d2',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          Details
        </Link>
        
        <Link
          to="/profile/settings"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#1976d2',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          Settings
        </Link>
      </div>

      {/* Nested Routes Render Here */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
