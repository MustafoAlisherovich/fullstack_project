import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Main, Login, Register} from './compenents'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App