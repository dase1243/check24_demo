// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchPage } from './SearchPage';
import { ParametersPage } from './ParametersPage';
import {OffersLoadingPage} from './OffersLoadingPage';
import {OffersPage} from './OffersPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/parameters-page" element={<ParametersPage />} />
                <Route path="/offers-loading-page" element={<OffersLoadingPage />} />
                <Route path="/offers-page" element={<OffersPage />} />
            </Routes>
        </Router>
    );
}

export default App;
