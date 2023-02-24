import React, { useState } from "react";
import useRandomiser from "../../hooks/useRandomiser/useRandomiser";
import "../App/App.css";
import Header from "../Header/header.js";
import ParticipantNameForm from "../ParticipantNameForm/ParticipantNameForm";
import LandingCard from "../LandingCard/LandingCard";
import DetailsForm from "../DetailsForm/DetailsForm";
import EmailForm from "../EmailForm/EmailForm";
import SuccessCard from "../SucessCard/SuccessCard";
import NavBar from "../NavBar/NavBar";
import sendEmail from "../../modules/sendEmail/sendEmail.mjs";

function App() {
  const [detailsForm, setDetailsForm] = useState({});
  const [memberEmails, setMemberEmails] = useState({});
  const [inputMembers, setInputMembers] = useState({});

  const show = false;

  const [formStage, setFormStage] = useState(0);
  const [finalGroup, setFinalGroup] = useState(null);
  // //custom hook for random pairs
  const [pairsArrays] = useRandomiser(finalGroup);

  const formStages = {
    landingCard: 0,
    participantNameForm: 1,
    detailsForm: 2,
    emailForm: 3,
    final: 4,
  };
  function incrementFormStage() {
    if (formStage >= 0 && formStage < 4) {
      setFormStage(formStage + 1);
    }
  }

  function decrementFormStage() {
    if (formStage > 0 && formStage < 5) {
      setFormStage(formStage - 1);
    }
  }
  function handleEmailSubmit() {
    if (pairsArrays) {
      for (const pair of pairsArrays) {
        sendEmail(pair, memberEmails[pair.a], detailsForm);
      }
    }
  }

  return (
    <div className="App">
      <div className="form-main-card">
        <Header />
        <div className="input-card">
          {formStage === formStages.landingCard && (
            <LandingCard incrementFormStage={incrementFormStage} />
          )}
          {formStage === formStages.participantNameForm && (
            <ParticipantNameForm
              inputMembers={inputMembers}
              setInputMembers={setInputMembers}
              setFinalGroup={setFinalGroup}
              incrementFormStage={incrementFormStage}
            />
          )}
          {formStage === formStages.detailsForm && (
            <DetailsForm
              detailsForm={detailsForm}
              setDetailsForm={setDetailsForm}
              incrementFormStage={incrementFormStage}
            />
          )}
          {formStage === formStages.emailForm && (
            <EmailForm
              inputMembers={inputMembers}
              incrementFormStage={incrementFormStage}
              handleEmailSubmit={handleEmailSubmit}
              setMemberEmails={setMemberEmails}
              memberEmails={memberEmails}
            />
          )}
          {formStage === formStages.final && <SuccessCard />}
        </div>
        <div className="navbar">
          {show ? (
            <NavBar
              formStage={formStage}
              decrementFormStage={decrementFormStage}
              incrementFormStage={incrementFormStage}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
