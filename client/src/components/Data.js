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
        dispensaries: [],
        events: [],
        gunstores: [],
        nationalparks: [],
        organicfarms: [],
        outdoorstores: [],
        random: [],
        stateparks: []
    }

    // Mount API Map data and push it to the state:
    componentDidMount() {
        MapAPI.getBeaches()
            .then(beaches =>{ 
                this.setState({ beaches: beaches })})
            .catch(err => console.error(err));
        MapAPI.getDispensaries()
            .then(dispensaries => this.setState({ dispensaries: dispensaries }))
            .catch(err => console.error(err));
        MapAPI.getEvents()
            .then(events => this.setState({ events: events }))
            .catch(err => console.error(err));
        MapAPI.getGunStores()
            .then(gunstores => this.setState({ gunstores: gunstores }))
            .catch(err => console.error(err));
        MapAPI.getNationalParks()
            .then(nationalparks => this.setState({ nationalparks: nationalparks }))
            .catch(err => console.error(err));
        MapAPI.getOrganicFarms()
            .then(organicfarms => this.setState({ organicfarms: organicfarms }))
            .catch(err => console.error(err));
        MapAPI.getOutdoorStores()
            .then(outdoorstores => this.setState({ outdoorstores: outdoorstores }))
            .catch(err => console.error(err));
        MapAPI.getRandom()
            .then(random => this.setState({ random: random }))
            .catch(err => console.error(err));
        MapAPI.getStateParks()
            .then(stateparks => this.setState({ stateparks: stateparks }))
            .catch(err => console.error(err));
        
    }


    render() { 
        return (  
            <>
                <MapContainer
                    beaches={this.state.beaches}
                    dispensaries={this.state.dispensaries}
                    events={this.state.events}
                    gunstores={this.state.gunstores}
                    nationalparks={this.state.nationalparks}
                    organicfarms={this.state.organicfarms}
                    outdoorstores={this.state.outdoorstores}
                    random={this.state.random}
                    stateparks={this.state.stateparks}
                />

            </>

        );
    }
}
 
export default Data;