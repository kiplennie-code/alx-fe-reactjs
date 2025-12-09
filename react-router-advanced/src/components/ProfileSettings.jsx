const ProfileSettings = () => {
  return (
    <div>
      <h2 style={{ color: '#1976d2', marginBottom: '1rem' }}>Profile Settings</h2>
      
      <form>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Email Notifications
          </label>
          <input type="checkbox" defaultChecked /> Receive email updates
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Privacy Settings
          </label>
          <select style={{ padding: '0.5rem', width: '100%', maxWidth: '300px' }}>
            <option>Public</option>
            <option>Friends Only</option>
            <option>Private</option>
          </select>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Language
          </label>
          <select style={{ padding: '0.5rem', width: '100%', maxWidth: '300px' }}>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          Save Settings
        </button>
      </form>

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#fff3e0',
        borderRadius: '4px'
      }}>
        <p style={{ margin: 0, color: '#f57c00' }}>
           This is another nested route, showing how to organize complex UIs with nested routing.
        </p>
      </div>
    </div>
  );
};

export default ProfileSettings;
