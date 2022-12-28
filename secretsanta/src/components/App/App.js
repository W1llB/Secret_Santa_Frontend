import {useState } from 'react';
import useRandomiser from '../../hooks/useRandomiser/useRandomiser';
import { PairsContext } from '../../Contexts/pairs-context';
// import useFetch from '../../hooks/useFetch/useFetch';

import '../App/App.css';
import Header from '../Header/header.js';
import GeneralForm from '../GeneralForm/generalForm';
import MembersList from '../MembersList';



function App() {

  const initialDetailsState = {gname: '', budget: '', deadline: ''}
  // Groupname State
  const [inputDetails, setInputDetails] = useState(initialDetailsState);
  const [inputMembers, setInputMembers] = useState(null);
  const [finalGroup, setFinalGroup] = useState(null);


  //custom hook for random pairs
  const [pairArrays, pairRandomiser] = useRandomiser([], inputMembers)


  // Handle Change function>
  function handleChangeDetails(e) {
    setInputDetails({
      ...inputDetails, 
      [e.target.name] : e.target.value
    });
    console.log(inputDetails)

  }

  function handleChangeMembers(e) {
    setInputMembers({
      ...inputMembers, 
      [e.target.name] : e.target.value
    });
    console.log(inputMembers)
  }


  function generateButtonClick(e) {
    e.preventDefault()
    const inputDetailsClone = JSON.parse(JSON.stringify(inputDetails));
    pairRandomiser(inputMembers)
    setFinalGroup([inputDetailsClone, pairArrays])
    setInputDetails(initialDetailsState)
    console.log(`${finalGroup}finalgroup`)
  }


  return (
    <div className="App">
      <Header></Header>

      <div className='divsContainer'>
        <GeneralForm 
         handleChangeDetails={handleChangeDetails}
         handleChangeMembers={handleChangeMembers}
         handleClick={generateButtonClick}
         inputDetails={inputDetails}
         ></GeneralForm>
         <PairsContext.Provider value={finalGroup}>
        <MembersList></MembersList>
        </PairsContext.Provider>
      </div>
      
    </div>
  );
}

export default App;
