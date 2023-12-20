import React from 'react'
import { RiArrowDropRightLine } from "react-icons/ri";
import ListItems from './ListItems';


// const recentOrderData = [
// 	{
// 		id: '1',
// 		product_id: '4324',
// 		customer_id: '23143',
// 		customer_name: 'Shirley A. Lape',
// 		order_date: '2022-05-17T03:24:00',
// 		order_total: '$435.50',
// 		current_order_status: 'PLACED',
// 		shipment_address: 'Cottage Grove, OR 97424'
// 	},
// 	{
// 		id: '7',
// 		product_id: '7453',
// 		customer_id: '96453',
// 		customer_name: 'Ryan Carroll',
// 		order_date: '2022-05-14T05:24:00',
// 		order_total: '$96.35',
// 		current_order_status: 'CONFIRMED',
// 		shipment_address: 'Los Angeles, CA 90017'
// 	},
// 	{
// 		id: '2',
// 		product_id: '5434',
// 		customer_id: '65345',
// 		customer_name: 'Mason Nash',
// 		order_date: '2022-05-17T07:14:00',
// 		order_total: '$836.44',
// 		current_order_status: 'SHIPPED',
// 		shipment_address: 'Westminster, CA 92683'
// 	},
// 	{
// 		id: '3',
// 		product_id: '9854',
// 		customer_id: '87832',
// 		customer_name: 'Luke Parkin',
// 		order_date: '2022-05-16T12:40:00',
// 		order_total: '$334.50',
// 		current_order_status: 'SHIPPED',
// 		shipment_address: 'San Mateo, CA 94403'
// 	},
// 	{
// 		id: '4',
// 		product_id: '8763',
// 		customer_id: '09832',
// 		customer_name: 'Anthony Fry',
// 		order_date: '2022-05-14T03:24:00',
// 		order_total: '$876.00',
// 		current_order_status: 'OUT_FOR_DELIVERY',
// 		shipment_address: 'San Mateo, CA 94403'
// 	},
// 	{
// 		id: '5',
// 		product_id: '5627',
// 		customer_id: '97632',
// 		customer_name: 'Ryan Carroll',
// 		order_date: '2022-05-14T05:24:00',
// 		order_total: '$96.35',
// 		current_order_status: 'DELIVERED',
// 		shipment_address: 'Los Angeles, CA 90017'
// 	}
// ]

const ListItem = () => {
	return (
		<div className="bg-white p-4 pt-3 rounded-sm flex-1 rounded-l-xl">
			<div>
				<p className='text-base font-semibold'>List of item to buy</p>
				<div className='flex items-center gap-4 mt-3'>
					<div>
						<p className='text-2xl font-semibold'>02:00</p>
						<p className='text-gray-300 text-sm font-medium'>Sat,August 12</p>
					</div>
					<div>
						<RiArrowDropRightLine className='text-4xl text-gray-300 font-light' />
					</div>
					<div>
						<p className='text-2xl font-semibold'>02:00</p>
						<p className='text-gray-300 text-sm font-medium'>Sat,August 12</p>
					</div>
				</div>
			</div>

			<div className='flex justify-between text-sm mt-5'>
				<p className='text-gray-300 font-medium'>0/3 <span className='font-bold text-black'>Shopping list</span></p>
				<button className='font-semibold'>+ Add an item</button>
			</div>
			<div className='grid grid-cols-2 gap-4 mt-5'>
				<ListItems item={"Macbook"} />
				<ListItems item={"Bycicle"} />
				<ListItems item={"Motorcycle"} />
				<ListItems item={"Iphone 14 pro max"} />
			</div>
		</div>
	)
}

export default ListItem