import React, { useState } from "react";
import { Button } from 'react-bootstrap-buttons';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const Login = ({ signIn, closeLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login_container" >
            <div className="login_page">
                <div className="cancel_button">
                    <Button
                    // TODO: Add function to exit out of the pop up
                    >
                        X
                    </Button>
                </div>
                <form>
                    <h2 htmlFor="username">
                        Username
                    </h2>
                    <input type="text"
                        // TODO: add onChange function to set username
                        username="username" id="username" name="username" />
                    <h2 htmlFor="password">
                        Password
                    </h2>
                    <input type="text"
                        // TODO: add onChange function to set password
                        password="password" id="password" name="password" />
                </form>
                <Button className="submit_button" onClick={(e) => {
                    // TODO: show notification message 'You Are Successfully Logged In!' and close pop up if username entered was admin and pasword was 123456
                    // TODO: show error notification with message 'Incorrect Username or Password!' and alert message 'Please Enter the Correct Username and Password!' otherwise
                    // Hint: use NotificationManager
                }}>
                    Submit
                </Button>
                <NotificationContainer />
            </div>
        </div>

    );
};

export default Login;