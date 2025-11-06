import UserDetails from './UserDetails';

function UserInfo() {
  // No need to receive or pass userData as props
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>User Information</h2>
      <UserDetails />
    </div>
  );
}

export default UserInfo;
