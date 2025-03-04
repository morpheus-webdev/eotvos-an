import { useContext, useEffect } from 'react';
import { AnimalContext } from '../contexts/AnimalContext';
import Animal from './Animal';

const Animals = () => {
	const { initAnimals, animals } = useContext(AnimalContext);
	useEffect(() => {
		initAnimals();
	}, []);
	return (
		<div className='flex flex-row flex-wrap gap-8'>
			{animals.map((a, i) => {
				return <Animal key={`animal-${i}`} animal={a} />;
			})}
		</div>
	);
};

export default Animals;
