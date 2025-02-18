import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav
			style={{
				height: '3rem',
				backgroundColor: '#7da0c7',
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'nowrap',
				gap: '2rem',
				justifyContent: 'left',
				alignItems: 'center',
			}}>
			<Button style={{ borderRadius: '25%' }}>
				<Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
					New Task
				</Link>
			</Button>
			<Button style={{ borderRadius: '25%' }}>
				<Link style={{ textDecoration: 'none', color: 'white' }} to='/tasks'>
					Tasks
				</Link>
			</Button>
		</nav>
	);
};
export default Navbar;
