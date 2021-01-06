import {Box, Button, Container, Fade, FormGroup, Icon, Paper, TextField, Typography} from '@material-ui/core'
import React from 'react'
import {Route} from '../../types/Route'
import useTheme from '@material-ui/core/styles/useTheme'
import {css} from '@emotion/react'
import {useSnackbar} from 'notistack'

export const ContactPage: Route = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          display: flex;
          flex-direction: column;
          min-width: 460px
		`,
		paper: css`
          flex-direction: column;
          padding: ${theme.spacing(4)}px;
          border-radius: 30px;
          box-shadow: 0 8px 40px -12px rgba(0, 0, 0, 0.3);
          transition: 0.3s;

          :hover {
            box-shadow: 0 16px 70px -12.125px rgba(0, 0, 0, 0.3)
          }
		`,
		form: css`
          margin-top: ${theme.spacing(5)}px
		`,
		button: css`
          margin-top: ${theme.spacing(2.5)}px;
          padding: ${theme.spacing(1.2)}px;
          border-radius: 25px;
		
		`,
		formElement: css`
          margin-top: 10px`,
	}
	
	const {enqueueSnackbar} = useSnackbar()
	
	return (
		<Fade in timeout={1000}>
			<Container css={styles.root}>
				<Paper css={styles.paper}>
					<Typography variant='h4'>
						Contact us!
					</Typography>
					<FormGroup css={styles.form}>
						<Box css={styles.formElement}>
							<TextField label='Name' variant='outlined' helperText='Real one' fullWidth/>
						</Box>
						<Box css={styles.formElement}>
							<TextField label='Email' variant='outlined' helperText='Valid adress' fullWidth/>
						</Box>
						<Box css={styles.formElement}>
							<TextField label='Message' multiline variant='outlined' helperText='Feedback' rows={8}
							           fullWidth/>
						</Box>
					</FormGroup>
					<Button css={styles.button}
					        variant='contained'
					        color='secondary'
					        onClick={() => enqueueSnackbar('Message sent!', {
						        variant: 'info',
					        })}
					        endIcon={<Icon>email</Icon>}>
						Send
					</Button>
				</Paper>
			</Container>
		</Fade>
	)
}

ContactPage.routeName = '/contact'
ContactPage.displayName = 'Contact'
ContactPage.icon = 'message'