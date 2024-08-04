import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {Main, Login, Register, Navbar, ArticleDetail, CreateArticle} from './compenents'
import AuthService from './service/Auth'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/Auth'
import { getItem } from './helpers/PersistanceStorage'
import ArticleService from './service/article'
import { getArticleStart, getArticleSuccess } from './slice/Article'


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

  const getArticles = async () => {
    dispatch(getArticleStart())
    try {
      const response = await ArticleService.getArticles()
      console.log(response);
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      console.log(error);
    }
  } 

  useEffect(() => {
    const token = getItem('token')
    if (token){
      getUser()
      getArticles()
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
      </Routes>
      </div>
      
    </div>
  )
}

export default App