import React from "react";
import { Button } from 'react-bootstrap-buttons';

const Login = ({ closeLogin }) => {
    return (
        <div className="login_container" >
            <div className="login_page">
                <form>
                    <h1>Username</h1>
                    <label>
                        <input type="text" username="username" />
                    </label>
                    <h1>Password</h1>
                    <label>
                        <input type="text" password="password" />
                    </label>
                </form>
                <Button className="submit_button" onClick={() => closeLogin(false)}>
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default Login;