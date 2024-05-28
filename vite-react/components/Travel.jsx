import React from 'react'


export default function (props) {
    return (
        <div>
        <div className="card">
            <img className="card-image" src="https://images.unsplash.com/photo-1525635569544-610f9540664a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Travel Destination"></img>
            <div className="card-details">
                <i className="fa-solid fa-location-dot loc-icon"></i>
                <span className="card-location">Japan</span>
                <a className="card-googlemap-link" href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
                <h3 className="card-title">Mount Fuji</h3>
                <h4 className="card-dates">12 Jan, 2021 - 24 Jan, 2021</h4>
                <p className="card-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
            <hr className="seperator"/>
        </div>
    )
}