import React from "react";
import { useState } from "react";
import ParticipantList from "../ParticipantList/participantList";

function GeneralForm({handleChange}) {

    const [count, setCount] = useState(1);
    // const [countArray, setCountArray] = useState([1]);



    function addMemberClick() {
        setCount( count + 1 );
        console.log(count);
        // let newArray = [...countArray, count];
        // setCountArray(countArray);
    }

    return (
        <div>

            <form className="formContainer">
                <label for="gname">Group Name:</label><br />
                <input type="text" id="gname" name="gname" onChange={handleChange}/><br />
                
                <label for="deadline">Deadline:</label><br />
                <input type="date" id="deadline" name="deadline" onChange={handleChange}/><br />

                <label for="budget">Budget</label><br />
                <i>£</i><input type="number" id="budget" name="budget" onChange={handleChange}/><br />

                
                <button className="participantFormButtons" onClick={addMemberClick}>Add</button>
                <div className="listContainer">
                    {Array.from(Array(count)).map((c, index) => {
                        return (
                            <ParticipantList key={c} name={index}></ParticipantList>
                            )
                        })
                    }
                </div>
            </form>

            <button className="generateButton">Generate</button>

        </div>
    )
}

export default GeneralForm;