import React from "react";
import { useContext } from "react";
import { PairsContext } from "../../Contexts/pairs-context";

function MembersList() {
    const pairs = useContext(PairsContext)
    if (pairs === null) {
        return (
            <h3>Your Secret Santa list will show here</h3>
        )
    }
    const pairsObjectArray = pairs[1]
    const pairsInfo = pairs[0]

    return (
        <div className="listTitle">
            <h3 className="listHeader">Group's Secret Santa</h3><br />
                <div>
                    {pairsObjectArray.map((pairs) =>{
                        return (
                        <div className="cardComponent">
                            <p><strong>{pairs.a}</strong> is gifting to <strong>{pairs.b}</strong>. <strong>Budget:</strong> £{pairsInfo.budget}. Gifts will be given on {pairsInfo.deadline}.
                            </p>
                            {/* <p>Budget: £{pairsInfo.budget}</p><br />
                            <p> Gifts will be given on {pairsInfo.deadline}</p><br /> */}
                            <button className="participantFormButtons" >Copy</button>
                        </div>
                        )})}

                </div>
        </div>
    )
}

export default MembersList;
