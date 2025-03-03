import { useContext, useEffect } from 'react';
import { AnimalContext } from '../contexts/AnimalContext';

const Animals = () => {
	const { initAnimals, animals } = useContext(AnimalContext);
	useEffect(() => {
		initAnimals();
	}, []);
	return (
		<div>
			{animals.map((a, i) => {
				return <p key={`animal-${i}`}>{a.animalName}</p>;
			})}
		</div>
	);
};

export default Animals;
