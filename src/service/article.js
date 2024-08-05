import axios from './Api'

const ArticleService = {
	async getArticles() {
		const {data} = await axios.get('/articles')
		return data
	},
	async getArticleDetail(slug) {
		const {data} = await axios.get(`/articles/${slug}`)
		return data
		
	},

	async postArticles(article) {
		const {data} = await axios.post('/articles', {article})
		return data
	},

	async deleteArticle(slug) {
		const {data} = await axios.delete(`/articles/${slug}`)
		return data
	},
	
	async editArticle(slug, article) {
		const {data} = await axios.put(`/articles/${slug}`, {article})
	}
}
export default ArticleService