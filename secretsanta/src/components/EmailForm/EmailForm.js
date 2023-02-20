import React from "react";
import PropTypes from "prop-types";
import EmailFormInput from "../EmailFormInput/EmailFormInput";

/* Plan:
- Generate list of inputs using previously submitted participants
    - Generate array from object
- Labels and input names using object name

*/

export default function EmailForm({ inputMembers, incrementFormStage }) {
  const inputMemberArray = Object.values(inputMembers);
  console.log(inputMemberArray);
  function handleSubmit(e) {
    e.preventDefault();
    incrementFormStage();
  }

  return (
    <div>
      <h3>
        Enter the emails of your Secret Santas. Press Send emails to finish the
        process and send your participants an email wit their person.
      </h3>
      <form onSubmit={handleSubmit}>
        {inputMemberArray.map((name, index) => {
          return <EmailFormInput key={index} index={index} name={name} />;
        })}
        <button type="submit">Send emails</button>
      </form>
    </div>
  );
}

EmailForm.propTypes = {
  inputMembers: PropTypes.object,
  incrementFormStage: PropTypes.func,
};
