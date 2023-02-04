import React from "react";
import PropTypes from "prop-types";

export default function DetailsForm({
  detailsForm,
  setDetailsForm,
  toggleShowDetailsForm,
  toggleShowCommsCard,
}) {
  function handleChange(e) {
    setDetailsForm({
      ...detailsForm,
      [e.target.name]: e.target.value,
    });
    console.log(detailsForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    toggleShowDetailsForm();
    toggleShowCommsCard();
  }
  return (
    <div>
      <h3>Add Gift Exchange details</h3>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="inputFieldContainer">
          <label htmlFor="budget">Set your budget (£): </label>
          <input
            type="number"
            id="budget"
            name="budget"
            defaultValue="£"
            onChange={handleChange}
          />
        </div>

        <div className="inputFieldContainer">
          <label htmlFor="deadline">Add the Gift Exchange Date:</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            onChange={handleChange}
          />
        </div>
        <div className="inputFieldContainer">
          <label htmlFor="message">Add a message to your santas:</label>
          <input
            type="textarea"
            id="message"
            name="message"
            defaultValue="Merry Christmas!"
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
  toggleShowDetailsForm: PropTypes.func,
  toggleShowCommsCard: PropTypes.func,
};
