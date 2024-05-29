import React from 'react'


export default function (props) {
    return (
        <div>
            <div className="card">
                <img className="card-image" src={props.imageUrl} alt="Travel Destination"></img>
                <div className="card-details">
                    <i className="fa-solid fa-location-dot loc-icon"></i>
                    <span className="card-location">{props.location}</span>
                    <a className="card-googlemap-link" href={props.googleMapsUrl}>View on Google Maps</a>
                    <h3 className="card-title">{props.title}</h3>
                    <h4 className="card-dates"> {props.startDate} - {props.endDate}</h4>
                    <p className="card-description">{props.description}</p>
                </div>
            </div>
            <hr className="seperator"/>
        </div>
    )
}