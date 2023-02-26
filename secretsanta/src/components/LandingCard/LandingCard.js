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
        {/* Add your friends, any gift exchange details, decide whether you want to
        know who is gifting to whom and then decide whether to spread the word
        via email or send it yourself! */}
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
