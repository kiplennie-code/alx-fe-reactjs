import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PostsComponent from './components/PostsComponent';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000, // Data is fresh for 1 minute
      cacheTime: 300000, // Cache persists for 5 minutes
      refetchOnWindowFocus: false, // Don't refetch on window focus for demo
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>
          React Query Demo - Advanced Data Handling
        </h1>
        <PostsComponent />
      </div>
      {/* DevTools for debugging */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
