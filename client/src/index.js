import React from "react";
import reactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css'
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

// Import Bootstrap
// Source: https://stackoverflow.com/questions/50980046/bootstrap-dropdown-not-working-in-react
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./index.css";

reactDOM.render(
    // Wrap all APP with the react redux provider and pass the redux store to have access to global state
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#root'));