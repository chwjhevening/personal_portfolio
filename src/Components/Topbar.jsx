import React, { useState } from "react";

import default_profile_pic from '../Assets/profile_pic.jpg'
import { Button } from 'react-bootstrap-buttons';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import EditPersonalInfo from "./EditPersonalInfo";
import Login from "./Login";

const Topbar = ({ signedIn, openLoginPage, signIn }) => {
    const [fullName, setFullName] = useState('Name')
    const [description, setDescription] = useState('Junior, Computer Science')
    const [profile_pic, setProfilePic] = useState(default_profile_pic)

    function updateTopBar(name, newDescription) {
        // DONE: set the new topbar information
        setFullName(name);
        setDescription(newDescription);
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
                // DONE: Add line to hide this button when logged in
                style={{ display: signedIn ? "none" : "block" }}
                className="login_button"
                // DONE: Add line to turn on login pop up
                onClick={openLoginPage}
            >
                Log In
            </Button>
            <Button
                // DONE: Add line to hide this button when logged out
                style={{ display: signedIn ? "block" : "none" }}
                className="login_button"
                // DONE: Add function to show notification with message 'You Are Successfully Logged Out!' by using NotificationManager
                onClick={()=> {
                    signIn(false)
                    NotificationManager.success('You Are Successfully Logged Out!', 'Logout Success', 2000)
                }}
            >
                Log Out
            </Button>
            <NotificationContainer />
        </div>
    )
}

export default Topbar;