function About() {
  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '42px', 
        color: '#333', 
        textAlign: 'center',
        marginBottom: '30px',
        borderBottom: '3px solid #667eea',
        paddingBottom: '15px'
      }}>
        About Us
      </h1>
      
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <p style={{ 
          fontSize: '18px', 
          lineHeight: '1.8', 
          color: '#555',
          marginBottom: '20px'
        }}>
          Our company has been providing top-notch services since 1990. We specialize in various 
          fields including technology, marketing, and consultancy.
        </p>
        <p style={{ 
          fontSize: '18px', 
          lineHeight: '1.8', 
          color: '#555'
        }}>
          With over 30 years of experience, we've helped thousands of clients achieve their goals 
          and grow their businesses. Our commitment to excellence and innovation sets us apart 
          in the industry.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '40px'
      }}>
        <div style={{
          textAlign: 'center',
          padding: '20px'
        }}>
          <h2 style={{ fontSize: '48px', color: '#667eea', marginBottom: '10px' }}>30+</h2>
          <p style={{ fontSize: '16px', color: '#666' }}>Years of Experience</p>
        </div>
        <div style={{
          textAlign: 'center',
          padding: '20px'
        }}>
          <h2 style={{ fontSize: '48px', color: '#667eea', marginBottom: '10px' }}>5000+</h2>
          <p style={{ fontSize: '16px', color: '#666' }}>Happy Clients</p>
        </div>
        <div style={{
          textAlign: 'center',
          padding: '20px'
        }}>
          <h2 style={{ fontSize: '48px', color: '#667eea', marginBottom: '10px' }}>150+</h2>
          <p style={{ fontSize: '16px', color: '#666' }}>Team Members</p>
        </div>
      </div>
    </div>
  );
}

export default About;
