import React, { useState } from "react";
import { Button } from 'react-bootstrap-buttons';

const Login = ({ signIn, closeLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login_container" >
            <div className="login_page">
                <div className="cancel_button">
                    <Button onClick={() => closeLogin(false)}>
                        X
                    </Button>
                </div>
                <form>
                    <h1 htmlFor="username">
                        Username
                    </h1>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} username="username" id="username" name="username" />
                    <h1 htmlFor="password">
                        Password
                    </h1>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} password="password" id="password" name="password" />
                </form>
                <Button className="submit_button" onClick={() => {
                    if (username === "admin" && password === "123456") {
                        signIn(true)
                        closeLogin(false)
                    }
                }}>
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default Login;