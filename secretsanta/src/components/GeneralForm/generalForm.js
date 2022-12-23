import React from "react";
import { useState } from "react";
import ParticipantList from "../ParticipantList/participantList";

function GeneralForm({handleChangeDetails, handleChangeMembers, handleClick}) {

    const [count, setCount] = useState(1);
    // const [countArray, setCountArray] = useState([1]);

    function handleDelete(e){
        e.preventDefault()
        setCount(count-1)
    }

    function addMemberClick(e) {
        e.preventDefault()
        setCount( count + 1 );
        console.log(count);
        // let newArray = [...countArray, count];
        // setCountArray(countArray);
    }

    return (
            <form className="formContainer">

                <div className="inputFieldContainer">
                    <label htmlFor="gname">Group Name: </label>
                    <input type="text" id="gname" name="gname" onChange={handleChangeDetails}/>
                </div>

                <div className="inputFieldContainer">
                    <label htmlFor="budget">Budget (£): </label> 
                    <input type="number" id="budget" name="budget" onChange={handleChangeDetails}/>
                </div>

                <div className="inputFieldContainer">
                    <label htmlFor="deadline">Deadline:</label>
                    <input type="date" id="deadline" name="deadline" onChange={handleChangeDetails}/><br />
                </div>



                <button className="participantFormButtons" onClick={(e) => addMemberClick(e)}>Add</button>
                <div className="listContainer">
                    {Array.from(Array(count)).map((c, index) => {
                        return (
                            <ParticipantList key={c} name={index} handleClick={handleDelete} handleChange={handleChangeMembers}></ParticipantList>
                            )
                        })
                    }
                </div>
                <button className="generateButton" onClick={(e) => handleClick(e)}>Generate</button>

            </form>
    )
}

export default GeneralForm;