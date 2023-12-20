import React from 'react'
import ExpensesAndIncome from '../ExpensesAndIncome'
import LatestSpending from '../LatestSpending'
import PremiumFeatures from '../PremiumFeatures'

function Menu() {
	return (
		<div className="w-[20rem] bg-white p-4 rounded-r-3xl">
			<ExpensesAndIncome />
            <LatestSpending />
			<PremiumFeatures />
		</div>
	)
}

export default Menu
