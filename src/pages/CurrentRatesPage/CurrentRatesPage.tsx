import {
	CircularProgress,
	Container,
	Fade,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Typography,
	useTheme,
} from '@material-ui/core'
import {Route} from '../../types/Route'

import React from 'react'
import {css} from '@emotion/react'
import {useFetchRates} from '../../API/useFetchRates'

export const CurrentRatesPage: Route = () => {
	
	const theme = useTheme()
	const styles = {
		table: css`
          border-radius: 25px;
          box-shadow: 0 8px 40px -12px rgba(0, 0, 0, 0.3);
          transition: 0.3s;

          :hover {
            box-shadow: 0 16px 70px -12.125px rgba(0, 0, 0, 0.3)
          }
		
		`,
		head: css`
          background: #093028; /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #237A57, #093028); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #237A57, #093028); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		`,
		headText: css`
          color: #fff;
          font-weight: bolder;
          font-size: 1.4em;
		`,
	}
	
	const {loading, rates} = useFetchRates()
	
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(10)
	
	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage)
	}
	
	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}
	
	return (
		<Fade in timeout={1500}>
			<Container>
				<Typography variant='h2'>
					Welcome to Currencies Advisor
				</Typography>
				{loading ? (
					<div>
						<CircularProgress color='primary'/>
					</div>
				) : (
					<TableContainer css={styles.table} component={Paper}>
						<Table size='small'>
							<TableHead css={styles.head}>
								<TableRow>
									<TableCell css={styles.headText} size='medium'>Currency</TableCell>
									<TableCell css={styles.headText} size='medium' align='right'>Rates</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rates.map(([name, rate]) => (
									<TableRow key={name}>
										<TableCell component='th' scope='row'>
											{name}
										</TableCell>
										<TableCell align='right'>{rate.toFixed(3)}</TableCell>
									</TableRow>
								))}
								<TablePagination
									component='div'
									count={42}
									page={page}
									onChangePage={handleChangePage}
									rowsPerPage={rowsPerPage}
									onChangeRowsPerPage={handleChangeRowsPerPage}
								/>
							</TableBody>
						</Table>
					</TableContainer>
				)}
			</Container>
		</Fade>
	)
}

CurrentRatesPage.routeName = '/current-rates'
CurrentRatesPage.displayName = 'Current Rates'
CurrentRatesPage.icon = 'arrow_upward'