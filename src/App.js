import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import AddEmployee from './components/AddEmployee copy';
import EditEmployee from './components/EditEmployee';


function App() {
  const [role, changeRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Kelvin', role: 'CEO manages the company', url: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Elizabeth', role: role , url: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Grace', role: 'Mother of the CEO, Counsellor', url: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      name: 'Larry', role: 'Gate Man', url: 'https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      name: 'Luke', role: 'CTO', url: 'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      name: 'Matta', role: 'Accountant', url: 'https://images.pexels.com/photos/2325622/pexels-photo-2325622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ])
  const showEmployees = true;

  function updateEmployee(id, newName, newRole) {
    const updatedEmployee = employees.map(employee => {
      if (employee.id === id) {
        return {
          ...employee,name:newName,role:newRole
        }
      }
      return employee
    })

    setEmployees(updatedEmployee)
  }

  function addEmployee(name, role, imgUrl) {
    setEmployees(prevEmployees => {
      return [...prevEmployees, {
        id: prevEmployees.length + 1,
        name: name,
        role: role, 
        url: imgUrl
      }]
    })
  }
  
  return (
    <div className="App " >
        {showEmployees?
        <>
          <div className='flex flex-wrap justify-center'> 
            {
              employees.map((employee) => {
                const editEmployee = <EditEmployee
                id= {employee.id}
                name={employee.name}
                role={employee.role}
                updateEmployee={updateEmployee} />
                
                return (
                  <Employee
                    id={employee.id}
                    name={employee.name} role={employee.role}
                    img={employee.url}
                    key={uuidV4}
                    editEmployee = {editEmployee}
                  />
                )
              })
            }
          </div>
        </> :
        <h1>Not Allowed to show employees</h1>
        }
      <AddEmployee addEmployee = {addEmployee} />
    </div>
  );
}

export default App;
