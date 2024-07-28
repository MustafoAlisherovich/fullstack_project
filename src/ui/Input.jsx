import React from 'react'

// Input.js

const Input = ({ label, state, setState, type='text' }) => {
    return (
      <div>
        <div data-mdb-input-init className="form-outline mb-2">
          <input
            placeholder={label}
            type={type}
            value={state}
            onChange={e => setState(e.target.value)}
            id="typePasswordX-2"
            className="form-control form-control-lg shadow-sm p-2 mb-5 bg-white rounded"
          />
        </div>
      </div>
    );
  };
  
  export default Input;
  