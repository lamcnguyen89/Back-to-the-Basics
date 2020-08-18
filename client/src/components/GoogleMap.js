import React, { Component } from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';

// https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications
// Video by Traversy Media: https://www.youtube.com/watch?v=Zxf1mnP5zcw
// API key: AIzaSyC3hzTZI75vAi2NaV6zk_9Df1-pe-WAEm8

class MapContainer extends Component {
    // Add state for state management
    state = {
        showingInfoWindow: false, // Hides or shows the infoWindow
        activeMarker: {}, // Shows the active marker upon click
        selectedPlace: {} // Shows the infoWindow to the selected place upon a marker
      }

    // Next, add event handlers for when the map and marker are clicked.
        // The onMarkerClick method is used to show the InfoWindow which is a component in the google-maps-react library which gives the 
        onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
        // Event Handler for when the map and marker are closed.
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
            <>
                <CurrentLocation
                    centerAroundCurrentLocation
                    google={this.props.google}
                >
                    <Marker 
                        onClick={this.onMarkerClick} 
                        name={'Current Location'} />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                </CurrentLocation>
            </>    
          

        );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC3hzTZI75vAi2NaV6zk_9Df1-pe-WAEm8'
  })(MapContainer);