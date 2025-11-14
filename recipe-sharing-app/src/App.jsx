import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>
          Recipe Sharing Application
        </h1>
        
        {/* Navigation */}
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          marginBottom: '30px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              color: '#007bff', 
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Home
          </Link>
          <Link 
            to="/favorites" 
            style={{ 
              textDecoration: 'none', 
              color: '#007bff', 
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            My Favorites
          </Link>
          <Link 
            to="/recommendations" 
            style={{ 
              textDecoration: 'none', 
              color: '#007bff', 
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Recommendations
          </Link>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <hr style={{ margin: '30px 0' }} />
              <SearchBar />
              <RecipeList />
            </>
          } />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
