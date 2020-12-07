import axios from "axios";

export default {
    // API request to get map data
    getPlaces: function(query) {
        return axios.get("/api/places");
    },
    // API request to add a new place to the map
    addPlace: function(placeData) {
        
        return axios.post("/api/newplace", placeData).then(result => result.data);
    }
    

}