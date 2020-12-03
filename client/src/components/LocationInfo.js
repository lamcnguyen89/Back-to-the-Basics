import React from "react";


function LocationInfo(location) {

    const loc=location.locationData;
    
    return(
        <div className="locationDisplay">
            <h2>Location Information</h2>
            <h4>{loc.title}</h4>
            <p>{loc.address}</p>
            <p>{loc.text}</p>
        </div>
    );
}

export default LocationInfo;