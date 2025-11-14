import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Get the full recipe objects for favorites
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter((recipe) => recipe !== undefined);

  if (favoriteRecipes.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>My Favorites</h2>
        <p style={{ color: '#666' }}>
          You haven't added any favorites yet. Start exploring recipes and add your favorites!
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Favorites ({favoriteRecipes.length})</h2>
      <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
        {favoriteRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #e0e0e0',
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
                {recipe.title}
              </h3>
              <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
                {recipe.description.substring(0, 100)}...
              </p>
              <Link
                to={`/recipe/${recipe.id}`}
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  color: '#007bff',
                  textDecoration: 'none',
                  fontSize: '14px'
                }}
              >
                View Details →
              </Link>
            </div>
            <button
              onClick={() => removeFavorite(recipe.id)}
              style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                marginLeft: '15px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
