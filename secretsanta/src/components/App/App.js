import {useEffect, useState } from 'react';
import useRandomiser from '../../hooks/useRandomiser/useRandomiser';
import { PairsContext } from '../../Contexts/pairs-context';
// import useFetch from '../../hooks/useFetch/useFetch';

import '../App/App.css';
import Header from '../Header/header.js';
import GeneralForm from '../GeneralForm/generalForm';
import MembersList from '../MembersList';



function App() {

  // Groupname State
  const [inputDetails, setInputDetails] = useState({gname: '', budget: '', deadline: ''});
  const [inputMembers, setInputMembers] = useState(null);
  const [finalGroup, setFinalGroup] = useState(null);
  const [listGenerated, setListGenerated] = useState(false)


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

  useEffect(()=>{
    pairRandomiser(inputMembers)

  },[inputMembers])


  function generateButtonClick(e) {
    e.preventDefault()
    // const inputDetailsClone = JSON.parse(JSON.stringify(inputDetails));
    // console.log(inputDetailsClone,'clone')
    setFinalGroup([inputDetails, pairArrays])
    setInputDetails({gname: '', budget: '', deadline: ''})
    setListGenerated(true)
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
         listGenerated={listGenerated}
         ></GeneralForm>
         <PairsContext.Provider value={finalGroup}>
        <MembersList></MembersList>
        </PairsContext.Provider>
      </div>
      
    </div>
  );
}

export default App;
