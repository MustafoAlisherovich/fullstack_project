import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {Main, Login, Register, Navbar, ArticleDetail, CreateArticle, EditArticle} from './compenents'
import AuthService from './service/Auth'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/Auth'
import { getItem } from './helpers/PersistanceStorage'




const App = () => {
  const dispatch = useDispatch()

  const getUser = async() => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log('error');
    }
  }

 

  useEffect(() => {
    const token = getItem('token')
    if (token){
      getUser()
     
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/article/:slug' element={<ArticleDetail />} />
        <Route path='/create_article/' element={<CreateArticle />} />
        <Route path='/edit_article/:slug' element={<EditArticle />} />
      </Routes>
      </div>
      
    </div>
  )
}

export default App