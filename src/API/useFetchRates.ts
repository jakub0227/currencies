import {useSnackbar} from 'notistack'
import {useEffect, useState} from 'react'
import {sendRequest} from './API'

export const useFetchRates = () => {
	const [loading, setLoading] = useState(false)
	const [rates, setRates] = useState<[string, number][]>([])
	const [date, setDate] = useState()
	const {enqueueSnackbar} = useSnackbar()
	
	const fetchRates = async () => {
		setLoading(true)
		try {
			const {lastRateFetchDate} = localStorage
			
			const howManyDaysFromNow = (date: string) => ((new Date().getTime() - (new Date(date)).getTime()) / (1000 * 3600 * 24))
			
			if (typeof lastRateFetchDate === 'string' && howManyDaysFromNow(lastRateFetchDate) > 1) {
			} else {
				const res = (await sendRequest.get('/latest')).data
				setRates(Object.entries(res.rates))
				setDate(res.date)
				enqueueSnackbar('Fetching data successful!', {
					variant: 'success',
				})
			}
		} catch (error) {
			// czy error dotyczy wyslanego requesta
			if (error.request) {
				enqueueSnackbar(error.toString(), {
					variant: 'error',
				})
			} else {
				throw error
			}
		} finally {
			setLoading(false)
		}
	}
	
	useEffect(() => {
		fetchRates()
	}, [])
	
	return {
		rates, loading, date,
	}
}