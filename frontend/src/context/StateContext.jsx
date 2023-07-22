import { createContext, useContext, useState, useEffect } from 'react';


export const Context = createContext();

const { ethereum } = window;

export const StateContext = ({ children }) => {
	const [formData, setformData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
	const [currentAccount, setCurrentAccount] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e, name) => {
		setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
	};

	const checkIfWalletIsConnect = async () => {
		try {
			if (!ethereum) return alert('Por favor usa la Cryto Wallet Core');
			const accounts = await ethereum.request({ method: 'eth_accounts' });
			if (accounts.length) {
				setCurrentAccount(accounts[0]);
			} else {
				console.log('No se encontraron cuentas');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const connectWallet = async () => {
		try {
			if (!ethereum) return alert('Por favor usa la Cryto Wallet Core');
			const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error);

			throw new Error('No ethereum object');
		}
	};

	useEffect(() => {
		checkIfWalletIsConnect();
	}, []);

	return (
		<Context.Provider
			value={{
				connectWallet,
				currentAccount,
				isLoading,
				handleChange,
				formData,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
