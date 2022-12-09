import React from "react";

function Members() {
    return (
        <div className="cardComponent">
            <h3>Group's Secret Santa</h3><br />
            <p>Budget: £</p><br />
            <p>You are gifitng to ...., this is your deadline 23/12/2022</p><br />
            <button className="participantFormButtons" onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>Copy</button>
        </div>
    )
}

export default Members;
