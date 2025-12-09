import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

// Function to fetch posts from API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
};

const PostsComponent = () => {
  const [showPosts, setShowPosts] = useState(true);

  // Use React Query to fetch data with caching options
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    cacheTime: 300000, // Cache persists for 5 minutes (300000ms)
    staleTime: 60000, // Data is fresh for 1 minute (60000ms)
    refetchOnWindowFocus: true, // Refetch when window regains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  // Loading state
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <div style={{ fontSize: '24px', color: '#666' }}>Loading posts...</div>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '40px',
        color: '#d32f2f',
        backgroundColor: '#ffebee',
        borderRadius: '8px',
        margin: '20px'
      }}>
        <h2>Error Loading Posts</h2>
        <p>{error.message}</p>
        <button
          onClick={() => refetch()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#d32f2f',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '10px'
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Control Buttons */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => setShowPosts(!showPosts)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {showPosts ? 'Hide Posts' : 'Show Posts'}
        </button>

        <button
          onClick={() => refetch()}
          disabled={isFetching}
          style={{
            padding: '12px 24px',
            backgroundColor: isFetching ? '#9e9e9e' : '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isFetching ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {isFetching ? 'Refetching...' : 'Refetch Data'}
        </button>
      </div>

      {/* Status Info */}
      <div style={{
        backgroundColor: '#e3f2fd',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <p style={{ margin: '5px 0', color: '#1976d2', fontWeight: 'bold' }}>
          Status: {isFetching ? '🔄 Fetching...' : '✅ Data Loaded from Cache'}
        </p>
        <p style={{ margin: '5px 0', color: '#555', fontSize: '14px' }}>
          Total Posts: {data?.length || 0}
        </p>
        <p style={{ margin: '5px 0', color: '#666', fontSize: '12px' }}>
          💡 React Query Config: cacheTime=5min, staleTime=1min, refetchOnWindowFocus=true
        </p>
        <p style={{ margin: '5px 0', color: '#666', fontSize: '12px' }}>
          Toggle posts to see caching in action. Data loads instantly from cache!
        </p>
      </div>

      {/* Posts List */}
      {showPosts && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
          marginTop: '20px'
        }}>
          {data && data.slice(0, 20).map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              <h3 style={{
                margin: '0 0 10px 0',
                color: '#1976d2',
                fontSize: '18px',
                lineHeight: '1.4'
              }}>
                {post.title}
              </h3>
              <p style={{
                margin: 0,
                color: '#666',
                fontSize: '14px',
                lineHeight: '1.6'
              }}>
                {post.body}
              </p>
              <div style={{
                marginTop: '10px',
                paddingTop: '10px',
                borderTop: '1px solid #e0e0e0',
                fontSize: '12px',
                color: '#999'
              }}>
                Post ID: {post.id} | User ID: {post.userId}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cache Explanation */}
      {!showPosts && (
        <div style={{
          backgroundColor: '#fff3e0',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          marginTop: '20px'
        }}>
          <h3 style={{ color: '#f57c00', marginTop: 0 }}>
            🎯 Posts Hidden - Data Still in Cache!
          </h3>
          <p style={{ color: '#666' }}>
            Click "Show Posts" to see them load instantly from React Query's cache
            without making a new API request.
          </p>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '10px' }}>
            <strong>Caching Demo:</strong> Data remains cached for 5 minutes (cacheTime) 
            and is considered fresh for 1 minute (staleTime). The keepPreviousData option 
            ensures smooth transitions when refetching.
          </p>
        </div>
      )}
    </div>
  );
};

export default PostsComponent;
