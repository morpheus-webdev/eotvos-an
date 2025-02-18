import { createContext, ReactNode, useState } from 'react';
import { IBackendUser, ILoggedInUser } from '../utils/userUtil';
import { Password } from '@mui/icons-material';

interface IUserContext {
	currentUser: ILoggedInUser | undefined;
	login: (username: string, password: string) => void;
	logout: () => void;
	isLoggedIn: boolean;
	registerNewUser: (newUser: IBackendUser) => void;
}

const defaultUserContext: IUserContext = {
	currentUser: undefined,
	login: (username: string, password: string) => {},
	logout: () => {},
	isLoggedIn: false,
	registerNewUser: (newUser: IBackendUser) => {},
};

export const UserContext = createContext<IUserContext>(defaultUserContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<ILoggedInUser | undefined>(
		undefined
	);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	function login(username: string, password: string) {
		console.log(`${username} is trying to login with password: ${password}`);
		//TODO
	}
	function logout() {
		//TODO
	}
	function registerNewUser(newUser: IBackendUser) {
		//TODO
	}
	return (
		<UserContext.Provider
			value={{ currentUser, login, logout, isLoggedIn, registerNewUser }}>
			{children}
		</UserContext.Provider>
	);
};
