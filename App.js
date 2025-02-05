import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import OptionsPage from "./components/OptionsPage";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import SearchRecipe from "./components/SearchRecipe";
import AddRecipe from "./components/AddRecipe";
import './App.css'; // For global styles
import './components/FrontPage.css'; // For front page styles
import './components/LoginSignup.css'; // For login page styles
import './components/SearchRecipe.css'; // For recipe page styles
import './components/AddRecipe.css'; // For add recipe page styles

const App = () => {
  return (
    <Router>
      <div className="dashboard">
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/options">Options</Link></li>
            <li><Link to="/search">Search Recipe</Link></li>
            <li><Link to="/add-recipe">Add Recipe</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/options" element={<OptionsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/search" element={<SearchRecipe />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
