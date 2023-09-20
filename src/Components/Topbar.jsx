import React, { useState } from "react";

import default_profile_pic from '../Assets/profile_pic.jpg'
import { Button } from 'react-bootstrap-buttons';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import EditPersonalInfo from "./EditPersonalInfo";

const Topbar = ({ signedIn, openLoginPage, signIn }) => {
    const [fullName, setFullName] = useState('Name')
    const [description, setDescription] = useState('Junior, Computer Science')

    function updateTopBar(name, newDescription) {
        setFullName(name)
        setDescription(newDescription)
    }

    return (
        <div className="top_bar">
            <img id="profile_img" src={default_profile_pic} alt="Default profile" />
            <div>
                <h1>{fullName}</h1>
                <h3>{description}</h3>
            </div>
            <EditPersonalInfo signedIn={signedIn} fullName={fullName} description={description} updateTopBar={updateTopBar} />
            <Button
                style={{ display: signedIn ? "none" : "block" }}
                className="login_button"
                onClick={() => openLoginPage(true)}>
                Log In
            </Button>
            <Button
                style={{ display: signedIn ? "block" : "none" }}
                className="login_button"
                onClick={() => {
                    signIn(false)
                    NotificationManager.success('You Are Successfully Logged Out!', 'Success');
                }}>
                Log Out
            </Button>
            <NotificationContainer />
        </div>
    )
}

export default Topbar;