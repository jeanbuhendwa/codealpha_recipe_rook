import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/addRecipe";
import EditRecipe from "./pages/EditRecipe";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Spaghetti Bolognese",
      ingredients: "Pasta, Meat, Sauce",
      instructions: "Cook and enjoy!",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
    {
      id: 2,
      title: "Caesar Salad",
      ingredients: "Lettuce, Chicken, Croutons, Dressing",
      instructions: "Mix and serve!",
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
  ]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { id: recipes.length + 1, ...newRecipe }]);
  };

  const editRecipe = (id, updatedRecipe) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      )
    );
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <Router>
      <div>
        <nav className="bg-blue-500 p-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/add" className="text-white ml-4">
            Add Recipe
          </Link>
        </nav>

        <Routes>
          <Route path="/add" element={<AddRecipe addRecipe={addRecipe} />} />

          <Route
            path="/edit/:id"
            element={<EditRecipe recipes={recipes} editRecipe={editRecipe} />}
          />
          <Route
            path="/"
            element={<Home recipes={recipes} deleteRecipe={deleteRecipe} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
