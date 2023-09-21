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
        const updatedExperiences = experienceList.map((experience) => {
            if (id === experience.id) {
                return { ...experience, title: newTitle, description: newDescription, image: newImage };
            }

            return experience;
        });
        setExperiences(updatedExperiences);
    }

    function newExperience(newTitle, newDescription, newImage) {
        const newExperience = {
            id: uuidv4(),
            title: newTitle,
            description: newDescription,
            image: newImage,
        };
        setExperiences([...experienceList, newExperience]);
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

                    }

                        // <div key={index}>
                        //     <Card imgSrc={item.image}
                        //         cardTitle={item.title}
                        //         cardDesc={item.description}
                        //         signedIn={signedIn} />
                        // </div>
                    )
                }
            </ul>
        </div>
    )
}

export default Experiences;