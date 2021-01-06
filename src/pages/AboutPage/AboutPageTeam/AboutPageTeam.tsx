import React, {FC} from 'react'
import {GradientAvatarStyled, GradientAvatarStyledProps} from './GradientAvatarStyled/GradientAvatarStyled'
import {Fade, Grid, useTheme} from '@material-ui/core'
import {css} from '@emotion/react'

const aboutTeamAvatars: GradientAvatarStyledProps[] = [
	{
		avatarSRC: 'https://i.pravatar.cc/300?img=21',
		teamName: 'Ariana Grande',
		teamPosition: 'CEO',
	},
	{
		avatarSRC: 'https://i.pravatar.cc/300?img=11',
		teamName: 'Barney Simpson',
		teamPosition: 'HR Director',
	},
	{
		avatarSRC: 'https://i.pravatar.cc/300?img=23',
		teamName: 'Celine Davis',
		teamPosition: 'Revenue Director',
	},
	{
		avatarSRC: 'https://i.pravatar.cc/300?img=14',
		teamName: 'Dean Martin',
		teamPosition: 'SALES Director',
	},
	{
		avatarSRC: 'https://i.pravatar.cc/300?img=1',
		teamName: 'Eliza Stone',
		teamPosition: 'Product Manager',
	},
	{
		avatarSRC: 'https://i.pravatar.cc/300?img=17',
		teamName: 'Franz Ferdinand',
		teamPosition: 'PR Manager',
	},
	{
		avatarSRC: 'https://i.pravatar.cc/300?img=12',
		teamName: 'Greg Popiolek',
		teamPosition: 'IT & Tech support Director',
	},
	{
		avatarSRC: 'https://i.pravatar.cc/300?img=3',
		teamName: 'Matt Kowalski',
		teamPosition: 'Cyber Security Manager',
	},
]

export const AboutPageTeam: FC = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          display: flex;
          flex-grow: 1;
          justify-content: space-between;
          padding: ${theme.spacing(2)}px;
		`,
	}
	return (
		
		<Fade in timeout={1000}>
			<div css={styles.root}>
				<Grid
					spacing={1}
					container
					direction='row'
					justify='flex-start'
					alignItems='flex-start'>
					{aboutTeamAvatars.map(avatars => (
						<Grid item xs={6} spacing={3}>
							<GradientAvatarStyled {...avatars}/>
						</Grid>
					))}
				</Grid>
			</div>
		</Fade>
	
	)
}