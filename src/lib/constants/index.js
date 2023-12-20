import { HiOutlineUsers } from 'react-icons/hi'
import { IoSettingsOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { TbClockHour9 } from "react-icons/tb";
import { BsFolder2 } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";



export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		path: '/',
		icon: <RiHome6Line />
	},
	{
		key: 'notification',
		path: '/notification',
		icon: <FiBell />
	},
	{
		key: 'clock',
		path: '/clock',
		icon: <TbClockHour9 />
	},
	{
		key: 'profile',
		path: '/profile',
		icon: <HiOutlineUsers />
	},
	{
		key: 'folder',
		path: '/folder',
		icon: <BsFolder2 />
	},
	{
		key: 'setting',
		path: '/setting',
		icon: <IoSettingsOutline />
	}
]
