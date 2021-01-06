import {css} from '@emotion/react'
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
	Typography,
} from '@material-ui/core'
import React, {FC, useState} from 'react'
import useTheme from '@material-ui/core/styles/useTheme'

export interface CurrencyCardProps {
	imgURL: string
	title: string
	text: string
	currency: string
	wikiLink: string
}

export const CurrencyCard: FC<CurrencyCardProps> = (props) => {
	const theme = useTheme()
	const styles = {
		cardRoot: css`
          text-align: left;
          width: 450px;
          border-radius: 25px;
          box-shadow: 0 8px 40px -12px rgba(0, 0, 0, 0.3);
          transition: 0.3s;

          :hover {
            box-shadow: 0 16px 70px -12.125px rgba(0, 0, 0, 0.3)
          }
		`,
		cardMedia: css`
          height: 140px;
		`,
		cardContent: css`
          padding: ${theme.spacing(3)}px;
		`,
		cardWikiButton: css`
          padding-left: ${theme.spacing(3)}px
		`,
	}
	
	const [expanded, setExpanded] = useState(false)
	
	const handleExpandClick = () => {
		setExpanded(prev => !prev)
	}
	
	return (
		
		<Card css={styles.cardRoot}>
			<CardActionArea onClick={handleExpandClick}>
				<CardMedia css={styles.cardMedia}
				           image={props.imgURL}
				/>
				<CardHeader title={props.title}
				/>
				<Collapse in={expanded}
				          timeout='auto'
				          unmountOnExit>
					<CardContent css={styles.cardContent}>
						<Typography variant='h5' component='h2' align='center'>
							{props.currency}
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							{props.text}
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							css={styles.cardWikiButton}
							variant='text'
							size='small'
							color='secondary'
							onClick={e => e.stopPropagation()}
							target='_blank'
							href={props.wikiLink}>
							Learn More
						</Button>
					</CardActions>
				</Collapse>
			</CardActionArea>
		</Card>
	
	)
}