import React from "react";
import { useContext } from "react";
import { PairsContext } from "../../Contexts/pairs-context";
import ClipboardCopy from "../ClipboardCopy";

export default function PairsCard() {
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
      <h3 className="listHeader">
        {" "}
        Wahey! Your Secret Santa pairs have been generated. <br /> Use the copy
        buttons to quickly share this with your Santas.{" "}
      </h3>
      <div>
        {pairsObjectArray.map((pairs) => {
          return (
            <div
              className="cardComponent"
              key={pairsObjectArray.indexOf(pairs)}
            >
              <h4>{pairs.a}</h4>
              <p>
                {" "}
                is gifting to <p />
                <h4>{pairs.b}</h4>
              </p>
              <ClipboardCopy
                className="participantFormButtons"
                copyText={`🎅You are gifting to ${pairs.b}. Budget: ${pairsInfo.budget}. Gifts will be given on ${pairsInfo.deadline}🎅`}
              ></ClipboardCopy>
            </div>
          );
        })}
      </div>
    </div>
  );
}
