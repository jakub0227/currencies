import {css} from '@emotion/react'
import React, {FC, useState} from 'react'
import {AppBar, Hidden, Icon, IconButton, Toolbar, Typography, useTheme} from '@material-ui/core'

import {MobileMenu} from './MobileMenu/MobileMenu'
import {NavigationItems} from './NavigationItems/NavigationItems'

export const Navigation: FC = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          margin-right: ${theme.spacing(4)} px;
          display: flex;
          color: #fff;
          background: #3CA55C;
          background: -webkit-linear-gradient(to right, #a7ee5d, #3CA55C);
          background: linear-gradient(to right, #a7ee5d, #3CA55C);
		
		
		
		
		`,
		toolBar: css`
          ${theme.customMixins.flexCentered};
		`,
		title: css`
          flex-grow: 1;
		`,
		menuButton: css`
          margin-right: ${theme.spacing(4)}px;
          color: #fff;
		`,
	}
	
	const [drawerOpen, setDrawerOpen] = useState(false)
	
	return (
		<AppBar css={styles.root} position='static' color='primary'>
			<Toolbar css={styles.toolBar}>
				<Hidden smUp>
					<MobileMenu open={drawerOpen} onClose={() => setDrawerOpen(false)}/>
					<IconButton css={styles.menuButton} onClick={() => setDrawerOpen(true)}>
						<Icon>menu</Icon>
					</IconButton>
				</Hidden>
				<Typography css={styles.title} variant='h6'>Your Personal: Currencies Advisor</Typography>
				<Hidden xsDown>
					<NavigationItems/>
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}
