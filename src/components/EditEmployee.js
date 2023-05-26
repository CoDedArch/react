import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

export default function EditEmployee () {
  const [show, setShow] = useState(false);

  const handleState = () => setShow(prevState => !prevState);

  return (
    <>
              <button onClick={handleState} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">update</button>

      <Modal
        show={show}
        onHide={handleState}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='editModal'>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
                  Role
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe" />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleState}>Close</button>

          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" form='editModal'>update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
