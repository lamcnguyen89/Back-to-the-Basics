import React, { useEffect, useRef } from 'react';

const GMap = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  // list of icons
  const iconList = {
    icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
    icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
    icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
    icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
  }

  // list of the marker object along with icon
  const markerList = [
    { lat: 29.328184, lng: -81.07734, icon: iconList.icon1, title: "Bone Valley ATV Park", address:  },
    { lat: 27.972112 , lng: -81.379784, icon: iconList.icon2, title: "Lake Kissimmee State Park", address:  },
    { lat: 27.475207, lng: -82.344167, icon: iconList.icon3, title: "Lake Manatee State Park", address: },
    { lat: 29.999161, lng:  -84.484893, icon: iconList.icon4, title: "Ochlockonee River State Park", address: }
  ]



  useEffect(() => {
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    markerList.map(x => {
      const marker = createMarker(x);
      bounds.extend(marker.position);
    });
    googleMap.fitBounds(bounds); // the map to contain all markers
  }, []);


  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 27.6648, lng: -81.5158 },
      zoom: 8
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
  

  return <div
    ref={googleMapRef}
    style={{ width: 600, height: 500 }}
  />
}

export default GMap;