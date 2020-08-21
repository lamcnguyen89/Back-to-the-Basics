import axios from "axios";

export default {
    // API request to get map data
    getBeaches: function(query) {
        return axios.get("/api/beaches");
    },
    getPlaces: function(query) {
        return axios.get("/api/places");
    },
    
    

}