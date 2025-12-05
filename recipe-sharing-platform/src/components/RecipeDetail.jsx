import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipesData } from '../data/mockData';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find recipe by id
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="text-white hover:underline mb-2 inline-block">
            ← Back to Recipes
          </Link>
          <h1 className="text-3xl font-bold">{recipe.title}</h1>
        </div>
      </header>

      {/* Recipe Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <p className="text-gray-700 text-lg mb-6">{recipe.summary}</p>

            {/* Ingredients Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Ingredients
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Instructions
              </h2>
              <ol className="list-decimal list-inside space-y-3">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-700">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RecipeDetail;
