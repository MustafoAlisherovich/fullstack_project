import React, { useState } from 'react'
import {Input} from '../ui'
import { useDispatch, useSelector } from 'react-redux';
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/Auth';
import AuthService from '../service/Auth';
import {ValidationError} from './'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.auth)

  const loginHandler = async () => {
    dispatch(signUserStart())
    const user = {email, password}
    try {
      const response = await AuthService.userLogin(user)
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors))
    }
   
  }


  return (
    <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong shadow-lg p-2 mb-5 bg-white rounded">
          <div className="card-body p-5 text-center">

            <h3 className="mb-4">Sign in</h3>

            <ValidationError />

            <Input label={'Email address'} state={email} setState={setEmail} />

            <Input label={'Password'} state={password} setState={setPassword} />

            <button disabled={isLoading}
             onClick={loginHandler}
              data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-lg btn-block"
               type="submit">{isLoading ? 'Loading...' : 'Login'}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login