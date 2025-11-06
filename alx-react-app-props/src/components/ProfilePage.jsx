import UserInfo from './UserInfo';

function ProfilePage() {
  // No need to receive or pass userData as props
  return (
    <div style={{
      backgroundColor: '#ecf0f1',
      minHeight: '400px',
      padding: '40px 20px'
    }}>
      <h1 style={{ textAlign: 'center', color: '#34495e', marginBottom: '30px' }}>
        Profile Page
      </h1>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;
