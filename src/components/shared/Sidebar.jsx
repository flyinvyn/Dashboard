import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
import { TbMessages } from "react-icons/tb";
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants'
import avatar from '../../img/avatar.png'

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-indigo-700 hover:no-underline hover:text-white active:bg-indigo-600 rounded-full w-11 h-11 transition-all text-base'

export default function Sidebar() {
	return (
		<div className="bg-white flex flex-col p-4 rounded-l-3xl">
			<div className="pt-2 flex flex-col justify-center items-center">
				<strong className="text-black text-3xl">S.</strong>
				<div className='bg-red-200 mt-14 w-10 h-10 rounded-full relative'>
					<TbMessages className='text-2xl cursor-pointer absolute right-2 bottom-2' />
				</div>
			</div>
			<div className='mt-10'>
				<div className="flex flex-1 flex-col gap-0.5 rounded-full bg-slate-100">
					{DASHBOARD_SIDEBAR_LINKS.map((link) => (
						<SidebarLink key={link.key} link={link} />
					))}
				</div>
			</div>
			<div className="flex flex-col gap-0.5 mt-7">
				<div className='w-10 h-10 rounded-full'>
					<img src={avatar} alt="avatar" />
				</div>
				<div className={'px-3 py-2 cursor-pointer mt-4'}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
				</div>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-indigo-700 text-white' : 'text-black', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
		</Link>
	)
}
