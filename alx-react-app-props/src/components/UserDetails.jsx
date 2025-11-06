import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  // Consume the context using useContext hook
  const userData = useContext(UserContext);

  return (
    <div style={{
      border: '2px solid #4CAF50',
      padding: '20px',
      margin: '20px',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#4CAF50', marginBottom: '15px' }}>
        User Details
      </h2>
      <p style={{ fontSize: '18px', margin: '10px 0' }}>
        <strong>Name:</strong> {userData.name}
      </p>
      <p style={{ fontSize: '18px', margin: '10px 0' }}>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;
