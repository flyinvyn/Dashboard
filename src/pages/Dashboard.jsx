import React from 'react'
import Card from '../components/Card'
import ListItem from '../components/ListItem'
import BalanceStatistic from '../components/BalanceStatistic'
import Chat from '../components/Chat'
import LastTransaction from '../components/LastTransaction'
import Analytics from '../components/Analytics'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full mt-7">
				<BalanceStatistic />
				<Card />
			</div>
			<div className="flex flex-row gap-1 w-full">
				<ListItem />
				<Chat />
			</div>
			<div className="flex flex-row gap-1 w-full">
				<LastTransaction />
				<Analytics />
			</div>
		</div>
	)
}
