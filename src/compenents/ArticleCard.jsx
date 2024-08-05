import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArticleService from '../service/article'
import { useSelector } from 'react-redux'

const ArticleCard = ({item, getArticles}) => {

    const navigate = useNavigate()
    const {loggedIn, user} = useSelector(state => state.article)

    const deleteArticle = async (slug) => {
        try {
          await  ArticleService.deleteArticle(slug)
          getArticles()
        } catch (error) {
          console.log(error);
          
        }
      }

  return (
    <div className="col" key={item.id}>
              <div className="card shadow-sm h-100">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
                </svg>
                <div className="card-body">
                  <p className="card-text fw-bold m-0">{item.title}</p>
                  <p className="card-text">{item.description}</p> 
                </div>
                <div className="d-flex justify-content-between align-items-center card-footer">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                        onClick={() => navigate(`/article/${item.slug}`)}
                      >
                        View
                      </button>
                      {loggedIn && user.username === item.author.username && (
                        <>
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => navigate(`/edit_article/${item.slug}`)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteArticle(item.slug)}
                      >
                        Delete
                      </button>
                        </>
                      )}
                     
                    </div>
                    <small className="text-body-secondary text-capitalize">{item.author.username}</small>
                  </div>
              </div>
            </div>
  )
}

export default ArticleCard