import React, { useEffect } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { useDispatch } from "react-redux";
import { loadUser } from "./actions/authActions";
import NavBar from "./components/NavBar";
import Home from "./pages/HomePage";
import UserDashboard from "./pages/UserDashboardPage";
import MapDisplay from "./pages/MapPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import PrivateRoute from "./components/PrivateRoute";
import NoMatch from "./pages/NoMatchPage";

export const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Router history={history}>
                <NavBar />
                
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <PrivateRoute path="/dashboard" component={UserDashboard} />
                    <PrivateRoute path="/displaymap" component={MapDisplay} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </>
    )
}

export default App;
