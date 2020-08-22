import React, { useEffect, useRef } from 'react';

const GMap = ({beaches, places}) => {
  const googleMapRef = useRef(null);
  let googleMap = null
  console.log(places)
  
  // Combine all the models data into one array
  const mapData = beaches.data.map(location=>{
    return {
      lat: location.lat,
      lng: location.lng,
      icon: location.icon,
      title: location.title,
      contentString: location.contentString
    }
  });
 console.log(mapData);
  // Function that compiles the initGoogleMap, the createMarker, and showInfoWindow functions
  useEffect(() => {
  
      googleMap = initGoogleMap();
      var bounds = new window.google.maps.LatLngBounds();
      mapData.map(x => {
        var infoWindow = createInfoWindow(x);
        const marker = createMarker(x);
        bounds.extend(marker.position);
        marker.addListener('click', function() {
          infoWindow.open(googleMap, marker);
        })
      });
      googleMap.fitBounds(bounds); // the map to contain all markers
  }, []);

  // initialize the google map
  const initGoogleMap = () => {
      var floridaLatLng = { lat: 27.6648, lng: -81.5158 }
      return new window.google.maps.Map(googleMapRef.current, {
        zoom: 8,
        center: floridaLatLng
    });
  }

  // create marker on google map
  const createMarker = (markerObj) => new window.google.maps.Marker({
      position: { lat: markerObj.lat, lng: markerObj.lng },
      map: googleMap,
      icon: {
        url: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png',
        // set marker width and height
        scaledSize: new window.google.maps.Size(50, 50)
      },
      title: markerObj.title
  });

  // create Info Windows that will show up when you click a location marker
  const createInfoWindow = (markerObj) => new window.google.maps.InfoWindow({
      content: markerObj.contentString
  });

  
  return <div
    ref={googleMapRef}
    style={{ width: 1200, height: 800 }}
  />
}

export default GMap;

