import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={recipe.image} 
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {recipe.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {recipe.summary}
        </p>
        <Link 
          to={`/recipe/${recipe.id}`}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
