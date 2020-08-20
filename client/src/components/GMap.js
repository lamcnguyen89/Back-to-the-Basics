import React, { useEffect, useRef } from 'react';

// list of icons
const iconList = {
  icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
  icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
  icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
  icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
}

// list of the marker object along with icon
const markerList = [
  { lat: 29.328184, lng: -81.07734, icon: iconList.icon1, title: "Bone Valley ATV Park", contentString: "Address"},
  { lat: 27.972112 , lng: -81.379784, icon: iconList.icon2, title: "Lake Kissimmee State Park", contentString: "Address" },
  { lat: 27.475207, lng: -82.344167, icon: iconList.icon3, title: "Lake Manatee State Park", contentString: "Address"},
  { lat: 29.999161, lng:  -84.484893, icon: iconList.icon4, title: "Ochlockonee River State Park", contentString: "Address"}
]


const GMap = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  // Function that compiles the initGoogleMap, the createMarker, and showInfoWindow functions
  useEffect(() => {
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    markerList.map(x => {
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
      url: markerObj.icon,
      // set marker width and height
      scaledSize: new window.google.maps.Size(50, 50)
    },
    title: markerObj.title
  });

  // create Info Windows
  const createInfoWindow = (markerObj) => new window.google.maps.InfoWindow({
    content: markerObj.contentString
  });

  
  return <div
    ref={googleMapRef}
    style={{ width: 1200, height: 800 }}
  />
}

export default GMap;
