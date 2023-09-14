import React from "react";

const Home = ({ signedIn }) => {
    return (
        <div className="main_container">
            {signedIn ? <div>signed in</div> : <div>nope</div>}
            this is home
        </div>
    )
}

export default Home;