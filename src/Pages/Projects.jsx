import React, { useState } from "react";
import minecraft from '../Assets/minecraft.png'
import { v4 as uuidv4 } from 'uuid';
import EditProject from "../Components/EditProject";
import Project from "../Components/ProjectCard"
import AddProject from "../Components/AddProject";
import default_profile_pic from '../Assets/profile_pic.jpg'

const Projects = ({ signedIn }) => {
    var [projectList, setProjects] = useState([
        {
            id: 1,
            image: default_profile_pic,
            title: "Website About Me",
            description: "Making a website that introduces myself"
        },
        {
            id: 2,
            image: minecraft,
            title: "Minecraft Hours Goal",
            description: "Progressing to play over 6000 hours of Minecraft"
        },
    ])

    function updateProject(id, newTitle, newDescription, newImage) {
        // map through the projectList, find the project needed to be updated, update it, and update the projectList
        const newProjectList = projectList.map((item) => {
            if (id === item.id) return {
                id: item.id,
                image: newImage,
                title: newTitle,
                description: newDescription,
            };
            return item;
        })
        setProjects(newProjectList)
    }

    function newProject(newTitle, newDescription, newImage) {
        // create project object with info given, with an id generated with uuidv4 then update projectList 
        const newProject = {
            id: uuidv4(),
            image: newImage,
            title: newTitle,
            description: newDescription,
        }
        setProjects([...projectList, newProject])
    }

    return (
        <div className="main_page_container">
            <h1 className="page_title">
                {/* DONE: create a project page similar to the project page */}
                <div>My Projects</div>
                <AddProject
                    newProject={newProject}
                    signedIn={signedIn} />
            </h1>
            <ul>
                {
                    projectList.map((project) => {
                        const editProject = (
                            <EditProject
                                id={project.id}
                                signedIn={signedIn}
                                title={project.title}
                                description={project.description}
                                updateProject={updateProject}
                                image={project.image}
                            />
                        )
                        return (<Project
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            editProject={editProject}
                        />)
                    })
                }
            </ul>
        </div>
    )
}

export default Projects;