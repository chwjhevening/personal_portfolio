import React, { useState } from "react";

import default_profile_pic from '../Assets/profile_pic.jpg'
import { Button } from 'react-bootstrap-buttons';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import EditPersonalInfo from "./EditPersonalInfo";

const Topbar = ({ signedIn, openLoginPage, signIn }) => {
    const [fullName, setFullName] = useState('Name')
    const [description, setDescription] = useState('Junior, Computer Science')
    const [profile_pic, setProfilePic] = useState(default_profile_pic)

    function updateTopBar(name, newDescription) {
        // TODO: set the new topbar information
    }

    return (
        <div className="top_bar">
            <img id="profile_img" src={profile_pic} alt="Default profile" />
            <div>
                <h1>{fullName}</h1>
                <h3>{description}</h3>
            </div>
            <EditPersonalInfo
                signedIn={signedIn}
                fullName={fullName}
                description={description}
                updateTopBar={updateTopBar}
                profilePic={profile_pic}
                setProfilePic={setProfilePic} />
            <Button
                // TODO: Add line to hide this button when logged in
                className="login_button"
            // TODO: Add line to turn on login pop up
            >
                Log In
            </Button>
            <Button
                // TODO: Add line to hide this button when logged out
                className="login_button"
            // TODO: Add function to show notification with message 'You Are Successfully Logged Out!' by using NotificationManager
            >
                Log Out
            </Button>
            <NotificationContainer />
        </div>
    )
}

export default Topbar;