import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Store from '../components/Store';
import { useStateContext } from '../context/StateContext';


const Commerce = () => {

    const { search, setSearch } = useStateContext();

	return (
		<>
			<div className='gradient-bg-welcome min-h-screen w-full flex flex-col justify-start items-center text-center text-white'>
				<Navbar />
				<h1 className='text-5xl font-bold text-white mt-32'>
					<span style={{ letterSpacing: '0.1em', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Commerce</span>
				</h1>
                <Search />
                <div className='flex flex-wrap gap-2 justify-center items-center mt-20 mx-2 md:mx-6 xl:mx-8'>
                    <Link to='/profile/1'>
                        <Store name={"Store x"} img={"https://images.pexels.com/photos/7667699/pexels-photo-7667699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                    </Link>
                    <Store name={"Store y"} img={"https://images.pexels.com/photos/7667911/pexels-photo-7667911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                    <Store name={"Store z"} img={"https://images.pexels.com/photos/6321773/pexels-photo-6321773.jpeg"}/>
                    <Store name={"Store a"} img={"https://images.pexels.com/photos/5810703/pexels-photo-5810703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                </div>
			</div>
		</>
	);
};

export default Commerce;
