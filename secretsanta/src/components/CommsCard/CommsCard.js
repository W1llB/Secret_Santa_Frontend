import React from "react";
import PropTypes from "prop-types";

export default function CommsCard({ toggleShowCommsCard }) {
  function handleClick() {
    toggleShowCommsCard();
  }
  return (
    <div>
      <h3>
        Choose whether you want to access the result or just email them
        anonymously.
      </h3>
      <button onClick={handleClick}>I&apos;ll send out the pairs myself</button>
      <button onClick={handleClick}>
        Keep it anonymous and send via email to the participants
      </button>
    </div>
  );
}

CommsCard.propTypes = {
  toggleShowCommsCard: PropTypes.func,
};
