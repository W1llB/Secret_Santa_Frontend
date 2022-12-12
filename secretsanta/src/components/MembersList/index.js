import React from "react";
import { useContext } from "react";
import { PairsContext } from "../../Contexts/pairs-context";

function MembersList() {
    const pairs = useContext(PairsContext)
    console.log(pairs)
    if (pairs === null) {
        return (
            <h3>Your Secret Santa list will show here</h3>
        )
    }
    const pairsObjectArray = pairs[1]
    const pairsInfo = pairs[0]
    console.log('context ',pairs)

    return (
        <div>
            <h3 className="listTitle">Group's Secret Santa</h3><br />
                <div>
                    {pairsObjectArray.map((pairs) =>{
                        return (
                        <div className="cardComponent">
                            <p>Budget: £{pairsInfo.budget}</p><br />
                            <p>{pairs.a} is gifting to {pairs.b}</p><br />
                            <p>Gifts will be given on {pairsInfo.deadline}</p><br />
                            <button className="participantFormButtons" >Copy</button>
                        </div>
                        )})}

                </div>
        </div>
    )
}

export default MembersList;
