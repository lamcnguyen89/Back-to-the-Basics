import axios from "axios";

export default {
    // API request to get map data
    getBeaches: function(query) {
        return axios.get("/api/beaches");
    },
    getDispensaries: function(query) {
        return axios.get("/api/dispensaries");
    },
    getEvents: function(query) {
        return axios.get("/api/events");
    },
    getGunStores: function(query) {
        return axios.get("/api/gunstores");
    },
    getNationalParks: function(query) {
        return axios.get("/api/nationalparks");
    },
    getOrganicFarms: function(query) {
        return axios.get("/api/organicfarms");
    },
    getOutdoorStores: function(query) {
        return axios.get("/api/outdoorstores");
    },
    getRandom: function(query) {
        return axios.get("/api/random");
    },
    getStateParks: function(query) {
        return axios.get("/api/stateparks");
    }

}