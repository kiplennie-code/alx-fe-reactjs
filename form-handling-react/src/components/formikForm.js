import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
  });

  // Handle form submission
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form data:', values);
    
    // Simulate API call
    setTimeout(() => {
      alert('User registered successfully with Formik!');
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Username Field */}
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
                Username:
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
              <ErrorMessage
                name="username"
                component="p"
                style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
              <ErrorMessage
                name="email"
                component="p"
                style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}
              />
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
                Password:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
              <ErrorMessage
                name="password"
                component="p"
                style={{ color: 'red', fontSize: '12px', margin: '5px 0 0 0' }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: isSubmitting ? '#6c757d' : '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                fontSize: '16px'
              }}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
