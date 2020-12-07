
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
            <Header secondary="true" textAlign='center'>
                <h1>Enter to Find Your Adventure</h1>
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