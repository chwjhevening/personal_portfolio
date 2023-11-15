import React from "react";


function Project(props) {
    return (
        <div className="experience_container">
            <img src={props.image} alt="Project" id="experience_image" />
            <div className="info_container">
                <h1 className="experience_title">{props.title}</h1>
                <p className="experience_description">{props.description}</p>
            </div>
            <div>
                {props.editProject}
            </div>
        </div>
    )
}

export default Project