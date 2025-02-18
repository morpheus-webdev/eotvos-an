import { Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { defaultLoginFormUser, ILoginFormUser } from '../../utils/userUtil';
import { UserContext } from '../../contexts/UserContext';

const LoginPage = () => {
	const { login } = useContext(UserContext);
	const [loginFormUser, setLoginFormUser] =
		useState<ILoginFormUser>(defaultLoginFormUser);
	function handleLogin() {
		if (
			loginFormUser.username.length > 5 &&
			loginFormUser.password.length > 8
		) {
			login(loginFormUser.username, loginFormUser.password);
		}
	}
	return (
		<div className='flex flex-col flex-nowrap gap-8 justify-evenly items-center'>
			<TextField
				placeholder='Username...'
				onChange={(e) =>
					setLoginFormUser({ ...loginFormUser, username: e.target.value })
				}
			/>
			<TextField
				placeholder='Password...'
				type='password'
				onChange={(e) =>
					setLoginFormUser({ ...loginFormUser, password: e.target.value })
				}
			/>
			<Button variant='outlined' onClick={handleLogin}>
				Login
			</Button>
		</div>
	);
};
export default LoginPage;
