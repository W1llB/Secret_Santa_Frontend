import React from "react";
import PropTypes from "prop-types";
import backChevron from "../../icons/back_chevron.png";
import forwardChevron from "../../icons/forward_chevron.png";

export default function NavBar({
  formStage,
  decrementFormStage,
  incrementFormStage,
}) {
  return (
    <div>
      {formStage > 0 && <img src={backChevron} onClick={decrementFormStage} />}
      {formStage < 3 && (
        <img src={forwardChevron} onClick={incrementFormStage} />
      )}
    </div>
  );
}

NavBar.propTypes = {
  formStage: PropTypes.number,
  decrementFormStage: PropTypes.func,
  incrementFormStage: PropTypes.func,
};
