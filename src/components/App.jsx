import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Models from './Models'
import Results from './Results'

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/models" element={<Models />} />
                <Route path="/results" element={<Results />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
