import React from "react";
import PropTypes from "prop-types";

export default function EmailFormInput({ name, handleEmailChange }) {
  return (
    <div className="inputFieldContainerEmail">
      <label>{name}:</label>
      <input
        name={name}
        onChange={handleEmailChange}
        placeholder={`${name}'s email address`}
        type="email"
        required="required"
      />
    </div>
  );
}

EmailFormInput.propTypes = {
  name: PropTypes.string,
  handleEmailChange: PropTypes.func,
};
