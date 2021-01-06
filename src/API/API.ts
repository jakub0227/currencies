import axios from 'axios'

export const sendRequest = axios.create({
	baseURL: 'https://api.exchangeratesapi.io',
})