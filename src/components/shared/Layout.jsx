import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import Menu from './Menu'

export default function Layout() {
	return (
		<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar />
			<div className="flex min-h-0 overflow-auto">
				<div className='p-4'>
					<Header name="Hello, Jhon .D" />
					<Outlet />
				</div>
				<div className=''>
					<Menu />
				</div>
			</div>
		</div>
	)
}
