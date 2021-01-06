import {css} from '@emotion/react'
import React, {FC, useState} from 'react'
import Paper from '@material-ui/core/Paper'
import useTheme from '@material-ui/core/styles/useTheme'
import {BottomNavigation, BottomNavigationAction, Icon, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {ReportBugDialog} from './ReportBugDialog'

export const Footer: FC = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          display: flex;
          flex-direction: row;
          width: 100%;
          padding: ${theme.spacing(1.5)}px;
          opacity: 95%;
          z-index: 1;
          background: #232526; /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #414345, #232526); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          justify-content: space-around;
          align-items: center;
		`,
		footerText: css`
          font-weight: initial;
          color: #fff;
		`,
		bottomNav: css`
          border-radius: 25px;
          opacity: 95%;
          min-width: 250px;
		
		`,
	}
	const [openDialog, setOpenDialog] = useState(false)
	
	const toggleOpenCloseDialog = () => {
		setOpenDialog((prev) => !prev)
	}
	
	return (
		<Paper css={styles.root} square elevation={4} component='footer'>
			<Typography css={styles.footerText} variant='subtitle2' align='center'>
				Created with React, Emotion.sh, Material-UI, (C) Copyright {new Date().getFullYear()}
			</Typography>
			<BottomNavigation showLabels css={styles.bottomNav}>
				<BottomNavigationAction label='Donate!'
				                        rel='noopener noreferrer'
				                        href='https://www.youtube.com/watch?v=esX7SFtEjHg&ab_channel=CodePioneers'
				                        target='_blank'
				                        icon={<Icon color='primary'>monetization_on</Icon>}/>
				<BottomNavigationAction label='Report Bug'
				                        onClick={toggleOpenCloseDialog}
				                        icon={<Icon color='error'>warning</Icon>}/>
				<BottomNavigationAction label='Contact'
				                        component={Link}
				                        to='/contact'
				                        icon={<Icon color='secondary'>contact_mail</Icon>}
				/>
				{openDialog && <ReportBugDialog/>}
			</BottomNavigation>
		</Paper>
	)
}