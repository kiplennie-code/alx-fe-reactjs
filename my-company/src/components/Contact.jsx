import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '42px', 
        color: '#333', 
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        Contact Us
      </h1>
      <p style={{ 
        textAlign: 'center', 
        color: '#666', 
        marginBottom: '40px',
        fontSize: '18px'
      }}>
        Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
      
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: '#333',
              fontWeight: 'bold'
            }}>
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ 
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: '#333',
              fontWeight: 'bold'
            }}>
              Your Email *
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ 
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s'
              }}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: '#333',
              fontWeight: 'bold'
            }}>
              Your Message *
            </label>
            <textarea
              name="message"
              placeholder="Tell us how we can help you..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              style={{ 
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box',
                resize: 'vertical',
                transition: 'border-color 0.3s'
              }}
            />
          </div>

          <button 
            type="submit" 
            style={{ 
              width: '100%',
              padding: '15px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              boxShadow: '0 4px 10px rgba(102, 126, 234, 0.3)'
            }}
          >
            Send Message
          </button>
        </form>

        <div style={{ 
          marginTop: '40px',
          paddingTop: '30px',
          borderTop: '2px solid #ddd',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>📧</div>
            <h4 style={{ color: '#333', marginBottom: '5px' }}>Email</h4>
            <p style={{ color: '#666' }}>contact@ourcompany.com</p>
          </div>
          <div>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>📞</div>
            <h4 style={{ color: '#333', marginBottom: '5px' }}>Phone</h4>
            <p style={{ color: '#666' }}>(123) 456-7890</p>
          </div>
          <div>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>📍</div>
            <h4 style={{ color: '#333', marginBottom: '5px' }}>Address</h4>
            <p style={{ color: '#666' }}>123 Business St, City</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
