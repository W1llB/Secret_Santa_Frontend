import { useState } from 'react';

import '../App/App.css';
import Header from '../Header/header.js';
import GeneralForm from '../GeneralForm/generalForm';
import Members from '../Members';



function App() {

  // Groupname State
  const [groupName, setGroupName] = useState(0);
    
  // Deadline Date State
  const [deadline, setDealine] = useState(0);

  // Budget State
  const [buget, setBudget] = useState(0);

  // Handle Change function>
  function handleChange(e) {
    setGroupName({
      ...groupName, 
      [e.target.name] : e.target.value
    });
    console.log(groupName);
  }


  return (
    <div className="App">
      <Header></Header>

      <div className='divsContainer'>
        <GeneralForm groupNameChange={handleChange}></GeneralForm>
        <Members></Members>
      </div>
      
    </div>
  );
}

export default App;
