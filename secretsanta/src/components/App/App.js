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

function App() {
  const [detailsForm, setDetailsForm] = useState({});
  const [inputMembers, setInputMembers] = useState({});
  const [memberEmails, setMemberEmails] = useState({});

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
    setFinalGroup(inputMembers);
    sendEmail();
  }

  function sendEmail() {
    console.log(pairsArrays, "pairs array");
    console.log(detailsForm, "details");
    console.log(memberEmails, "emails");
    console.log(
      pairsArrays[0].a +
        "is giving to" +
        pairsArrays[0].b +
        "." +
        " their email is: " +
        memberEmails[pairsArrays[0].a]
    );
  }

  return (
    <div className="App">
      <Header></Header>

      <div className="form-main-card">
        <NavBar
          formStage={formStage}
          decrementFormStage={decrementFormStage}
          incrementFormStage={incrementFormStage}
        />
        {formStage === formStages.landingCard && (
          <LandingCard incrementFormStage={incrementFormStage} />
        )}
        {formStage === formStages.participantNameForm && (
          <ParticipantNameForm
            inputMembers={inputMembers}
            setInputMembers={setInputMembers}
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
    </div>
  );
}

export default App;
