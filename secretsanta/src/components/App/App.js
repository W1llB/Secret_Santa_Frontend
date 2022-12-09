import '../App/App.css';
import Header from '../Header/header.js';
import GeneralForm from '../Input-Form/GeneralForm/generalForm';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className='divsContainer'>
        <GeneralForm></GeneralForm>

      </div>
      
    </div>
  );
}

export default App;
