import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='w-full h-24 bg-blue-400 flex flex-row flex-nowrap'>
			<Link className='text-2xl p-4 text-white m-4' to='/'>
				Animals
			</Link>
			<Link className='text-2xl p-4 text-white m-4' to='/new-animal'>
				New animal
			</Link>
		</nav>
	);
};

export default Navbar;
