import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Initialize filtered recipes when component mounts or recipes change
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  // Determine which recipes to display
  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      
      {recipesToDisplay.length === 0 && searchTerm && (
        <div style={{
          padding: '20px',
          backgroundColor: '#fff3cd',
          border: '1px solid #ffc107',
          borderRadius: '5px',
          color: '#856404'
        }}>
          <p>No recipes found matching "{searchTerm}"</p>
          <p>Try a different search term.</p>
        </div>
      )}

      {recipesToDisplay.length === 0 && !searchTerm && (
        <p>No recipes yet. Add your first recipe!</p>
      )}

      {recipesToDisplay.length > 0 && (
        <div>
          {searchTerm && (
            <p style={{ color: '#555', marginBottom: '15px' }}>
              Found {recipesToDisplay.length} recipe(s) matching "{searchTerm}"
            </p>
          )}
          
          {recipesToDisplay.map((recipe) => (
            <div key={recipe.id} style={{ 
              border: '1px solid #ccc', 
              padding: '15px', 
              margin: '10px 0',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
              transition: 'box-shadow 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <h3>{recipe.title}</h3>
              <p>{recipe.description.substring(0, 100)}...</p>
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
