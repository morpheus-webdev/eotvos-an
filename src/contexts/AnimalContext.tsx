//interface

import { createContext, ReactNode, useState } from 'react';
import { IAnimal } from '../util';

//animals tömb, addAnimal, changeLikesDislikes
interface IAnimalContext {
	animals: IAnimal[];
	initAnimals: () => void;
	addAnimal: (animal: IAnimal) => void;
	changeLikesDislikes: (animal: IAnimal, num: number) => void;
}
//default obj
const defaultAnimalContext: IAnimalContext = {
	animals: [],
	initAnimals: async () => {},
	addAnimal: (animal: IAnimal) => {},
	changeLikesDislikes: (animal: IAnimal, num: number) => {},
};
//context
export const AnimalContext =
	createContext<IAnimalContext>(defaultAnimalContext);
//context

export const AnimalContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [animals, setAnimals] = useState<IAnimal[]>([]);
	async function initAnimals() {
		const allAnimals: IAnimal[] = await fetch('/api/animals').then((data) =>
			data.json()
		);
		setAnimals(allAnimals);
	}
	function addAnimal(animal: IAnimal) {
		//TODO
	}
	function changeLikesDislikes(animal: IAnimal, num: number) {
		//TODO
	}

	return (
		<AnimalContext.Provider
			value={{ animals, initAnimals, addAnimal, changeLikesDislikes }}>
			{children}
		</AnimalContext.Provider>
	);
};
