import React from "react";
import PropTypes from "prop-types";

export default function EmailFormInput({ name }) {
  return (
    <div>
      <label>{name}:</label>
      <input name={name} />
    </div>
  );
}

EmailFormInput.propTypes = {
  //   index: PropTypes.number,
  name: PropTypes.string,
};
