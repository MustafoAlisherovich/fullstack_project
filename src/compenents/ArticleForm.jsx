import React from 'react'
import { Input, TextArea, } from '../ui'
import { useSelector } from 'react-redux'

const ArticleForm = props => {

    const {isLoadng} = useSelector(state => state.article)

    const {title, setTitle, description, setDescription, body, setBody, formSubmit} = props

  return (
    <div>
        <form onSubmit={formSubmit}>
          <Input label={'Title'} state={title} setState={setTitle} />
           <TextArea label={'Description'} state={description} setState={setDescription} />
           <TextArea label={'Body'} state={body} setState={setBody} height={'300px'} />
           <button className="btn btn-outline-success w-100 mt-2" disabled={isLoadng} type="submit">{isLoadng ? 'Loading...' : 'Create'}</button>        
        </form>
    </div>
  )
}

export default ArticleForm