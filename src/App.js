import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CalculatorPage from './components/CalculatorPage';
import Quotes from './components/Quotes';
import Home from './components/Home';

const App = () => (
  <main className="font">
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </HashRouter>
  </main>
);

export default App;
