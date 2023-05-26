import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

export default function AddEmployee (props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [imageUrl, setImage] = useState('');

  
  const [show, setShow] = useState(false);

  const handleState = () => setShow(prevState => !prevState);
  
  return (
    <>
              <button onClick={handleState} className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-auto block m-5" > + Add Employee</button>

      <Modal
        show={show}
        onHide={handleState}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              props.addEmployee(name, role, imageUrl);
              setImage('');
              setName('');
              setRole('');
            }}
            id='editModal'>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" value={name} name='name' onChange={(event) => setName(event.target.value)} placeholder='Gbolo Kelvin' />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                  Role
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="role" type="text" value={role}
                onChange={(event) => setRole(event.target.value)} placeholder='Bank Teller' />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="img">
                  Image URL
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="img" type="text" value={imageUrl}
                onChange={(event) => setImage(event.target.value)} placeholder='https://google.com'/>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleState}>Close</button>

          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" form='editModal' >Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
