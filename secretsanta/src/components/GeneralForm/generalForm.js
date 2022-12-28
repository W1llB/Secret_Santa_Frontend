import React from "react";
import { useState, useEffect } from "react";
import ParticipantList from "../ParticipantList/participantList";

function GeneralForm({handleChangeDetails, handleChangeMembers, handleClick, inputDetails, listGenerated}) {

    const [count, setCount] = useState(1);
    
     useEffect(() => {
        if(listGenerated) {setCount(0)};
     }, [listGenerated])

    function handleDelete(e){
        e.preventDefault()
        setCount(count-1)
    }

    function addMemberClick(e) {
        e.preventDefault()
        setCount( count + 1 );
        console.log(count);
    }

    return (
            <form className="formContainer">

                <div className="inputFieldContainer">
                    <label htmlFor="gname">Group Name: </label>
                    <input type="text" id="gname"
                     name="gname" 
                     onChange={handleChangeDetails}
                    value={inputDetails.gname}
                     />
                </div>

                <div className="inputFieldContainer">
                    <label htmlFor="budget">Budget (£): </label> 
                    <input type="number" 
                    id="budget" 
                    name="budget" 
                    onChange={handleChangeDetails}
                    value={inputDetails.budget}
                    />
                </div>

                <div className="inputFieldContainer">
                    <label htmlFor="deadline">Deadline:</label>
                    <input type="date" 
                    id="deadline" 
                    name="deadline" 
                    onChange={handleChangeDetails}
                    value={inputDetails.deadline}
                    />
                </div>



                <button className="participantFormButtons" onClick={(e) => addMemberClick(e)}>Add Person</button>
                <ol className="listContainer">
                    {Array.from(Array(count)).map((c, index) => {
                        return (
                            <ParticipantList key={c} name={index} handleClick={handleDelete} handleChange={handleChangeMembers}></ParticipantList>
                            )
                        })
                    }
                </ol>
                <button className="generateButton" onClick={(e) => handleClick(e)}>Generate</button>

            </form>
    )
}

export default GeneralForm;