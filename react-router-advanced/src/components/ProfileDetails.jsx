import { useAuth } from '../auth/AuthContext';

const ProfileDetails = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 style={{ color: '#1976d2', marginBottom: '1rem' }}>Profile Details</h2>
      
      <div style={{ lineHeight: '2' }}>
        <p><strong>Username:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {user?.username}@example.com</p>
        <p><strong>Member Since:</strong> {new Date().toLocaleDateString()}</p>
        <p><strong>Account Type:</strong> Premium User</p>
        <p><strong>Status:</strong> <span style={{ color: '#4caf50', fontWeight: 'bold' }}>Active</span></p>
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>
        <p style={{ margin: 0, color: '#666' }}>
           This is a nested route within the Profile component, demonstrating React Router's nested routing capabilities.
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
