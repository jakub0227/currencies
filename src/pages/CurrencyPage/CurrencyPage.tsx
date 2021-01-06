import {css} from '@emotion/react'
import {Fade, Grid, Typography, useTheme} from '@material-ui/core'
import React from 'react'
import {Route} from '../../types/Route'
import {CurrencyCard, CurrencyCardProps} from './CurrencyCard/CurrencyCard'

const currencyCards: CurrencyCardProps[] = [
	{
		imgURL: 'https://images.unsplash.com/photo-1593672740624-38a34ff53d5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		title: 'United States Dollar',
		text: 'The United States dollar (symbol: $; code: USD; also abbreviated US$ to distinguish it from other dollar-denominated currencies; referred to as the dollar, U.S. dollar, or American dollar) is the official currency of the United States and its territories per the Coinage Act of 1792. One dollar is divided into 100 cents (symbol: ¢), or into 1000 mills for accounting and taxation purposes (symbol: ₥). ' +
			'The Coinage Act of 1792 created a decimal currency by creating the dime, nickel, and penny coins, as well as the dollar, half dollar, and quarter dollar coins, all of which are still minted in 2020. ' +
			'Several forms of paper money were introduced by Congress over the years, the latest of which being the Federal Reserve Note that was authorized by the Federal Reserve Act of 1913. ' +
			'While all existing U.S. currency remains legal tender, issuance of the previous form of the currency (U.S. notes) was discontinued in January 1971. As a result, paper money that is in current circulation consists primarily of Federal Reserve Notes that are denominated in U.S. dollars.',
		currency: 'USD',
		wikiLink: 'https://en.wikipedia.org/wiki/United_States_dollar',
	}, {
		imgURL: 'https://images.unsplash.com/photo-1579635827170-e17ba1c201f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
		title: 'Euro',
		text: 'The euro (symbol: €; code: EUR) is the official currency of 19 of the 27 member states of the European Union. This group of states is known as the eurozone or euro area and includes about 343 million citizens as of 2019. ' +
			'The euro, which is divided into 100 cents, is the second-largest and second-most traded currency in the foreign exchange market after the United States dollar. ' +
			'The currency is also used officially by the institutions of the European Union, by four European microstates that are not EU members, the British Overseas Territory of Akrotiri and Dhekelia, as well as unilaterally by Montenegro and Kosovo. Outside Europe, a number of special territories of EU members also use the euro as their currency. ' +
			'Additionally, over 200 million people worldwide use currencies pegged to the euro. The euro is the second-largest reserve currency as well as the second-most traded currency in the world after the United States dollar.[18][19][20] As of December 2019, with more than €1.3 trillion in circulation, the euro has one of the highest combined values of banknotes and coins in circulation in the world.',
		currency: 'EUR',
		wikiLink: 'https://en.wikipedia.org/wiki/Euro',
	}, {
		imgURL: 'https://images.unsplash.com/photo-1579267144032-2ac3187a4854?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		title: 'Polish Zloty',
		text: 'The złoty (Polish: [ˈzwɔtɨ] (About this soundlisten);[2] sign: zł; code: PLN) is the official currency and legal tender of Poland. It is subdivided into 100 grosz (gr).[a] The widely recognised English form of the currency is the Polish zloty.' +
			' It is the most traded currency in Central Europe and ranks 22nd in the foreign exchange market. The word złoty is a masculine form of the Polish adjective \'golden\', which closely relates with its name to the Dutch guilder, whereas the grosz subunit was based on Austrian groschen (cognate to the English word "groat"). ' +
			'It was officially introduced to replace its predecessor, the Polish marka, on 28 February 1919 and began circulation in 1924. The only body permitted to manufacture or mint złoty coins is Mennica Polska, founded in Warsaw on 10 February 1766.',
		currency: 'PLN',
		wikiLink: 'https://en.wikipedia.org/wiki/Polish_z%C5%82oty',
	}, {
		imgURL: 'https://images.unsplash.com/photo-1517232117795-40c9d8212a04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
		title: 'Pound Sterling',
		text: 'Pound sterling (symbol: £; ISO code: GBP), known in some contexts simply as the pound or sterling, is the official currency of the United Kingdom, Jersey, Guernsey, the Isle of Man, Gibraltar, South Georgia and the South Sandwich Islands, the British Antarctic Territory, and Tristan da Cunha. ' +
			'It is subdivided into 100 pence (singular: penny, abbreviated: p). The Pound sterling is the oldest currency in continuous use. Some nations that do not use sterling also have currencies called the pound. ' +
			'Sterling is the fourth most-traded currency in the foreign exchange market, after the United States dollar, the euro, and the Japanese yen. ' +
			'Together with those three currencies and the Chinese yuan, it forms the basket of currencies which calculate the value of IMF special drawing rights. As of 30 September 2019, sterling is also the fourth most-held reserve currency in global reserves.',
		currency: 'GBP',
		wikiLink: 'https://en.wikipedia.org/wiki/Pound_sterling',
	}, {
		imgURL: 'https://images.unsplash.com/photo-1602007503586-5df8cdb2c692?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
		title: 'Japanese Yen',
		text: 'The yen (Japanese: 円, Hepburn: en, symbol: ¥; code: JPY; also abbreviated as JP¥) is the official currency of Japan. It is the third most traded currency in the foreign exchange market after the United States dollar and the Euro. ' +
			'It is also widely used as a reserve currency after the U.S. dollar, the Euro, and the U.K. pound sterling. The concept of the yen was a component of the late-19th century Meiji government\'s modernization program of Japan\'s economy, which postulated the pursuit of a uniform currency throughout the country, modelled after the European decimal currency system. Before the Meiji Restoration, ' +
			'Japan\'s feudal fiefs all issued their own money, hansatsu, in an array of incompatible denominations. The New Currency Act of 1871 did away with these and established the yen, which was defined as 1.5 g (0.048 troy ounces) of gold, or 24.26 g (0.780 troy ounces) of silver, as the new decimal currency. The former han (fiefs) became prefectures and their mints private chartered banks, which initially retained the right to print money. ' +
			'To bring an end to this situation, the Bank of Japan was founded in 1882 and given a monopoly on controlling the money supply.',
		currency: 'JPY',
		wikiLink: 'https://en.wikipedia.org/wiki/Japanese_yen',
	}, {
		imgURL: 'https://images.unsplash.com/photo-1599387950977-af4e17082ee1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
		title: 'United Arab Emirates Dirham',
		text: 'The name dirham is an Arabic word. Due to centuries of trade and usage of the currency, dirham survived through the Ottoman Empire.\n' +
			'\n' +
			'Before 1966, all the emirates that now form the UAE used the Gulf rupee, which was pegged at parity to the Indian rupee. On 6 June 1966, India decided to devalue the Gulf rupee against the Indian rupee. Not accepting the devaluation, several of the states still using the Gulf rupee adopted their own or other currencies. All the Trucial States except Abu Dhabi adopted the Qatar and Dubai riyal, which was equal to the Gulf rupee prior to the devaluation. These emirates briefly adopted the Saudi riyal during the transition from the Gulf rupee to the Qatar and Dubai riyal. Abu Dhabi used the Bahraini dinar, at a rate of 10 Gulf rupees = 1 dinar. In 1973, the UAE adopted the UAE dirham as its currency. Abu Dhabi adopted the UAE dirham in place of the Bahraini dinar, at 1 dinar = 10 dirham, while in the other emirates, the Qatar and Dubai riyal was exchanged at par.',
		currency: 'AED',
		wikiLink: 'https://en.wikipedia.org/wiki/United_Arab_Emirates_dirham',
	}, {
		imgURL: 'https://images.unsplash.com/photo-1543699539-33a389c5dcfe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
		title: 'Bitcoin',
		text: 'Bitcoin[a] (₿) is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. Research produced by the University of Cambridge estimates that in 2017, there were 2.9 to 5.8 million unique users using a cryptocurrency wallet, most of them using bitcoin.',
		currency: 'BTC',
		wikiLink: 'https://en.wikipedia.org/wiki/Bitcoin',
	}, {
		imgURL: 'https://images.unsplash.com/photo-1590286162167-70fb467846ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		title: 'Ethereum',
		text: 'Ethereum is a decentralized, open-source blockchain featuring smart contract functionality. Ether (ETH) is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain in the world. Ethereum is currently planning to implement a series of upgrades called Ethereum 2.0, which includes a transition to proof of stake and an increase in transaction throughput using sharding.',
		currency: 'ETH',
		wikiLink: 'https://en.wikipedia.org/wiki/Ethereum',
	},
]

export const CurrencyPage: Route = () => {
	const theme = useTheme()
	const styles = {
		root: css`
          display: flex;
          flex-direction: column;
          padding: ${theme.spacing(5)}px
		`,
		
	}
	
	return (
		
		<Fade in timeout={1000}>
			<div css={styles.root}>
				<Typography variant='h4'>Currencies we operate with:</Typography>
				<Grid
					spacing={2}
					container
					direction='column'
					justify='flex-start'
					alignItems='center'>
					{currencyCards.map(currency => (
						<Grid item xs={12} spacing={3}>
							<CurrencyCard {...currency}/>
						</Grid>
					))}
				</Grid>
			</div>
		</Fade>
	
	)
}

CurrencyPage.routeName = '/currency'
CurrencyPage.displayName = 'Currencies'
CurrencyPage.icon = 'attach_money'