import React from "react";
import PropTypes from "prop-types";
import "./LandingCard.css";

export default function LandingCard({ incrementFormStage }) {
  function handleClick() {
    incrementFormStage();
  }
  return (
    <div className="sub-card-container">
      <h2>Planning a Secret Santa?</h2>
      <p className="landing-description">
        Add your friends, any gift exchange details, decide whether you want to
        know who is gifting to whom and then decide whether to spread the word
        via email or send it yourself!
      </p>
      <h3> Click Get Started below to begin.</h3>
      <button onClick={handleClick}>Get started!</button>
    </div>
  );
}

LandingCard.propTypes = {
  toggleShowParticipantForm: PropTypes.func,
  toggleShowLandingCard: PropTypes.func,
  incrementFormStage: PropTypes.func,
};
