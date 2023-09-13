import React from "react";

import default_profile_pic from '../Assets/profile_pic.jpg'
import { Button } from 'react-bootstrap-buttons';

const Topbar = ({ openLoginPage }) => {
    return (
        <div className="top_bar">
            <img id="profile_img" src={default_profile_pic} />
            <div className="basic_info">
                <h1>Name</h1>
                <h3>Junior, Computer Science</h3>
            </div>
            <Button
                className="login_button"
                onClick={() => openLoginPage(true)}>
                Log In
            </Button>
        </div>
    )
}

export default Topbar;