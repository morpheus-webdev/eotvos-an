export type ClassType = 'Mammals' | 'Fish' | 'Reptiles' | 'Birds';
export type BiomeType =
	| 'Marine'
	| 'Freshwater'
	| 'Desert'
	| 'Forest'
	| 'Savanna'
	| 'Tundra'
	| 'Arctic';

export interface IAnimal {
	animalClass: ClassType;
	biome: BiomeType;
	animalName: string;
	animalia: string;
	legs: number;
	isPredator: boolean;
	img: string;
	url: string;
	like: number;
	dislike: number;
}

export const defaultAnimal: IAnimal = {
	animalClass: "Mammals",
	biome: "Arctic",
	animalName: '',
	animalia: '',
	legs: 0,
	isPredator: false,
	img: '',
	url: '',
	like: 0,
	dislike: 0

}