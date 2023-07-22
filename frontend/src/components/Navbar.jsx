import { useStateContext } from '../context/StateContext';
import { Link } from 'react-router-dom';
/* import logo from '../../src/images/logo.png'; */

const items = [
	{ title: 'Commerce', href: '/commerce' },
	{ title: 'Health', href: '/health' },
	{ title: 'Growers', href: '/growers' },
];

const NavBarItem = ({ title, href, classprops }) => (
	<li className={`mx-2 cursor-pointer select-none ${classprops}`}>
		<Link to={href} className='text-base'>
			{title}
		</Link>
	</li>
);

const Navbar = () => {
	const { connectWallet, isLogin, signOut } = useStateContext();

	return (
		<nav className='w-full flex absolute top-0 md:justify-center lg:gap-28 xl:gap-40 justify-between items-center p-4'>
			<div className='flex grow-[0.2] flex-initial justify-center items-center'>
				<Link to='/'>
					<div className='flex justify-center items-center'>
						{/* <img src={logo} alt='Logo' className='cursor-pointer' /> */}
						<p className='text-3xl font-bold text-white mx-2 select-none'>
							<span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>XYZ</span>
						</p>
					</div>
				</Link>
			</div>

			<ul className='text-white flex list-none flex-row justify-between items-center flex-initial'>
				{items.map((item, index) => (
					<NavBarItem key={item.title + index} title={item.title} href={item.href} />
				))}
				{isLogin ? (
					<li className='bg-[#28aea4] py-2 px-7 mx-2 rounded-full cursor-pointer select-none hover:bg-[#1d9b92]' onClick={signOut}>
						<p className='text-base'>Sign out</p>
					</li>
				) : (
					<li className='bg-[#28aea4] py-2 px-7 mx-2 rounded-full cursor-pointer select-none hover:bg-[#1d9b92]' onClick={connectWallet}>
						<p className='text-base'>Login</p>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
