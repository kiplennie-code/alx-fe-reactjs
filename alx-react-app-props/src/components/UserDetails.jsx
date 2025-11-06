import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  // Consume the UserContext using useContext hook
  const userData = useContext(UserContext);

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h3 style={{ color: '#333', marginBottom: '10px' }}>User Details</h3>
      <p style={{ margin: '8px 0', color: '#555' }}>
        <strong>Name:</strong> {userData.name}
      </p>
      <p style={{ margin: '8px 0', color: '#555' }}>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;
