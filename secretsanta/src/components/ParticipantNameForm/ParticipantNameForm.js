import React, { useState, useEffect } from "react";
import ParticipantList from "../ParticipantList/participantList";
import PropTypes from "prop-types";
import { findDuplicateNames } from "../../utils/utils";
import { checkLengthGreaterThan } from "../../utils/utils";

export default function ParticipantNameForm({
  setFinalGroup,
  setInputMembers,
  inputMembers,
  incrementFormStage,
}) {
  const [count, setCount] = useState(4);
  const [duplicateCheck, setDuplicateCheck] = useState(false);
  const [checkThree, setCheckThree] = useState(false);

  function addMemberClick(e) {
    e.preventDefault();
    setCount(count + 1);
  }
  useEffect(() => {
    findDuplicateNames(inputMembers, setDuplicateCheck);
    checkLengthGreaterThan(2, inputMembers, setCheckThree);
  }, [inputMembers]);

  function handleSubmitNames() {
    if (duplicateCheck && checkThree) {
      setFinalGroup(inputMembers);
      incrementFormStage();
    }
  }

  function handleChangeMembers(e) {
    setInputMembers({
      ...inputMembers,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="stage-container">
      <h3>Please enter the names of your Secret Santas.</h3>
      <div className="listContainer">
        <ol className="list">
          {Array.from(Array(count)).map((c, index) => {
            return (
              <ParticipantList
                key={index}
                name={index}
                handleChange={handleChangeMembers}
                index={index}
                inputMembers={inputMembers}
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
      <div className="error-container">
        {!duplicateCheck && (
          <p className="error-message">Names must be unique.</p>
        )}
        {!checkThree && (
          <p className="error-message">3 names or more required.</p>
        )}
      </div>
    </div>
  );
}

ParticipantNameForm.propTypes = {
  inputMembers: PropTypes.object,
  setInputMembers: PropTypes.func,
  setFinalGroup: PropTypes.func,
  incrementFormStage: PropTypes.func,
};
