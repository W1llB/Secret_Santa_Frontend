import React from "react";
import PropTypes from "prop-types";
import EmailFormInput from "../EmailFormInput/EmailFormInput";

/* Plan:
- Generate list of inputs using previously submitted participants
    - Generate array from object
- Labels and input names using object name

*/

export default function EmailForm({ inputMembers }) {
  const inputMemberArray = Object.values(inputMembers);
  console.log(inputMemberArray);
  return (
    <div>
      <h3>
        Enter the emails of your Secret Santas. Press Send emails to finish the
        process and send your participants an email wit their person.
      </h3>
      <form>
        {inputMemberArray.map((name, index) => {
          return <EmailFormInput key={index} index={index} name={name} />;
        })}
        <button>Send emails</button>
      </form>
    </div>
  );
}

EmailForm.propTypes = {
  inputMembers: PropTypes.object,
};
