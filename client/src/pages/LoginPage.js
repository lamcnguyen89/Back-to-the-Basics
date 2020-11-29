
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm";
import { loginUser } from "../actions/authActions";

const Login = (props) => {
    // access to the isAuthenticated property from the auth reducer state
    const { isAuthenticated } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/displaymap")
        }

    })

    const renderFormMessage = () => {
        return <>New to us ? <Link to="/register">Register</Link></>
    }

    const onFormSubmit = (formVal) => {
        dispatch(loginUser(formVal));
    }

    return (
        <div className="form-container">
            <Header as='h2' secondary="true" textAlign='center'
            style={{
                listStyleType: "none",
                color:"#49B0F8",
                fontSize:"30pt",
                // textDecoration: "underline",
              }}
            >
                Enter to Find Your Adventure
                </Header>
            <LoginForm
                renderMessage={renderFormMessage}
                buttonText="Login"
                onSubmit={onFormSubmit}
                
            />
        </div>
    )
}

export default Login;