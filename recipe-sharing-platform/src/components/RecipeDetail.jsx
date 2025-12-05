import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find recipe by id from data.json
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  // Loading state
  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Recipe not found</p>
          <Link 
            to="/" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="text-white hover:text-gray-200 transition-colors mb-2 inline-block"
          >
            ← Back to Recipes
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{recipe.title}</h1>
        </div>
      </header>

      {/* Recipe Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Recipe Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Recipe Image */}
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            
            {/* Recipe Content */}
            <div className="p-6 md:p-8">
              {/* Summary */}
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {recipe.summary}
              </p>

              {/* Ingredients Section */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                  Ingredients
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li 
                        key={index} 
                        className="flex items-start text-gray-700"
                      >
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span className="text-base md:text-lg">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instructions Section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                  Cooking Instructions
                </h2>
                <div className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <div 
                      key={index}
                      className="flex items-start bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 text-base md:text-lg pt-1">
                        {instruction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link 
                  to="/"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  ← Back to All Recipes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2024 Recipe Sharing Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default RecipeDetail;
