import React, { useState } from "react";
import minecraft from '../Assets/minecraft.png'
import { v4 as uuidv4 } from 'uuid';
import EditExperience from "../Components/EditExperience";
import Experience from "../Components/ExperienceCard"
import AddExperience from "../Components/AddExperience";


const Experiences = ({ signedIn }) => {
    var [experienceList, setExperiences] = useState([
        {
            id: 1,
            image: minecraft,
            title: "Minecraft Log Hours",
            description: "Have played over 3000 hours of Minecraft"
        },
        {
            id: 2,
            image: minecraft,
            title: "Minecraft Log Hours",
            description: "Have played over 3000 hours of Minecraft"
        },
        {
            id: 3,
            image: minecraft,
            title: "Minecraft Log Hours",
            description: "Have played over 3000 hours of Minecraft"
        },
        {
            id: 4,
            image: minecraft,
            title: "Minecraft Log Hours",
            description: "Have played over 3000 hours of Minecraft"
        },
        {
            id: 5,
            image: minecraft,
            title: "Minecraft Log Hours",
            description: "Have played over 3000 hours of Minecraft"
        },
        {
            id: 6,
            image: minecraft,
            title: "Minecraft Log Hours",
            description: "Have played over 3000 hours of Minecraft"
        }
    ])

    function updateExperience(id, newTitle, newDescription, newImage) {
        // DONE: map through the experienceList, find the experience needed to be updated, update it, and update the experienceList
        const newExperienceList = experienceList.map((item) => {
            if (id === item.id) return {
                id: item.id,
                image: newImage,
                title: newTitle,
                description: newDescription,
            };
            return item;
        })
        setExperiences(newExperienceList)
    }

    function newExperience(newTitle, newDescription, newImage) {
        // DONE: create experience object with info given, with an id generated with uuidv4 then update experienceList 
        const newExperience = {
            id: uuidv4(),
            image: newImage,
            title: newTitle,
            description: newDescription,
        }
        setExperiences([...experienceList, newExperience])
    }

    return (
        <div className="main_page_container">
            <h1 className="page_title">
                <div>Experiences</div>
                <AddExperience
                    newExperience={newExperience}
                    signedIn={signedIn} />
            </h1>
            <ul>
                {
                    experienceList.map((experience) => {
                        const editExperience = (
                            <EditExperience
                                id={experience.id}
                                signedIn={signedIn}
                                title={experience.title}
                                description={experience.description}
                                updateExperience={updateExperience}
                                image={experience.image}
                            />
                        )
                        return (<Experience
                            key={experience.id}
                            id={experience.id}
                            title={experience.title}
                            description={experience.description}
                            image={experience.image}
                            editExperience={editExperience}
                        />)
                    })
                }
            </ul>
        </div>
    )
}

export default Experiences;