import React from "react";
import { useState } from "react";
import ParticipantList from "../ParticipantList/participantList";

function GeneralForm({handleChange}) {
    
    return (
        <form className="formContainer">
            <label for="gname">Group Name:</label><br />
            <input type="text" id="gname" name="gname" onChange={handleChange}/><br />
            
            <label for="deadline">Deadline:</label><br />
            <input type="date" id="deadline" name="deadline" onChange={handleChange}/><br />

            <label for="budget">Budget</label><br />
            <i>£</i><input type="number" id="budget" name="budget" onChange={handleChange}/>
            <ParticipantList></ParticipantList>
            <button className="generateButton">Generate</button>
        </form>
    )
}

export default GeneralForm;