import React from "react";
import ParticipantList from "../ParticipantList/participantList";

function GeneralForm() {
    
    return (
        <form className="formContainer">
            <label for="gname">Group Name:</label><br />
            <input type="text" id="gname" name="gname"/><br />
            
            <label for="deadline">Deadline:</label><br />
            <input type="date" id="deadline" name="deadline"/><br />

            <label for="budget">Budget</label><br />
            <i>£</i><input type="number" id="budget" name="budget" />
            <ParticipantList></ParticipantList>
            <button className="generateButton">Generate</button>
        </form>
    )
}

export default GeneralForm;