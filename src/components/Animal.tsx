import { IAnimal } from '../util';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
const colors = {
	Mammals: '#A9C46C',
	Reptiles: '#ECE852',
	Birds: '#54473F',
	Fish: '#73BBA3',
};

const Animal = (props: { animal: IAnimal }) => {
	const animal = props.animal;
	return (
		<div
			style={{ backgroundColor: colors[animal.class] }}
			className='w-[400px] h-[640px] border-2 border-black rounded-2xl m-4 flex flex-col flex-nowrap items-center justify-between'>
			<h1 className='text-3xl'>{animal.name}</h1>
			<h1 className='text-2xl'>{animal.animalia}</h1>
			<img className='w-full h-3/5 object-cover' src={animal.img} />
			<h1>Number of legs: {animal.legs}</h1>
			<h1>{animal.isPredator ? 'Predator' : 'Prey'}</h1>
			<div className='flex flex-row flex-nowrap w-full h-12 justify-between'>
				<Button>
					<ThumbUpIcon />
				</Button>
				<Button>
					<ThumbDownIcon />
				</Button>
			</div>
		</div>
	);
};

export default Animal;
