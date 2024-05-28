import React from 'react';
import data from "../public/data";
import Navbar from "../components/Navbar.jsx"
import Travel from "../components/Travel.jsx"
import './App.css'

function App() {

    return (
        <div className="App">
            <Navbar />
            <Travel />
        </div>
    );
}

export default App;
