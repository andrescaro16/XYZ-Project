const Search = ({ search, setSearch }) => {
	return (
		<div className='flex justify-center items-center w-full mt-6'>
			<input 
                type='text'
                placeholder='Search a product...'
                className='w-[80%] md:w-1/2 xl:w-1/3 p-2 rounded-xl text-black border-2 border-gray-200 focus:outline-none focus:border-[#1e8895]'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
		</div>
	);
};

export default Search;
