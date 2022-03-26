import axios from 'axios'

const baseURL = 'http://localhost:8000'
const headers = {
	'Authorization': localStorage.getItem('$dapuraya_token') || 'EMPTY_TOKEN'
}

export default {
	async get(url, callback) {
		try {
			const response = await axios.get(baseURL + url, { headers })
			callback(response.data)	
		} catch(err) {
			if (err.response) callback(err.response.data)
			else callback(err)
		}
	},
	async post(url, body, callback, head = headers) {
		try {
			const response = await axios.post(baseURL + url, body, { headers: head })
			callback(response.data)
		} catch(err) {
			if (err.response) callback(err.response.data)
			else callback(err)
		}
	},
	async put(url, body, callback, head = headers) {
		try {
			const response = await axios.put(baseURL + url, body, { headers: head })
			callback(response.data)
		} catch(err) {
			if (err.response) callback(err.response.data)
		}
	}
}
