//interface

import { createContext, ReactNode, useState } from 'react';
import { IAnimal } from '../util';

//animals tömb, addAnimal, changeLikesDislikes
interface IAnimalContext {
	animals: IAnimal[];
	initAnimals: () => void;
	addAnimal: (animal: IAnimal) => Promise<Response>;
	changeLikesDislikes: (animal: IAnimal, num: number) => void;
}
//default obj
const defaultAnimalContext: IAnimalContext = {
	animals: [],
	initAnimals: async () => {},
	addAnimal: async (animal: IAnimal): Promise<Response> => {
		return new Response('OK', { status: 201 });
	},
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
	async function addAnimal(animal: IAnimal): Promise<Response> {
		let res = await fetch('/api/new-animal', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(animal),
		});
		return res;
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
