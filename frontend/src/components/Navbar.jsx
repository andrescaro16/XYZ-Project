import { useStateContext } from '../context/StateContext';
/* import logo from '../../src/images/logo.png'; */


const NavBarItem = ({ title, classprops }) => <li className={`mx-2 cursor-pointer select-none ${classprops}`}>{title}</li>;


const Navbar = () => {

	const { connectWallet } = useStateContext();

	return (
		<nav className='w-full flex absolute top-0 md:justify-center justify-between items-center p-4'>
			<div className='flex grow-[0.25] flex-initial justify-center items-center'>
                <div className='flex justify-center items-center'>
				    {/* <img src={logo} alt='Logo' className='cursor-pointer' /> */}
                    <p className='text-3xl font-bold text-white mx-2 select-none'>
                        <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>XYZ</span>
                    </p>
                </div>
			</div>

			<ul className='text-white flex list-none flex-row justify-between items-center flex-initial'>
				{['Commerce', 'Health', 'Growers'].map((item, index) => (
					<NavBarItem key={item + index} title={item} />
				))}
				<li className='bg-[#28aea4] py-2 px-7 mx-2 rounded-full cursor-pointer select-none hover:bg-[#1d9b92]'
					onClick={connectWallet}
				>
                    <p className='text-base'>Login</p>
                </li>
			</ul>

		</nav>
	);
};

export default Navbar;
