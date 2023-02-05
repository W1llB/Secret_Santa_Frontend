import React from "react";
import PropTypes from "prop-types";

export default function CommsCard({
  incrementFormStage,
  toggleShowEmailForm,
  toggleShowPairsCard,
}) {
  function handleClickManual() {
    incrementFormStage();
    toggleShowPairsCard();
  }
  function handleClickEmail() {
    incrementFormStage();
    toggleShowEmailForm();
  }
  return (
    <div>
      <h3>
        Choose whether you want to access the result or just email them
        anonymously.
      </h3>
      <button onClick={handleClickManual}>
        I&apos;ll send out the pairs myself
      </button>
      <button onClick={handleClickEmail}>
        Keep it anonymous and send via email to the participants
      </button>
    </div>
  );
}

CommsCard.propTypes = {
  incrementFormStage: PropTypes.func,
  toggleShowEmailForm: PropTypes.func,
  toggleShowPairsCard: PropTypes.func,
};
