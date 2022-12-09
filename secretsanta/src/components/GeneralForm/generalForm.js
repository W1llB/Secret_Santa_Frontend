import React from "react";
import { useState } from "react";
import ParticipantList from "../ParticipantList/participantList";

function GeneralForm({handleChange}) {

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
                <label for="gname">Group Name:</label><br />
                <input type="text" id="gname" name="gname" onChange={handleChange}/><br />
                
                <label for="deadline">Deadline:</label><br />
                <input type="date" id="deadline" name="deadline" onChange={handleChange}/><br />

                <label for="budget">Budget</label><br />
                <i>£</i><input type="number" id="budget" name="budget" onChange={handleChange}/><br />

                
                <button className="participantFormButtons" onClick={(e) => addMemberClick(e)}>Add</button>
                <div className="listContainer">
                    {Array.from(Array(count)).map((c, index) => {
                        return (
                            <ParticipantList key={c} name={index} handleClick={handleDelete}></ParticipantList>
                            )
                        })
                    }
                </div>
                <button className="generateButton">Generate</button>

            </form>
    )
}

export default GeneralForm;