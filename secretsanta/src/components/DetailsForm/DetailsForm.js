import React from "react";
import PropTypes from "prop-types";

export default function DetailsForm({
  detailsForm,
  setDetailsForm,
  incrementFormStage,
}) {
  function handleChange(e) {
    setDetailsForm({
      ...detailsForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    incrementFormStage();
  }
  return (
    <div className="sub-card-container">
      <h3>Add Gift Exchange details</h3>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="inputFieldContainer">
          <label htmlFor="organiserName">Enter the organiser name: </label>
          <input
            id="organiserName"
            name="organiserName"
            placeholder="Ebeneezer Scrooge"
            required="required"
            onChange={handleChange}
          />
        </div>
        <div className="inputFieldContainer">
          <label htmlFor="budget">Set your budget: </label>
          <input
            type="number"
            id="budget"
            name="budget"
            placeholder="£"
            required="required"
            onChange={handleChange}
          />
        </div>

        <div className="inputFieldContainer">
          <label htmlFor="deadline">Add the Gift Exchange Date:</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            required="required"
            onChange={handleChange}
          />
        </div>
        <div className="inputFieldContainer">
          <label htmlFor="message">Add a message to your santas:</label>
          <input
            type="textarea"
            id="message"
            name="message"
            placeholder="Merry Christmas!"
            required="required"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit details</button>
      </form>
    </div>
  );
}

DetailsForm.propTypes = {
  detailsForm: PropTypes.object,
  setDetailsForm: PropTypes.func,
  incrementFormStage: PropTypes.func,
};
