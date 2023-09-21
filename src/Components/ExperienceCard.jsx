import React, { useState } from "react";
import EditExperience from "./EditExperience";

function Experience(props) {
    // = ({
    //     imgSrc,
    //     experienceTitle,
    //     experienceDesc,
    //     signedIn
    // }) => {
    //     const [experience_pic, setExperiencePic] = useState(imgSrc)
    //     const [experience_title_new, setExperienceTitle] = useState(experienceTitle)
    //     const [experience_description_new, setExperienceDes] = useState(experienceDesc)

    //     function updateExperience(experience_title, experience_description) {
    //         setExperienceTitle(experience_title)
    //         setExperienceDes(experience_description)
    //     }

    return (
        <div className="experience_container">
            <img src={props.image} alt="Experience" id="experience_image" />
            <div className="info_container">
                <h1 className="experience_title">{props.title}</h1>
                <p className="experience_description">{props.description}</p>
            </div>
            <div >
                {/* <EditExperience
                    signedIn={signedIn}
                    experienceTitle={experience_title_new}
                    experienceDesc={experience_description_new}
                    updateExperience={updateExperience}
                    experiencePic={experience_pic}
                    setExperiencePic={setExperiencePic} /> */}
                {props.editExperience}
            </div>
        </div>
    )
}

export default Experience