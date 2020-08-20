import React, { useState, useEffect } from 'react';
import GMap from './GMap';

// Source: https://www.cluemediator.com/implement-google-maps-in-reactjs

// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyC3hzTZI75vAi2NaV6zk_9Df1-pe-WAEm8';

// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}

function MapContainer(beaches, dispensaries, events, gunstores, nationalparks, organicfarms, outdoorstores, random, stateparks) {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  return (
    <div className="GoogleMap">
      {!loadMap ? <div>Loading...</div> : 
        <GMap
          beaches={beaches}
          dispensaries={dispensaries}
          events={events}
          gunstores={gunstores}
          nationalparks={nationalparks}
          organicfarms={organicfarms}
          outdoorstores={outdoorstores}
          random={random}
          stateparks={stateparks}        
        />
      }
    </div>
  );

};

export default MapContainer;