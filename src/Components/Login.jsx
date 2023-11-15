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
                        // DONE: Add function to exit out of the pop up
                        onClick={() => closeLogin(false)}
                    >
                        X
                    </Button>
                </div>
                <form>
                    <h2 htmlFor="username">
                        Username
                    </h2>
                    <input type="text"
                        // DONE: add onChange function to set username
                        onChange={(e) => setUsername(e.target.value)}
                        username="username" id="username" name="username" />
                    <h2 htmlFor="password">
                        Password
                    </h2>
                    <input type="text"
                        // DONE: add onChange function to set password
                        onChange={(e) => setPassword(e.target.value)}
                        password="password" id="password" name="password" />
                </form>
                <Button className="submit_button" onClick={(e) => {
                    if (username === "admin" && password === "123456") {
                        // TODO: show notification message 'You Are Successfully Logged In!' and close pop up if username entered was admin and pasword was 123456
                        signIn(true)
                        closeLogin()
                        NotificationManager.success('You Are Successfully Logged In!', 'Login Success', 2000)
                    } else {
                        // DONE: show error notification with message 'Incorrect Username or Password!' and alert message 'Please Enter the Correct Username and Password!' otherwise
                        signIn(false)
                        NotificationManager.error('Incorrect Username or Password!', '', 3000, () => {
                            alert('Please Enter the Correct Username and Password!');
                        });
                    }// Hint: use NotificationManager

                }}>
                    Submit
                </Button>
                <NotificationContainer />
            </div>
        </div >

    );
};

export default Login;