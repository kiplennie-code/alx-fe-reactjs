import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      textAlign: 'center', 
      margin: '50px auto',
      padding: '30px',
      maxWidth: '400px',
      backgroundColor: '#f5f5f5',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#333', 
        marginBottom: '20px',
        fontSize: '28px'
      }}>
        Counter Application
      </h2>
      
      <p style={{ 
        fontSize: '48px', 
        fontWeight: 'bold',
        color: '#4CAF50',
        margin: '20px 0'
      }}>
        {count}
      </p>
      
      <p style={{ 
        fontSize: '14px', 
        color: '#666',
        marginBottom: '25px'
      }}>
        Current Count
      </p>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
          Increment
        </button>
        
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#da190b'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
        >
          Decrement
        </button>
        
        <button 
          onClick={() => setCount(0)}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0b7dda'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2196F3'}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
