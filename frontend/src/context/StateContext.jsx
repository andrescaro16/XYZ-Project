import { createContext, useContext, useState, useEffect } from 'react';

export const Context = createContext();

const { ethereum } = window;

export const StateContext = ({ children }) => {
	const [formData, setformData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
	const [currentAccount, setCurrentAccount] = useState('');
	const [isLogin, setIsLogin] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	// Search
	const [searchValue, setSearchValue] = useState('');
	const [stores, setStores] = useState([]);
	const [filteredStores, setFilteredStores] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const handleChange = (e, name) => {
		setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
	};

	const checkIfWalletIsConnect = async () => {
		try {
			if (!ethereum) {
				setIsLogin(false);
				alert('Please use Cryto Wallet Core');
				return;
			}
			const accounts = await ethereum.request({ method: 'eth_accounts' });
			if (accounts.length) {
				setCurrentAccount(accounts[0]);
				setIsLogin(true);
			} else {
				console.log('No se encontraron cuentas');
				setIsLogin(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const connectWallet = async () => {
		try {
			if (!ethereum) {
				setIsLogin(false);
				alert('Please use Cryto Wallet Core');
				return;
			}
			const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
			setCurrentAccount(accounts[0]);
			setIsLogin(true);
		} catch (error) {
			console.log(error);
			setIsLogin(false);
			throw new Error('No ethereum object');
		}
	};

	const signOut = async () => {
		try {
			setIsLogin(false);
			setCurrentAccount('');
		} catch (error) {
			console.log(error);
		}
	};



	useEffect(() => {
		checkIfWalletIsConnect();
	}, []);

	useEffect(() => {
		console.log(currentAccount);
	}, [currentAccount]);

	return (
		<Context.Provider
			value={{
				connectWallet,
				currentAccount,
				isLoading,
				handleChange,
				formData,
				isLogin,
				signOut,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
