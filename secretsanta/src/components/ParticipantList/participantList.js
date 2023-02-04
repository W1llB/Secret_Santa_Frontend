import React from "react";
import "../App/App.css";
import PropTypes from "prop-types";

function ParticipantList({ name, handleClick, handleChange, index }) {
  return (
    <li className="participantListItem">
      <input
        type="text"
        id="participantName"
        name={name}
        onChange={handleChange}
        placeholder={`Secret Santa ${index + 1}`}
      />
      <button className="participantFormButtons" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
}

ParticipantList.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  index: PropTypes.number,
};

export default ParticipantList;
