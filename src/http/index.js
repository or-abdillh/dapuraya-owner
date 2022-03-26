import axios from 'axios'

const baseURL = 'http://localhost:8000'
const headers = {
	'Authorization': localStorage.getItem('$dapuraya_token') || 'EMPTY_TOKEN'
}

export default {
	async get(url, callback) {
		try {
			const response = await axios.get(baseURL + url, { headers })
			if (response.data.status) callback(response.data)	
		} catch(err) {
			if (err.response) callback(err.response.data)
			callback(err)
		}
	}
}
