import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from '../slice/Auth'
import ArticleReducer from '../slice/Article'

export default configureStore({
	reducer: {
		auth: AuthReducer,
		article: ArticleReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})
	