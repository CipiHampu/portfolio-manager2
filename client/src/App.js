// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Asigură-te că importi corect Header
import PortfolioList from './components/PortfolioList'; // Componenta ta pentru listarea lucrărilor
import AddArtwork from './components/AddArtwork'; // Importă componenta nouă

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<PortfolioList />} />
                <Route path="/add-artwork" element={<AddArtwork />} />
            </Routes>
        </Router>
    );
};

export default App;
