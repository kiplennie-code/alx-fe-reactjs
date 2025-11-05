const UserProfile = (props) => {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '20px', 
      margin: '15px',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: 'blue', 
        fontSize: '24px',
        marginBottom: '10px'
      }}>
        {props.name}
      </h2>
      <p style={{ fontSize: '16px', margin: '5px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span>
      </p>
      <p style={{ 
        fontSize: '14px', 
        color: '#666',
        fontStyle: 'italic',
        marginTop: '10px'
      }}>
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;
