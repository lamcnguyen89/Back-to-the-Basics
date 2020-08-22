import React, { Component } from 'react';
import MapAPI from '../utils/MapAPI';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

// Source: https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2
// Source 2: https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications
// npm documentation: https://www.npmjs.com/package/google-maps-react

const mapStyles = {
    width: '100%',
    height: '100%',
  };

class GoogleMapDisplay extends Component {
    // Constructor used to hold states and other things for reuse
    constructor(props) {
        super(props);
    
        this.state = {
            places: [{}],
            showingInfoWindow: false, // Hides or the shows the infoWindow
            activeMarker: {}, // Shows the active marker upon click
            selectedPlace: {} // Shows the infoWindow to the selected place upon a marker
        }
      }

    // Mount API Map data and push it to the state:
    componentDidMount() {
        MapAPI.getPlaces()
            .then(places =>{
                this.setState({ places: places.data })
                // console.log(this.state.places);
            })
            .catch(err => console.error(err));  
    };
    
    // Function to loop through the state named "places" and create markers.
    displayMarkers = () => {
        return this.state.places.map((places, index) => {
          return <Marker 
                    key={index} 
                    id={index} 
                    position={{lat: places.lat, lng: places.lng}}
                    name= {places.title}
                    onClick={this.onMarkerClick} 
                >
                </Marker>
                
        })
      };

    // Function to loop through the state named "places" and create markers.
    displayInfoWindows = () => {

    }
    
    
    // Event handler for when the map and marker are clicked.
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    // Event handler for closing the inforWindow once the user clicks on the close button on the info window.
    onClose = props => {
        if (this.state.showingInfoWindow) {
                this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    // Function used to render data onto the web page. Uses JSX
    render() { 
        return (  
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 27.6648, lng: -81.5158}}
            >
                {this.displayMarkers()}
                    <InfoWindow 
                            marker={this.state.activeMarker}
                            visible = {this.state.showingInfoWindow}
                            onClose= {this.onClose}
                    >       
                        <h1>Title Goes Here</h1>
                        <h4>Address Goes Here</h4>
                        <p>Somehow I have to loop through the places array and display unique data in the info window</p>
                        {this.state.places.title} 
                    </InfoWindow>
            </Map>
        );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC3hzTZI75vAi2NaV6zk_9Df1-pe-WAEm8'
})(GoogleMapDisplay);

  

