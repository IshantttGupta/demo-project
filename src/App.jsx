// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './css/App.css';
// import MovieCard from './components/MovieCard';
import Favorites from './Pages/Favorites';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
