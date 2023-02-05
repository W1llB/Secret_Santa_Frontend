import React, { useState } from "react";
// import useRandomiser from "../../hooks/useRandomiser/useRandomiser";
// import { PairsContext } from "../../Contexts/pairs-context";
import "../App/App.css";
import Header from "../Header/header.js";
import ParticipantNameForm from "../ParticipantNameForm/ParticipantNameForm";
import LandingCard from "../LandingCard/LandingCard";
import DetailsForm from "../DetailsForm/DetailsForm";
// import CommsCard from "../CommsCard/CommsCard";
import EmailForm from "../EmailForm/EmailForm";
// import PairsCard from "../PairsCard/PairsCard";

function App() {
  const [detailsForm, setDetailsForm] = useState({});
  const [inputMembers, setInputMembers] = useState({});
  // const [inputMembersEmails, setInputMembersEmails] = useState({})

  // const [showEmailForm, setShowEmailForm] = useState(false);
  // const [showPairsCard, setShowPairsCard] = useState(false);
  const [formStage, setFormStage] = useState(0);
  // const [finalGroup, setFinalGroup] = useState(null);
  // const [listGenerated, setListGenerated] = useState(false);
  // //custom hook for random pairs
  // const [pairArrays, pairRandomiser] = useRandomiser([], inputMembers);

  console.log(detailsForm);
  console.log(inputMembers);
  console.log(formStage);

  const formStages = {
    landingCard: 0,
    participantNameForm: 1,
    detailsForm: 2,
    commsCard: 3,
    emailForm: 4,
    final: 5,
  };
  function incrementFormStage() {
    setFormStage(formStage + 1);
  }

  // function toggleShowEmailForm() {
  //   setShowEmailForm(!showEmailForm);
  // }

  // function toggleShowPairsCard() {
  //   setShowPairsCard(!showPairsCard);
  // }
  // useEffect(() => {
  //   pairRandomiser(inputMembers);
  // }, [inputMembers]);

  // function generateButtonClick(e) {
  //   e.preventDefault();
  //   setFinalGroup([inputDetails, pairArrays]);
  //   setInputDetails({ gname: "", budget: "", deadline: "" });
  //   setListGenerated(true);
  //   console.log(`${finalGroup}finalgroup`);
  // }

  return (
    <div className="App">
      <Header></Header>

      <div className="form-main-card">
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
        {/* {formStage === formStages.commsCard && (
          <CommsCard
            incrementFormStage={incrementFormStage}
            toggleShowEmailForm={toggleShowEmailForm}
            toggleShowPairsCard={toggleShowPairsCard}
          />
        )} */}
        {formStage === formStages.emailForm && (
          <EmailForm inputMembers={inputMembers} />
        )}

        {/* {showPairsCard && <PairsCard />} */}
      </div>
    </div>
  );
}

export default App;

{
  /* <GeneralForm
          handleChangeDetails={handleChangeDetails}
          handleChangeMembers={handleChangeMembers}
          handleClick={generateButtonClick}
          inputDetails={inputDetails}
          listGenerated={listGenerated}
        ></GeneralForm> */
}
{
  /* <PairsContext.Provider value={finalGroup}>
          <MembersList></MembersList>
        </PairsContext.Provider> */
}
