import {Container, Typography} from '@material-ui/core'
import React from 'react'
import {Route} from '../../types/Route'
import {AboutPageTeam} from './AboutPageTeam/AboutPageTeam'

export const AboutPage: Route = () => {
	
	return (
		
		<Container>
			<Typography variant='h3'>
				Info about our team:
			</Typography>
			<AboutPageTeam/>
		</Container>
	)
}

AboutPage.icon = 'info'
AboutPage.routeName = '/about'
AboutPage.displayName = 'About'
