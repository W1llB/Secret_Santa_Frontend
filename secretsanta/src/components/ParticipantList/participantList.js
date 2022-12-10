import React from "react";


function ParticipantList({key, name, handleClick, handleChange}) {

    return (
        <div className="participantDiv" key={key}>
            <label htmlFor="participantName">New Participant</label><br />
            <input 
            type="text" id="participantName" 
            name={name} 
            onChange ={handleChange}
            />
            <button className="participantFormButtons" onClick={handleClick}>Delete</button>
        </div>
    )
}

export default ParticipantList;