import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
	//const {isLoggedIn} = useContext(UserContext)
	let isLoggedIn = false; //TODO implement UserContext and delete
	return isLoggedIn ? (
		<nav>
			<Button>
				<Link to='/home'>Log out</Link>
			</Button>
		</nav>
	) : (
		<nav>
			<Button>
				<Link to='/'>Login</Link>
			</Button>
			<Button>
				<Link to='/register'>Register</Link>
			</Button>
		</nav>
	);
};

export default Navbar;
