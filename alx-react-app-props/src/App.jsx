import './App.css'
import ProfilePage from './components/ProfilePage'
import UserContext from './UserContext'

function App() {
  // User data to be shared across components
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  return (
    // Wrap the component tree with UserContext.Provider
    <UserContext.Provider value={userData}>
      <div style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5'
      }}>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
