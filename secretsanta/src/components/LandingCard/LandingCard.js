import React from "react";
import PropTypes from "prop-types";

export default function LandingCard({
  toggleShowParticipantForm,
  toggleShowLandingCard,
}) {
  function handleClick() {
    toggleShowParticipantForm();
    toggleShowLandingCard();
  }
  return (
    <div>
      <h3>
        {" "}
        Planning a Secret Santa? Add your friends, any gift exchange details,
        decide whether you want to know who is gifting to whom and then decide
        whether to spread the word via email or send it yourself!
      </h3>
      <h2> Click Get Started below to begin.</h2>
      <button onClick={handleClick}>Get started!</button>
    </div>
  );
}

LandingCard.propTypes = {
  toggleShowParticipantForm: PropTypes.func,
  toggleShowLandingCard: PropTypes.func,
};
