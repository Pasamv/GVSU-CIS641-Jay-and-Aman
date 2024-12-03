import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeDetail from "./pages/RecipeDetail";
import Login from "./pages/Login";
import PostRecipe from "./pages/PostRecipe";
import NavBar from "./components/NavBar/NavBar";
import BottomInfo from "./pages/BottomInfo";
import Working from "./pages/Working";
import './App.css';
import RecipeSearch from "./pages/RecipeSearch";

function App() {
    return (
      <>
        <Router>
          <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/post" element={<PostRecipe />} /> 
                <Route path="/search" element={<RecipeSearch />} /> 
                <Route path="*" element={<Working />} />
            </Routes>
        </Router>
        <BottomInfo />
      </>
    );
}

export default App;
