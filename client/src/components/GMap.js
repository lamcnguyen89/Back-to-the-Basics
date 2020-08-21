import React, { useEffect, useRef } from 'react';


const iconList = {
  icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
  icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
  icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
  icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
}

// list of the marker object along with icon
const markerList = [
  { lat: 29.328184, lng: -81.07734, icon: iconList.icon1, title: "Bone Valley ATV Park", contentString: "Bone Valley ATV Park: 10427 Co Rd 630 FL 33960"},
  { lat: 27.972112 , lng: -81.379784, icon: iconList.icon2, title: "Lake Kissimmee State Park", contentString: "Lake Kissimme State Park: 14248 Camp Mack Rd, Lake Wales, FL 33898 " },
  { lat: 27.475207, lng: -82.344167, icon: iconList.icon3, title: "Lake Manatee State Park", contentString: "Lake Manatee State Park: 20007 FL-64, Bradenton, FL 34212 "},
  { lat: 29.999161, lng:  -84.484893, icon: iconList.icon4, title: "Ochlockonee River State Park", contentString: "Ochlockonee River State Park: 429 State Park Road, Sopchoppy Hwy, Sopchoppy, FL 32358"}
]


const GMap = ({beaches, dispensaries, events, gunstores, nationalparks, organicfarms, outdoorstores, random, stateparks}) => {
  const googleMapRef = useRef(null);
  let googleMap = null
  console.log(beaches)
  
 
  
  
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
        url: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
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

