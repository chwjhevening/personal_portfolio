import React, { useState } from "react";
import EditExperience from "./EditExperience";

function Experience(props) {
    return (
        <div className="experience_container">
            <img src={props.image} alt="Experience" id="experience_image" />
            <div className="info_container">
                <h1 className="experience_title">{props.title}</h1>
                <p className="experience_description">{props.description}</p>
            </div>
            <div >
                {props.editExperience}
            </div>
        </div>
    )
}

export default Experience