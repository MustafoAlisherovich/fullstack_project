import React, { useState } from 'react'
import {Input} from '../ui'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (
    <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong shadow-lg p-2 mb-5 bg-white rounded">
          <div className="card-body p-5 text-center">

            <h3 className="mb-4">Sign up</h3>

            <Input label={'username'} state={name} setState={setName} />

            <Input label={'email'} type={'email'} state={email} setState={setEmail} />

            <Input label={'password'} type={'password'} state={password} setState={setPassword} />
            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-success btn-lg btn-block" type="submit">Register</button>


          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Register