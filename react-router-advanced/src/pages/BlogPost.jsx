import { useParams, useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulated blog data
  const blogPosts = {
    '1': {
      title: 'Getting Started with React Router',
      author: 'John Doe',
      date: '2024-12-09',
      content: 'React Router is a powerful library for handling routing in React applications. It allows you to create single-page applications with navigation...'
    },
    '2': {
      title: 'Advanced Routing Techniques',
      author: 'Jane Smith',
      date: '2024-12-08',
      content: 'Learn about nested routes, protected routes, and dynamic routing in React. These advanced techniques help you build complex applications...'
    },
    '3': {
      title: 'Understanding Protected Routes',
      author: 'Bob Johnson',
      date: '2024-12-07',
      content: 'Protected routes are essential for securing parts of your application. They ensure that only authenticated users can access certain pages...'
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#d32f2f' }}>Blog Post Not Found</h2>
        <p>The blog post with ID {id} doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#757575',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back
      </button>

      <article style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#1976d2', marginBottom: '1rem' }}>{post.title}</h1>
        
        <div style={{
          display: 'flex',
          gap: '2rem',
          marginBottom: '2rem',
          color: '#666',
          fontSize: '0.9rem'
        }}>
          <span>By {post.author}</span>
          <span>{post.date}</span>
        </div>

        <p style={{ lineHeight: '1.8', color: '#333' }}>{post.content}</p>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#e3f2fd',
          borderRadius: '4px'
        }}>
          <p style={{ margin: 0, color: '#1976d2' }}>
            🔗 Dynamic Route Example: Blog post ID is <strong>{id}</strong>
          </p>
        </div>
      </article>

      {/* Navigation to other posts */}
      <div style={{
        marginTop: '2rem',
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        {['1', '2', '3'].map((postId) => (
          <button
            key={postId}
            onClick={() => navigate(`/blog/${postId}`)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: postId === id ? '#4caf50' : '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Post {postId}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
