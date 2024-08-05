import React, { useState } from "react";
import ArticleForm from "./ArticleForm";
import ArticleService from "../service/article";
import { useDispatch, } from "react-redux";
import {  postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/Article";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {

  
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const formSubmit = async(e) => {
      e.preventDefault()
      const article = {title, description, body}

      try {
        dispatch(postArticleStart())
        await ArticleService.postArticles(article) 
        dispatch(postArticleSuccess())
        navigate('/')
        
      } catch (error) {
        dispatch(postArticleFailure())
        
      }
    }

    const formProps = {title, setTitle, description, setDescription, body, setBody, formSubmit}

  return (
    <div className="text-center mt-5">
      <h1 className="fs-2">Create Article</h1>
      <div className="w-75 mx-auto">
        <ArticleForm {...formProps} />
      </div>
    </div>
  );
};

export default CreateArticle;
