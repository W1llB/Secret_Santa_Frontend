import React, { useState, useEffect } from "react";
import ParticipantList from "../ParticipantList/participantList";
import PropTypes from "prop-types";

export default function ParticipantNameForm({
  setFinalGroup,
  setInputMembers,
  inputMembers,
  incrementFormStage,
}) {
  const [count, setCount] = useState(4);
  const [duplicateCheck, setDuplicateCheck] = useState(false);

  function findDuplicateNames(inputMembersObject) {
    const namesArray = Object.values(inputMembersObject);
    let result = namesArray.some((element, index) => {
      return namesArray.indexOf(element) !== index;
    });
    setDuplicateCheck(!result);
  }
  function addMemberClick(e) {
    e.preventDefault();
    setCount(count + 1);
  }
  useEffect(() => {
    findDuplicateNames(inputMembers);
  }, [inputMembers]);

  function handleSubmitNames() {
    if (duplicateCheck) {
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
  console.log(inputMembers);
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
      {!duplicateCheck && <p>Names must be unique.</p>}
    </div>
  );
}

ParticipantNameForm.propTypes = {
  inputMembers: PropTypes.object,
  setInputMembers: PropTypes.func,
  setFinalGroup: PropTypes.func,
  incrementFormStage: PropTypes.func,
};
