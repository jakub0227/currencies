import {Route} from '../../../../types/Route'
import {CurrentRatesPage} from '../../../../pages/CurrentRatesPage/CurrentRatesPage'
import {AboutPage} from '../../../../pages/AboutPage/AboutPage'
import {ContactPage} from '../../../../pages/ContactPage/ContactPage'
import {CurrencyPage} from '../../../../pages/CurrencyPage/CurrencyPage'
import {HomePage} from '../../../../pages/HomePage/HomePage'

export const routeList: Route[] = [
	HomePage,
	CurrentRatesPage,
	CurrencyPage,
	AboutPage,
	ContactPage,
]