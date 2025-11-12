import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Recipe Sharing Application</h1>
        
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <hr style={{ margin: '30px 0' }} />
              <RecipeList />
            </>
          } />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
