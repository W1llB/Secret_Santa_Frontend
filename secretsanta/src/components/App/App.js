import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

import '../App/App.css';
import Header from '../Header/header.js';
import GeneralForm from '../GeneralForm/generalForm';
import Members from '../Members';



function App() {

  // Groupname State
  const [groupName, setGroupName] = useState(null);

  const {data, error} = useFetch('http://localhost:3001/santa/', 'Taylors Secret Santa')
  console.log(data)
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
        <GeneralForm handleChange={handleChange}></GeneralForm>
        <Members></Members>
      </div>
      
    </div>
  );
}

export default App;
