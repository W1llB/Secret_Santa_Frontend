import React from "react";
import { useState } from "react";
import ParticipantList from "../ParticipantList/participantList";
import PropTypes from "prop-types";

export default function ParticipantNameForm({
  setFinalGroup,
  setInputMembers,
  inputMembers,
  incrementFormStage,
}) {
  const [count, setCount] = useState(4);

  function addMemberClick(e) {
    e.preventDefault();
    setCount(count + 1);
  }

  function handleSubmitNames() {
    setFinalGroup(inputMembers);
    incrementFormStage();
  }

  function handleChangeMembers(e) {
    setInputMembers({
      ...inputMembers,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <h3>Please enter the names of your Secret Santas.</h3>
      <div className="listContainer">
        <ol className="list">
          {Array.from(Array(count)).map((c, index) => {
            return (
              <ParticipantList
                key={index}
                name={`${index}`}
                handleChange={handleChangeMembers}
                index={index}
              ></ParticipantList>
            );
          })}
        </ol>
      </div>
      <button
        className="participantFormButtons"
        onClick={(e) => addMemberClick(e)}
      >
        Add Person
      </button>
      <button onClick={handleSubmitNames}>Submit Names</button>
    </div>
  );
}

ParticipantNameForm.propTypes = {
  inputMembers: PropTypes.object,
  setInputMembers: PropTypes.func,
  setFinalGroup: PropTypes.func,
  incrementFormStage: PropTypes.func,
};
