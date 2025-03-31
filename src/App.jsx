import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Header />
            <AppRoutes />
            <Footer />
        </Router>
    );
}

export default App;
