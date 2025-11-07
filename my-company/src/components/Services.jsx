function Services() {
  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '42px', 
        color: '#333', 
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        Our Services
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gap: '30px'
      }}>
        <div style={{
          display: 'flex',
          backgroundColor: '#f8f9fa',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          borderLeft: '5px solid #667eea'
        }}>
          <div style={{ fontSize: '48px', marginRight: '20px' }}>💻</div>
          <div>
            <h3 style={{ color: '#333', marginBottom: '10px', fontSize: '24px' }}>
              Technology Consulting
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Expert guidance on technology strategy, digital transformation, and IT infrastructure. 
              We help businesses leverage the latest technologies to stay competitive.
            </p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          backgroundColor: '#f8f9fa',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          borderLeft: '5px solid #764ba2'
        }}>
          <div style={{ fontSize: '48px', marginRight: '20px' }}>📊</div>
          <div>
            <h3 style={{ color: '#333', marginBottom: '10px', fontSize: '24px' }}>
              Market Analysis
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              In-depth market research and competitive analysis to help you make informed decisions. 
              Our data-driven insights give you a competitive edge in your industry.
            </p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          backgroundColor: '#f8f9fa',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          borderLeft: '5px solid #4CAF50'
        }}>
          <div style={{ fontSize: '48px', marginRight: '20px' }}>🚀</div>
          <div>
            <h3 style={{ color: '#333', marginBottom: '10px', fontSize: '24px' }}>
              Product Development
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              From concept to launch, we guide you through the entire product development lifecycle. 
              Our team ensures your product meets market demands and exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
