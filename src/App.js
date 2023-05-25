import './App.css';
import Employee from './components/Employee';
import {useState} from 'react'

function App() {
  const [role, changeRole] = useState('dev')
  const showEmployees = true;

  const trackInput = event => {
    console.log(event.target.value)
    changeRole(currentRole => event.target.value)
  };
  console.log("role: "+ role)


  return (
    <div className="App">
        {showEmployees?
        <>
          <input type='text' onChange={trackInput} />

          <Employee name="Kelvin" role="CEO manages the company"/>
          <Employee name='Elizabeth' role={role} />
          <Employee name='Grace' role="Mother to the CEO. counsellor"/>
            <Employee name='matta' role="ACCOUNTANT" />
            <Employee name='Silver Shine' age = {59} status='mr' />
        </> :
        <h1>Not Allowed to show employess</h1>
        }
    </div>
  );
}

export default App;
