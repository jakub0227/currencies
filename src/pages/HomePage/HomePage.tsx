import React, {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {Route} from '../../types/Route'
import {
	Backdrop,
	Button,
	CircularProgress,
	Fade,
	InputAdornment,
	MenuItem,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core'
import {css} from '@emotion/react'
import {useFetchRates} from '../../API/useFetchRates'
import useTheme from '@material-ui/core/styles/useTheme'

export const HomePage: Route = () => {
	// const myInputRef = useRef<HTMLInputElement>(null)
	//
	// useEffect(() => {
	// 	// const el = document.querySelector('#mojinput')
	// 	// console.log(el)
	// 	// console.log(myInputRef.current)
	// 	// console.log(el === myInputRef.current)
	// 	setInterval(() => {
	// 		console.log(myInputRef?.current?.value)
	// 	}, 500)
	// }, [])
	//
	const theme = useTheme()
	const styles = {
		root: css`
          display: flex;
          flex-direction: column;
          border-radius: 30px;
          min-width: 460px;
          padding: ${theme.spacing(4)}px;
          box-shadow: 0 8px 40px -12px rgba(0, 0, 0, 0.3);
          transition: 0.3s;

          :hover {
            box-shadow: 0 16px 70px -12.125px rgba(0, 0, 0, 0.3)
          }
		`,
		mainTitle: css`
          margin-top: ${theme.spacing(3)}px;
		`,
		input: css`
          margin: ${theme.spacing(3)}px;
		`,
		select: css`
          min-width: 55px;

          .MuiInput-underline::before, .MuiInput-underline::after {
            display: none;
          }
		`,
		endNotation: css`
          margin-top: ${theme.spacing(3)}px;
          color: #232526
		`,
		button: css`
          align-self: center;
          max-width: 250px;
          margin-top: ${theme.spacing(2.5)}px;
          border-radius: 25px;
		`,
	}
	const [fromCurrency, setFromCurrency] = useState<string>()
	const [fromVal, setFromVal] = useState<number>()
	
	const [toCurrency, setToCurrency] = useState<string>()
	const [toVal, setToVal] = useState<number>()
	
	let {rates, loading, date} = useFetchRates()
	rates = [...rates, ['EUR', 1]]
	
	const ratesObj = Object.fromEntries(rates)
	
	const handleResetClick = () => {
		setFromVal(0)
		setToVal(0)
	}
	
	useEffect(() => {
		if (fromCurrency && toCurrency && fromVal) {
			
			const fromRate = ratesObj[fromCurrency]
			const toRate = ratesObj[toCurrency]
			
			setToVal(+(toRate * (fromVal / fromRate)).toFixed(3))
			
		}
		
	}, [fromVal, fromCurrency, toCurrency])
	
	useEffect(() => {
		if (fromCurrency && toCurrency && toVal) {
			const fromRate = ratesObj[fromCurrency]
			const toRate = ratesObj[toCurrency]
			
			setFromVal(+((toVal * fromRate) / toRate).toFixed(3))
		}
		
	}, [toVal, fromCurrency, toCurrency])
	
	return (
		<Fade in timeout={1000}>
			<Paper css={styles.root} elevation={7}>
				<Typography css={styles.mainTitle} variant='h5'>Convert currencies*</Typography>
				{/*<input id='mojinput' ref={myInputRef}/>*/}
				{/*aaa*/}
				{loading ? (
						<Backdrop open={loading}>
							<CircularProgress color='primary'/>
						</Backdrop>
					
					) :
					([
						{
							label: 'From',
							value: fromVal,
							setValue: setFromVal,
							currency: fromCurrency,
							setCurrency: setFromCurrency,
						},
						{
							label: 'To',
							value: toVal,
							setValue: setToVal,
							currency: toCurrency,
							setCurrency: setToCurrency,
						},
					] as {
						label: string
						currency: string
						setCurrency: Dispatch<SetStateAction<string>>
						value: number
						setValue: Dispatch<SetStateAction<number>>
					}[]).map(input => (
						<div css={styles.input}>
							<TextField InputLabelProps={{shrink: true}} label={input.label} value={input.value}
							           onChange={e => input.setValue(+e.target.value)
							           } InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<TextField select css={styles.select} value={input.currency}
										           onChange={e => input.setCurrency(e.target.value)
										           }>
											{rates.map(([currency]) => (
												<MenuItem value={currency}>
													{currency}
													{/*{(currencySymbolMap as any)[currency] ?? currency}*/}
												</MenuItem>
											))}
										</TextField>
									</InputAdornment>
								),
							}}/>
						</div>
					))
				}
				<Button css={styles.button}
				        onClick={handleResetClick}
				        variant='contained'
				        color='secondary'>
					Reset
				</Button>
				<Typography css={styles.endNotation} variant='caption'>
					*currencies according to rates from: {date}
				</Typography>
			</Paper>
		</Fade>
	)
}

HomePage.displayName = 'Home'
HomePage.routeName = '/'
HomePage.icon = 'home'