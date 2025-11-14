import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // Generate recommendations when component mounts or when favorites/recipes change
  useEffect(() => {
    generateRecommendations();
  }, [favorites, recipes, generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Recommended for You</h2>
        <p style={{ color: '#666' }}>
          {favorites.length === 0 
            ? "Add some favorites to get personalized recommendations!"
            : "No recommendations available at the moment. Try adding more recipes!"}
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recommended for You</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Based on your favorites, you might like these recipes:
      </p>
      <div style={{ display: 'grid', gap: '15px' }}>
        {recommendations.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #e0e0e0',
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <span style={{
                backgroundColor: '#28a745',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                RECOMMENDED
              </span>
            </div>
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
              {recipe.title}
            </h3>
            <p style={{ margin: '0 0 15px 0', color: '#666', fontSize: '14px' }}>
              {recipe.description.substring(0, 120)}...
            </p>
            <Link
              to={`/recipe/${recipe.id}`}
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;
