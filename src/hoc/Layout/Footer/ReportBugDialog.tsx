import React, {FC} from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	useMediaQuery,
} from '@material-ui/core'
import {useTheme} from '@material-ui/styles'

export const ReportBugDialog: FC = () => {
	const [open, setOpen] = React.useState(true)
	const theme = useTheme()
	// @ts-ignore
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
	
	const handleClose = () => {
		setOpen(false)
	}
	
	return (
		<div>
			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
			>
				<DialogTitle> {'Something wrong with the app?'}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						If things go terribly wrong, please let us know !
					</DialogContentText>
					<DialogContentText>
						We will fix this !
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose} color='primary'>
						Send report & Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}