
import { AiOutlineMenu } from "react-icons/ai";
import { BsLaptopFill, BsFillHouseDoorFill, BsFillLightbulbFill } from "react-icons/bs";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <BsFillHouseDoorFill />
        },
        {
            path: "/projects",
            name: "Projects",
            icon: <BsFillLightbulbFill />
        },
        {
            path: "/experiences",
            name: "Experiences",
            icon: <BsLaptopFill />
        }
    ]
    return (
        <div className="sidebar_container">
            <div style={{ width: isOpen ? "300px" : "100px" }} className="sidebar">
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                <div className='toggle_container' onClick={toggle}>
                    <div className="extention_toggle">
                        <AiOutlineMenu />
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;