import React from 'react';
import data from '../public/data';
import Navbar from "../components/Navbar.jsx"
import Travel from "../components/Travel.jsx"
import './App.css'
import { v4 as uuidv4 } from 'uuid';

function App() {

    const travels = data.map(item => {
        return (
            <Travel
                key = {uuidv4()}
                {...item}
            />
        )
    })


    return (
        <div className="App">
                <Navbar />
                {travels}
        </div>
    );
}

export default App;
