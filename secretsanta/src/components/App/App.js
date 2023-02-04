import React, { useState } from "react";
// import useRandomiser from "../../hooks/useRandomiser/useRandomiser";
// import { PairsContext } from "../../Contexts/pairs-context";
import "../App/App.css";
import Header from "../Header/header.js";
// import GeneralForm from "../GeneralForm/generalForm";
// import MembersList from "../MembersList";
import ParticipantNameForm from "../ParticipantNameForm/ParticipantNameForm";
import LandingCard from "../LandingCard/LandingCard";
import DetailsForm from "../DetailsForm/DetailsForm";
import CommsCard from "../CommsCard/CommsCard";
import EmailForm from "../EmailForm/EmailForm";

function App() {
  const [detailsForm, setDetailsForm] = useState({});
  const [inputMembers, setInputMembers] = useState({});

  const [showLandingCard, setShowLandingCard] = useState(true);
  const [showParticipantForm, setShowParticipantForm] = useState(false);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [showCommsCard, setShowCommsCard] = useState(false);
  // const [finalGroup, setFinalGroup] = useState(null);
  // const [listGenerated, setListGenerated] = useState(false);
  // //custom hook for random pairs
  // const [pairArrays, pairRandomiser] = useRandomiser([], inputMembers);

  console.log(detailsForm);
  function toggleShowParticipantForm() {
    setShowParticipantForm(!showParticipantForm);
  }

  function toggleShowLandingCard() {
    setShowLandingCard(!showLandingCard);
  }

  function toggleShowDetailsForm() {
    setShowDetailsForm(!showDetailsForm);
  }

  function toggleShowCommsCard() {
    setShowCommsCard(!showCommsCard);
  }
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
        {showLandingCard && (
          <LandingCard
            toggleShowParticipantForm={toggleShowParticipantForm}
            toggleShowLandingCard={toggleShowLandingCard}
          />
        )}
        {showParticipantForm && (
          <ParticipantNameForm
            inputMembers={inputMembers}
            setInputMembers={setInputMembers}
            toggleShowParticipantForm={toggleShowParticipantForm}
            toggleShowDetailsForm={toggleShowDetailsForm}
          />
        )}
        {showDetailsForm && (
          <DetailsForm
            detailsForm={detailsForm}
            setDetailsForm={setDetailsForm}
            toggleShowDetailsForm={toggleShowDetailsForm}
            toggleShowCommsCard={toggleShowCommsCard}
          />
        )}
        {showCommsCard && (
          <CommsCard toggleShowCommsCard={toggleShowCommsCard} />
        )}
        <EmailForm inputMembers={inputMembers} />
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
