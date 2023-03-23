import React from "react";
import PropTypes from "prop-types";
import EmailFormInput from "../EmailFormInput/EmailFormInput";

/* Plan:
- Generate list of inputs using previously submitted participants
    - Generate array from object
- Labels and input names using object name

*/

export default function EmailForm({
  inputMembers,
  incrementFormStage,
  handleEmailSubmit,
  setMemberEmails,
  memberEmails,
}) {
  const inputMemberArray = Object.values(inputMembers);
  function handleSubmit(e) {
    e.preventDefault();
    incrementFormStage();
    handleEmailSubmit();
  }

  function handleEmailChange(e) {
    setMemberEmails({
      ...memberEmails,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="email-form">
      <h3>Enter the emails of your Secret Santas and send out your pairs.</h3>
      <form onSubmit={handleSubmit}>
        {inputMemberArray.map((name, index) => {
          if (name.length > 0)
            return (
              <EmailFormInput
                key={index}
                index={index}
                name={name}
                handleEmailChange={handleEmailChange}
              />
            );
        })}
        <button type="submit">Send emails</button>
      </form>
    </div>
  );
}

EmailForm.propTypes = {
  inputMembers: PropTypes.object,
  incrementFormStage: PropTypes.func,
  handleEmailSubmit: PropTypes.func,
  setMemberEmails: PropTypes.func,
  memberEmails: PropTypes.object,
};
