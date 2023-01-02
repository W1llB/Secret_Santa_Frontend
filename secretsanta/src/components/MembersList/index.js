import React from "react";
import { useContext } from "react";
import { PairsContext } from "../../Contexts/pairs-context";
import ClipboardCopy from "../ClipboardCopy/index.js";

function MembersList() {
  const pairs = useContext(PairsContext);
  if (pairs === null) {
    return (
      <div className="listTitle">
        <h3 className="listHeader">Group&apos;s Secret Santa</h3>
        <h4>Your Secret Santa list will show here</h4>
      </div>
    );
  }
  console.log(pairs);
  const pairsObjectArray = pairs[1];
  const pairsInfo = pairs[0];

  return (
    <div className="listTitle">
      <h3 className="listHeader"> Group&apos;s Secret Santa</h3>
      <br />
      <div>
        {pairsObjectArray.map((pairs) => {
          return (
            <div
              className="cardComponent"
              key={pairsObjectArray.indexOf(pairs)}
            >
              <p>
                <strong>{pairs.a}</strong> is gifting to{" "}
                <strong>{pairs.b}</strong>. <strong>Budget:</strong> £
                {pairsInfo.budget}. Gifts will be given on{" "}
                <strong>{pairsInfo.deadline}</strong>!
              </p>
              <ClipboardCopy
                className="participantFormButtons"
                copyText={`${pairs.a} is gifting to ${pairs.b}. Budget: ${pairsInfo.budget}. Gifts will be given on ${pairsInfo.deadline}`}
              ></ClipboardCopy>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MembersList;
