import React from "react";

function ParticipantList() {

    return (
        <form className="participantFormSection">
            <label for="participantName">New Participant:</label><br />
            <input type="text" id="participantName" name="participantName" value="New Participant"/>
            <button className="participantFormButtons">Add</button>
            <button className="participantFormButtons">Delete</button>
        </form>
    )
}

export default ParticipantList;