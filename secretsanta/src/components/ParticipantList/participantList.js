import React from "react";
import '../App/App.css';


function ParticipantList({key, name, handleClick, handleChange}) {

    return (
        <li className="participantListItem" key={key}>
            <input 
            type="text" id="participantName" 
            name={name} 
            onChange ={handleChange}
            />
            <button className="participantFormButtons" onClick={handleClick}>Delete</button>
        </li>
    )
}

export default ParticipantList;