import React from "react";
import { Card } from "../Components/ExperienceCard";
import minecraft from '../Assets/minecraft.png'


const Experiences = ({ signedIn }) => {
    var experienceList = [
        {
            image: minecraft,
            title: "Minecraft Log Hours",
            description: "Have played over 3000 hours of Minecraft"
        },
        {
            image: minecraft,
            title: "Minecraft Log Hours",
            description: "Have played over 3000 hours of Minecraft"
        },
        {
            image: minecraft,
            title: "Minecraft Log Hours",
            description: "Have played over 3000 hours of Minecraft"
        },
        {
            image: minecraft,
            title: "Minecraft Log Hours",
            description: "Have played over 3000 hours of Minecraft"
        },
        {
            image: minecraft,
            title: "Minecraft Log Hours",
            description: "Have played over 3000 hours of Minecraft"
        },
        {
            image: minecraft,
            title: "Minecraft Log Hours",
            description: "Have played over 3000 hours of Minecraft"
        }
    ]
    return (
        <div className="main_page_container">
            <h1 className="page_title">
                Experiences:
            </h1>
            <ul>
                {
                    experienceList.map((item, index) => (
                        <div key={index}>
                            <Card imgSrc={item.image}
                                cardTitle={item.title}
                                cardDesc={item.description}
                                signedIn={signedIn} />
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default Experiences;