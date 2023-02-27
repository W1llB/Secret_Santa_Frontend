import React from "react";
import PropTypes from "prop-types";

export default function LandingCard({ incrementFormStage }) {
  function handleClick() {
    incrementFormStage();
  }
  return (
    <div className="sub-card-container">
      <h2>Planning a Secret Santa?</h2>
      <h4>Enter the names, details and email out random pairs!</h4>

      <p className="landing-description">
        Before you get started, make sure you have your Secret Santa emails
        handy!
      </p>
      <button onClick={handleClick}>Get started!</button>
    </div>
  );
}

LandingCard.propTypes = {
  toggleShowParticipantForm: PropTypes.func,
  toggleShowLandingCard: PropTypes.func,
  incrementFormStage: PropTypes.func,
};
