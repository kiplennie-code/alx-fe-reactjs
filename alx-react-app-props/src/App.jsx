import './App.css'
import ProfilePage from './components/ProfilePage'
import UserContext from './UserContext'

function App() {
  // Define user data
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  return (
    // Wrap ProfilePage with UserContext.Provider
    <UserContext.Provider value={userData}>
      <div style={{ 
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ 
          textAlign: 'center',
          color: '#333',
          marginBottom: '30px'
        }}>
          Context API Demo
        </h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  )
}

export default App
