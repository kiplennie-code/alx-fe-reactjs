import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
  // Recipe CRUD operations
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id)
  })),
  
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  setRecipes: (recipes) => set({ recipes }),
  
  // Search and filter functionality
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  
  // Favorites functionality
  addFavorite: (recipeId) => set((state) => {
    // Check if already in favorites
    if (state.favorites.includes(recipeId)) {
      return state;
    }
    return { favorites: [...state.favorites, recipeId] };
  }),
  
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),
  
  // Recommendations functionality
  generateRecommendations: () => set((state) => {
    // Generate recommendations based on favorites
    
    
    if (state.favorites.length === 0) {
      // If no favorites, recommend random recipes
      const shuffled = [...state.recipes].sort(() => 0.5 - Math.random());
      return { recommendations: shuffled.slice(0, 3) };
    }
    
    // Get favorite recipes to analyze
    const favoriteRecipes = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id)
    );
    
    // Create a simple recommendation based on similar keywords in titles/descriptions
    const keywords = favoriteRecipes
      .flatMap((recipe) => 
        [...recipe.title.toLowerCase().split(' '), 
         ...recipe.description.toLowerCase().split(' ')]
      )
      .filter((word) => word.length > 3); // Filter out short words
    
    // Find recipes that aren't favorites but contain similar keywords
    const recommended = state.recipes
      .filter((recipe) => !state.favorites.includes(recipe.id))
      .map((recipe) => {
        const recipeText = (recipe.title + ' ' + recipe.description).toLowerCase();
        const matchCount = keywords.filter((keyword) => 
          recipeText.includes(keyword)
        ).length;
        return { ...recipe, matchCount };
      })
      .filter((recipe) => recipe.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, 3);
    
    return { recommendations: recommended };
  })
}));

export default useRecipeStore;
