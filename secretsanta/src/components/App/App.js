import { useState } from 'react';
// import useFetch from '../../hooks/useFetch/useFetch';

import '../App/App.css';
import Header from '../Header/header.js';
import GeneralForm from '../GeneralForm/generalForm';
import Members from '../Members';



function App() {

  // Groupname State
  const [inputDetails, setInputDetails] = useState(null);
  const [inputMembers, setInputMembers] = useState(null);
  const [finalGroup, setFinalGroup] = useState(null)

  // const {data, error} = useFetch('http://localhost:3001/santa/',)

  // Handle Change function>
  function handleChangeDetails(e) {
    setInputDetails({
      ...inputDetails, 
      [e.target.name] : e.target.value
    });
    console.log(inputDetails);
  }

  function handleChangeMembers(e) {
    setInputMembers({
      ...inputMembers, 
      [e.target.name] : e.target.value
    });
    console.log(inputMembers);
  }


  function generateButtonClick(e) {
    e.preventDefault()
    const inputDetailsClone = JSON.parse(JSON.stringify(inputDetails));
    const inputMembersClone = JSON.parse(JSON.stringify(inputMembers));
    setFinalGroup([inputDetailsClone, inputMembersClone])
    console.log(finalGroup)
  }


  return (
    <div className="App">
      <Header></Header>

      <div className='divsContainer'>
        <GeneralForm 
         handleChangeDetails={handleChangeDetails}
         handleChangeMembers={handleChangeMembers}
         handleClick={generateButtonClick}
         ></GeneralForm>
        <Members></Members>
      </div>
      
    </div>
  );
}

export default App;
