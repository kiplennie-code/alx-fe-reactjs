import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Recipe Not Found</h2>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
          ← Back to Recipes
        </Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to Recipes
      </Link>
      
      <div style={{ 
        border: '1px solid #ccc', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <h1 style={{ margin: '0' }}>{recipe.title}</h1>
          <button
            onClick={toggleFavorite}
            style={{
              background: 'none',
              border: '2px solid #ddd',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
        
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555', marginTop: '20px' }}>
          {recipe.description}
        </p>
        
        <div style={{ marginTop: '30px' }}>
          <h3>Edit This Recipe</h3>
          <EditRecipeForm recipe={recipe} />
        </div>
        
        <div style={{ marginTop: '20px' }}>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
