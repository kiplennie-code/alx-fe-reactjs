import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AddRecipeForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    ingredients: '',
    instructions: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long';
    }

    // Summary validation
    if (!formData.summary.trim()) {
      newErrors.summary = 'Recipe summary is required';
    }

    // Ingredients validation
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'At least one ingredient is required';
    } else {
      // Check if ingredients has at least 2 items (separated by new lines)
      const ingredientsList = formData.ingredients
        .split('\n')
        .filter(item => item.trim() !== '');
      
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please provide at least two ingredients (one per line)';
      }
    }

    // Instructions validation
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Cooking instructions are required';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Run validation
    const newErrors = validate();
    
    // If there are errors, set them and don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process the form data
    const ingredientsList = formData.ingredients
      .split('\n')
      .filter(item => item.trim() !== '')
      .map(item => item.trim());

    const instructionsList = formData.instructions
      .split('\n')
      .filter(item => item.trim() !== '')
      .map(item => item.trim());

    const newRecipe = {
      id: Date.now(), // Simple ID generation
      title: formData.title.trim(),
      summary: formData.summary.trim(),
      image: formData.image.trim() || 'https://via.placeholder.com/150',
      ingredients: ingredientsList,
      instructions: instructionsList
    };

    // Log the new recipe (in a real app, you'd send this to a backend)
    console.log('New Recipe Submitted:', newRecipe);
    
    // Show success message
    alert('Recipe added successfully!');
    
    // Redirect to home page
    navigate('/');
  };

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
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Add New Recipe</h1>
        </div>
      </header>

      {/* Form Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Recipe Title */}
              <div>
                <label 
                  htmlFor="title" 
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Recipe Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., Chocolate Chip Cookies"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
              </div>

              {/* Recipe Summary */}
              <div>
                <label 
                  htmlFor="summary" 
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Summary <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="summary"
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  rows="3"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.summary ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Brief description of your recipe"
                />
                {errors.summary && (
                  <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
                )}
              </div>

              {/* Image URL */}
              <div>
                <label 
                  htmlFor="image" 
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Image URL <span className="text-gray-500 text-sm font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="https://example.com/image.jpg"
                />
                <p className="text-gray-500 text-sm mt-1">
                  If left blank, a placeholder image will be used.
                </p>
              </div>

              {/* Ingredients */}
              <div>
                <label 
                  htmlFor="ingredients" 
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Ingredients <span className="text-red-500">*</span>
                  <span className="text-gray-500 text-sm font-normal ml-2">
                    (Enter at least 2 ingredients, one per line)
                  </span>
                </label>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  rows="8"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.ingredients ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="2 cups flour&#10;1 cup sugar&#10;3 eggs&#10;1 tsp vanilla extract"
                />
                {errors.ingredients && (
                  <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
                )}
              </div>

              {/* Cooking Instructions */}
              <div>
                <label 
                  htmlFor="instructions" 
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Cooking Instructions <span className="text-red-500">*</span>
                  <span className="text-gray-500 text-sm font-normal ml-2">
                    (One step per line)
                  </span>
                </label>
                <textarea
                  id="instructions"
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  rows="10"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.instructions ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Preheat oven to 350F&#10;Mix dry ingredients in a bowl&#10;Add wet ingredients&#10;Bake for 25-30 minutes"
                />
                {errors.instructions && (
                  <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Add Recipe
                </button>
                <Link
                  to="/"
                  className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-400 transition-colors text-center shadow-md hover:shadow-lg"
                >
                  Cancel
                </Link>
              </div>
            </form>
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

export default AddRecipeForm;
