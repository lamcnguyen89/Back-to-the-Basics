import React, { Component } from 'react';
import MapAPI from '../utils/MapAPI';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

// Source: https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2

const mapStyles = {
    width: '100%',
    height: '100%',
  };

class GoogleMapDisplay extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                  {latitude: 47.359423, longitude: -122.021071},
                  {latitude: 47.2052192687988, longitude: -121.988426208496},
                  {latitude: 47.6307081, longitude: -122.1434325},
                  {latitude: 47.3084488, longitude: -122.2140121},
                  {latitude: 47.5524695, longitude: -122.0425407}],
            
            places: [{}]
        }
      }
    
      displayMarkers = () => {
        return this.state.places.map((places, index) => {
          return <Marker key={index} id={index} position={{
           lat: places.lat,
           lng: places.lng
         }}
         onClick={() => console.log("You clicked me!")} />
        })
      }

    // Mount API Map data and push it to the state:
    componentDidMount() {
        MapAPI.getPlaces()
            .then(places =>{
                this.setState({ places: places.data })
                console.log(this.state.places);
            })
            .catch(err => console.error(err));  
    }


    render() { 
        return (  
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 27.6648, lng: -81.5158}}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC3hzTZI75vAi2NaV6zk_9Df1-pe-WAEm8'
})(GoogleMapDisplay);

  



// class Data extends Component {
//     state = {  
//         places: []
//     }

//     // Mount API Map data and push it to the state:
//     componentDidMount() {
//         MapAPI.getPlaces()
//             .then(places =>{
//                 this.setState({ places: places })
//             })
//             .catch(err => console.error(err));  
//     }

    
//     render() { 
//         return (  
//             <>
//                         <Map
//                             google={this.props.google}
//                             zoom={8}
//                             style={mapStyles}
//                             initialCenter={{ lat: 27.6648, lng: -81.5158 }}
//                         />
 
                
             
//             </>

//         );
//     }
// }
 
// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyC3hzTZI75vAi2NaV6zk_9Df1-pe-WAEm8'
//   })(Data);

