
import { AiOutlineMenu } from "react-icons/ai";
import { BsLaptopFill, BsFillHouseDoorFill, BsFillLightbulbFill } from "react-icons/bs";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        // DONE: add paths to home, project, experience page
        { id: 1, title: 'Home', link: '/home', icon: <BsFillHouseDoorFill /> },
        { id: 2, title: 'Experiences', link: '/experiences', icon: <BsLaptopFill /> },
        { id: 3, title: 'Project', link: '/projects', icon: <BsFillLightbulbFill /> },
    ]
    return (
        <div className="sidebar_container">
            <div className="sidebar" style={{ width: isOpen ? "" : "60px" }} >
                {
                    // DONE: using map to loop through menuItem to create navlink for all three navigation buttons
                    // DONE: hide the texts when sidebar is collapsed 
                    // hint, classname for NavLink is link, classname for icon is icon, and classname for the text on the links is link_text
                    menuItem.map(item =>
                        <NavLink to={item.link} className="link">
                            <div className="icon" >
                                {item.icon}
                            </div>
                            <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>
                                {item.title}
                            </div>
                        </NavLink>
                    )
                }
                <div className='toggle_container'>
                    {/* DONE:  add function to make the sidebar collapsable*/}
                    {/*        Some redneck method is used for this function*/}
                    <div className="extention_toggle" onClick={toggle}>
                        <AiOutlineMenu />
                    </div>
                </div>
            </div>
            <main className="main_container">{children}</main>
        </div>
    );
};

export default Sidebar;