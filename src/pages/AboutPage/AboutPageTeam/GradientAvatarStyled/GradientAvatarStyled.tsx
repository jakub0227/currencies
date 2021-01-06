import React, {FC} from 'react'
import {useGradientAvatarStyles} from '@mui-treasury/styles/avatar/gradient'
import {Avatar, Box, Typography} from '@material-ui/core'

export interface GradientAvatarStyledProps {
	avatarSRC: string
	teamName: string
	teamPosition: string
}

export const GradientAvatarStyled: FC<GradientAvatarStyledProps> = React.memo(function GradientAvatar(props) {
	
	const styles = useGradientAvatarStyles({
		size: 80,
		gap: 2.5,
		thickness: 3,
		gapColor: '#f4f7fa',
		color: 'linear-gradient(to bottom right, #3A1C71, #007991, #78ffd6)',
	})
	
	return (
		<Box>
			<div className={styles.root}>
				<Avatar src={props.avatarSRC}/>
			</div>
			<Typography variant='h5'>
				{props.teamName}
			</Typography>
			<Typography>
				{props.teamPosition}
			</Typography>
		</Box>
	)
})