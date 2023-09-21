
import { AiOutlineMenu } from "react-icons/ai";
import { BsLaptopFill, BsFillHouseDoorFill, BsFillLightbulbFill } from "react-icons/bs";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        // TODO: add paths to home, project, experience page
    ]
    return (
        <div className="sidebar_container">
            <div className="sidebar">
                {
                    // TODO: using map to loop through menuItem to create navlink for all three navigation buttons
                    // TODO: hide the texts when sidebar is collapsed 
                    // hint, classname for NavLink is link, classname for icon is icon, and classname for the text on the links is link_text
                }
                <div className='toggle_container'>
                    {/* TODO:  add function to make the sidebar collapsable*/}
                    <div className="extention_toggle">
                        <AiOutlineMenu />
                    </div>
                </div>
            </div>
            <main className="main_container">{children}</main>
        </div>
    );
};

export default Sidebar;