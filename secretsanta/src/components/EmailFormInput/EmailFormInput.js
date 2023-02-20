import React from "react";
import PropTypes from "prop-types";

export default function EmailFormInput({ name, handleEmailChange }) {
  return (
    <div>
      <label>{name}:</label>
      <input name={name} onChange={handleEmailChange} />
    </div>
  );
}

EmailFormInput.propTypes = {
  name: PropTypes.string,
  handleEmailChange: PropTypes.func,
};
