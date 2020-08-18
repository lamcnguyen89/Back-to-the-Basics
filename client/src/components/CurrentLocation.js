import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
};

export class CurrentLocation extends React.Component {
    constructor(props) {
        // Next we need to make our component stateful
        super(props);
        const { lat, lng } = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        }
    }

    // This section of the code is to update our CurrentLocation component to cater for the instance when the Map is first loaded.
    // We can't solely depend on the Google Maps API always being available, so we need to check if it's loaded. 
    // Also this code will check if the browser's current location is provided and recenter the map to it.
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
    }

    // We will define the recenterMap() function which only gets called when the currentLocation in the component's state is updated and uses the .panTo() method on the google.maps.Map instance to change the center of the map.
    recenterMap() {
        const map = this.map;
        const current = this.state.currentLocation;
    
        const google = this.props.google;
        const maps = google.maps;
    
        if (map) {
          let center = new maps.LatLng(current.lat, current.lng);
          map.panTo(center);
        }
      }

    // Next we need to handle the instance when the map has already loaded. This will be handled by the componentDidMount() Lifecycle method which will set a call back to fetch the current location.
    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    })
                })
            }
        }
        this.loadMap();
    }

    // The loadMap() function is only called after the component has been rendered and grabs a reference to the DOM component to where we want our map to be placed
    loadMap() {
       if (this.props && this.props.google) {
           // checks if google is available
           const { google } = this.props;
           const maps = google.maps;

           const mapRef = this.refs.map;

           // reference to the actual DOM element
           const node = ReactDOM.findDOMNode(mapRef);

           let { zoom } = this.props;
           const { lat, lng } = this.state.currentLocation;
           const center = new maps.LatLng(lat, lng);
           const mapConfig = Object.assign(
            {},
            {
                center: center,
                zoom: zoom
            }
           );
        
        // maps.Map() is a constructor that instantiates the map
        this.map = new maps.Map(node, mapConfig);   
       } 
    }

    // our CurrentLocation component is almost looking up, but we need to ensure that our previous Marker picks our current location ie the browsers current location and so we need need to introduce the Parent-Child concept through the renderChildren() method which will be responsible for calling the method on the child component
    renderChildren() {
        const { children } = this.props;
    
        if (!children) return;
    
        return React.Children.map(children, c => {
          if (!c) return;
          return React.cloneElement(c, {
            map: this.map,
            google: this.props.google,
            mapCenter: this.state.currentLocation
          });
        });
    }


    // And finally, let's add our render() method
    render() {
        const style = Object.assign({}, mapStyles.map);
       return (
         <div>
           <div style={style} ref="map">
             Loading map...
           </div>
           {this.renderChildren()}
         </div>
       );
     }  

}
export default CurrentLocation;

CurrentLocation.defaultProps = {
    zoom: 14,
    initialCenter: {
        lat: 27.6648,
        lng: -81.5158 
    },
    centerAroundCurrentLocation: false,
    visible: true
};
