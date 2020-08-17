import React, { Component } from 'react';
import { Map, GoogleAPIWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';


// https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications

class MapContainer extends Component {
    state = {
        showingInfoWindow: false, // Hides or shows the infoWindow
        activeMarker: {}, // Shows the active marker upon click
        selectedPlace: {} // Shows the infoWindow to the selected place upon a marker
      }

    // Next, add event handlers for when the map and marker
        onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

        onClose = props => {
            if (this.state.showingInfoWindow) {
                this.setState({
                    showingInfoWindow: false,
                    activeMarker: null
                });
            }
        };

    render() { 
        return (
            <CurrentLocation
                centerAroundCurrentLocation
                google={this.props.google}
            >      
                <Map
                    // Center is the latitude and longitude that you want the map to start off on. In our case, we start of in Florida.
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: 27.6648,
                        lng: -81.5158
                    }}
                />

                <Marker 
                    onclick={this.onMarkerClick}
                    name= {'Cassadaga'}
                />
                <InfoWindow 
                    marker={this.state.activeMarker}
                    visible={this.state.showInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </CurrentLocation> 
        );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'YOUR_GOOGLE_API_KEY_GOES_HERE'
  })(MapContainer);