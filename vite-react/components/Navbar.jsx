import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

export default function Navbar() {
    return(
        <nav>
            {/*<FontAwesomeIcon icon="fa-solid fa-earth-americas" />*/}
            <span><FontAwesomeIcon className="earth-logo" icon={faEarthAmericas} /></span>
            <h2 className="nav-title">my travel journal.</h2>
        </nav>
    )
}