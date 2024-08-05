import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../ui";
import { useNavigate } from "react-router-dom";
import { getArticleStart, getArticleSuccess } from "../slice/Article";
import ArticleService from "../service/article";
import ArticleCard from "./ArticleCard";


const Main = () => {

  const {articles, isLoading} = useSelector(state => state.article)
  const {loggedIn, user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
    getArticles()
  }, []
  )

  return (
    


    <>
       {isLoading && <Loader />}
      <div className="album py-5 bg-body-tertiary">
        <div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map(item => 
              <ArticleCard item={item} getArticles={getArticles} />
            )}      
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
