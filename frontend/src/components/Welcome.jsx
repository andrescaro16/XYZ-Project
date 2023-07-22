import Navbar from './Navbar';


const Welcome = () => {

	return (
		<div className='gradient-bg-welcome h-screen w-full flex flex-col justify-center items-center text-center relative'>
			<Navbar />

			<div className='flex flex-col justify-center items-center select-none'>
				<h1 className='text-2xl text-white'>
                    <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Welcome to</span>
                </h1>
				<h1 className='text-5xl font-bold text-white'>
                    <span style={{ letterSpacing: '0.1em', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>XYZ Project</span>
                </h1>
                <p className='text-white font-normal mt-4 px-4'>Welcome to the future of conscious consumption. Blockchain technology and high-quality products come together to offer you a unique experience.</p>
			</div>
		</div>
	);
};

export default Welcome;
