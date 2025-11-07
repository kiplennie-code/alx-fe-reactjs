function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: '40px',
      position: 'relative',
      bottom: '0',
      width: '100%'
    }}>
      <div style={{ marginBottom: '10px' }}>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>
          © 2025 Our Company. All rights reserved.
        </p>
        <p style={{ margin: '5px 0', fontSize: '12px', color: '#ccc' }}>
          Email: lennietech@ourcompany.com | Phone: +254729009826
        </p>
      </div>
      <div style={{ marginTop: '10px' }}>
        <a href="#" style={{ color: '#4CAF50', textDecoration: 'none', margin: '0 10px' }}>
          Privacy Policy
        </a>
        <a href="#" style={{ color: '#4CAF50', textDecoration: 'none', margin: '0 10px' }}>
          Terms of Service
        </a>
        <a href="#" style={{ color: '#4CAF50', textDecoration: 'none', margin: '0 10px' }}>
          FAQ
        </a>
      </div>
    </footer>
  );
}

export default Footer;
