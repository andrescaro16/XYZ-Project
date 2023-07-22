const Store = ({ img, name }) => {
	return (
		<div className='flex flex-col w-[280px] h-[280px] bg-[#28aea4] rounded-xl p-4'>

            <figure className='w-full h-[180px]'>
                <img src={img} className='w-full h-[180px] object-cover overflow-hidden rounded-xl'/>
            </figure>
            <div className='flex flex-col items-center justify-center grow'>
                <h1 className='text-xl font-bold text-white'>
                    <span style={{ letterSpacing: '0.1em', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>{name}</span>
                </h1>
            </div>
		</div>
	);
};

export default Store;