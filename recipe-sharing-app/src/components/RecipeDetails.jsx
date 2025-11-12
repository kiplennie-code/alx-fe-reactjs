import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );

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
        <h1>{recipe.title}</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
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
