import React from "react";

import default_profile_pic from '../Assets/profile_pic.jpg'
import { Button } from 'react-bootstrap-buttons';

const Topbar = ({ signedIn, openLoginPage, signIn }) => {
    return (
        <div className="top_bar">
            <img id="profile_img" src={default_profile_pic} alt="Default profile" />
            <div className="basic_info">
                <h1>Name</h1>
                <h3>Junior, Computer Science</h3>
            </div>
            <Button
                style={{ display: signedIn ? "none" : "block" }}
                className="login_button"
                onClick={() => openLoginPage(true)}>
                Log In
            </Button>
            <Button
                style={{ display: signedIn ? "block" : "none" }}
                className="login_button"
                onClick={() => signIn(false)}>
                Log Out
            </Button>
        </div>
    )
}

export default Topbar;