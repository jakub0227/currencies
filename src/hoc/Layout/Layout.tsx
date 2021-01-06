import {css} from '@emotion/react'
import React, {FC} from 'react'
import {CssBaseline, Paper, useTheme} from '@material-ui/core'
import {Footer} from './Footer/Footer'
import {Navigation} from './Navigation/Navigation'

export const Layout: FC = (props) => {
	const theme = useTheme()
	const styles = {
		root: css`
          min-height: 100vh;
          display: flex;
          flex-direction: column;
		`,
		page: css`
          width: 100%;
          ${theme.customMixins.flexCentered};
          text-align: center;
          flex: 1;
		`,
	}
	
	return (
		<Paper square elevation={0} css={styles.root}>
			<CssBaseline/>
			<Navigation/>
			<Paper css={styles.page}>
				<div>
					{props.children}
				</div>
			</Paper>
			<Footer/>
		</Paper>
	)
}