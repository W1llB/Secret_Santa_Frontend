import React from "react";
import "../App/App.css";
import PropTypes from "prop-types";

function ParticipantList({ name, handleChange, index, inputMembers }) {
  return (
    <input
      className="participantListItem"
      type="text"
      id="participantName"
      name={name}
      onChange={handleChange}
      value={inputMembers[index] ? inputMembers[index] : ""}
      placeholder={`Secret Santa ${index + 1}`}
    />
  );
}

ParticipantList.propTypes = {
  name: PropTypes.number,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  index: PropTypes.number,
  inputMembers: PropTypes.object,
};

export default ParticipantList;
