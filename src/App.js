import './App.css';
import Employee from './components/Employee';

function App() {
  console.log('We are about to show the Employees');
  const showEmployees = false;

  return (
    <div className="App">
        {showEmployees?
          <>
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
        </> :
        <h1>Not Allowed to show employess</h1>
        }
    </div>
  );
}

export default App;
