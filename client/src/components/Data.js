import React, { Component } from 'react';
import MapContainer from './GMapLoadAPI';
import MapAPI from '../utils/MapAPI';
// import FilterClasses from './FilterClasses';
// import FilterName from './FilterName';
// import InputData from './InputData';
// import MapLegend from './MapLegend';


class Data extends Component {
    state = {  
        beaches: [],
        places: []
    }

    // Mount API Map data and push it to the state:
    componentDidMount() {
        MapAPI.getBeaches()
            .then(beaches =>{ 
                this.setState({ beaches: beaches })})
            .catch(err => console.error(err));
        MapAPI.getPlaces()
            .then(places =>{ 
                this.setState({ places: places })})
            .catch(err => console.error(err));  
    }


    render() { 
        return (  
            <>
                <MapContainer
                    beaches={this.state.beaches}
                    places={this.state.places}
                />

            </>

        );
    }
}
 
export default Data;