import { useState } from 'react';

const RegistrationForm = () => {
  // Destructure state into individual variables
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for form errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Validate form
 const validate = () => {
  const newErrors = {};

  if (!username) {
    newErrors.username = 'Username is required';
  }

  if (!email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = 'Email is invalid';
  }

  if (!password) {
    newErrors.password = 'Password is required';
  } else if (password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
  }

  return newErrors;
};

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log('Form submitted successfully:', { username, email, password });
      
      // Simulate API call
      alert('User registered successfully!');
      
      // Reset form
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h2>User Registration (Controlled Components)</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            style={{
              width: '100%',
              padding: '8px',
              border: errors.username ? '1px solid red' : '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          {errors.username && (
            <p style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}>
              {errors.username}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            style={{
              width: '100%',
              padding: '8px',
              border: errors.email ? '1px solid red' : '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          {errors.email && (
            <p style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}>
              {errors.email}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: '100%',
              padding: '8px',
              border: errors.password ? '1px solid red' : '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          {errors.password && (
            <p style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}>
              {errors.password}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
