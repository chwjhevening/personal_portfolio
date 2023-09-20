import React from "react";
import { AiOutlineEdit } from 'react-icons/ai';

export const Card = ({
    imgSrc,
    cardTitle,
    cardDesc,
    signedIn
}) => {
    return (
        <div className="card_container">
            {imgSrc && <img src={imgSrc} alt="Card Image" id="card_image" />}
            <div className="info_container">
                <h1 className="card_title">{cardTitle}</h1>
                <p className="card_description">{cardDesc}</p>
            </div>
            <div className="edit">
                <AiOutlineEdit style={{ display: signedIn ? "block" : "none" }} />
            </div>
        </div>
    )
}