import React, { Component } from 'react';
import MapAPI from '../utils/MapAPI';

// Source 1: https://github.com/beaucarnes/mern-exercise-tracker/blob/master/src/components/create-exercise.component.js

class InputData extends Component {
    constructor(props) {

        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeLat = this.onChangeLat.bind(this);
        this.onChangeLng = this.onChangeLng.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            title: "",
            address: "",
            phone: "",
            lat: "",
            lng: "",
            icon: "/images/icons/eventSmaller.png",
            description: "",
            category: "event"
        }
    }

     // Add methods which can be used to update the state properties:
     onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
      }
      onChangeAddress(e) {
        this.setState({
          address: e.target.value
        });
      }
      onChangePhone(e) {
        this.setState({
          phone: e.target.value
        });
      }
      onChangeLat(e) {
        this.setState({
          lat: e.target.value
        });
      }
      onChangeLng(e) {
        this.setState({
          lng: e.target.value
        });
      }
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        });
      }

    // Method to handle the submit event of the form:
    onSubmit(e) {
        console.log("Onsubmit fired");
        window.location.reload(false);
        e.preventDefault();
        const newWayPoint = {
          title: this.state.title,
          address: this.state.address,
          phone: this.state.phone,
          lat: this.state.lat,
          lng: this.state.lng,
          icon: this.state.icon,
          contentString: this.state.description,
          category: this.state.category
        };
      MapAPI.addPlace(newWayPoint)
        .then(res => console.log(res.data));
      }
  
    render() { 
        return (  
             <div className="m-2"> 
                  <h3>Create New Waypoint Location</h3>
                  <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group"> 
                      <label>Event Title: </label>
                      <input  type="text"
                          required
                          className="form-control"
                          value={this.state.title}
                          onChange={this.onChangeTitle}
                          />
                    </div>
                    <div className="form-group"> 
                      <label>Event Address: </label>
                      <input  type="text"
                          required
                          className="form-control"
                          value={this.state.address}
                          onChange={this.onChangeAddress}
                          />
                    </div>
                    <div className="form-group"> 
                      <label>Event Phone Number: </label>
                      <input  type="text"
                          required
                          className="form-control"
                          value={this.state.phone}
                          onChange={this.onChangePhone}
                          />
                    </div>
                    <div className="form-group"> 
                      <label>Event Latitude: </label>
                      <input  type="text"
                          required
                          className="form-control"
                          value={this.state.latitude}
                          onChange={this.onChangeLat}
                          />
                    </div>
                    <div className="form-group"> 
                      <label>Event Longitude: </label>
                      <input  type="text"
                          required
                          className="form-control"
                          value={this.state.longitude}
                          onChange={this.onChangeLng}
                          />
                    </div>
          
                    <div className="form-group"> 
                      <label>Event Description: </label>
                      <input  type="text"
                          required
                          className="form-control"
                          value={this.state.description}
                          onChange={this.onChangeDescription}
                          />
                    </div>

                    <div className="form-group">
                      <input type="submit" value="Create new Location" className="btn btn-primary" />
                    </div>
                  </form>
                </div>
        );
    }
}
 
export default InputData;

