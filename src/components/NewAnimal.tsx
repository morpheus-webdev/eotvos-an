import { Button, Checkbox, MenuItem, Select, TextField } from '@mui/material';
import { BiomeType, ClassType, defaultAnimal, IAnimal } from '../util';
import { useContext, useState } from 'react';
import { AnimalContext } from '../contexts/AnimalContext';

const NewAnimal = () => {
	const [newAnimal, setNewAnimal] = useState<IAnimal>(defaultAnimal);
	const { addAnimal } = useContext(AnimalContext);
	async function handleSave() {
		let res = await addAnimal(newAnimal).then((data) => data.json());
		if (res.message === 'Animal is created') {
			console.log(res.message);
		}
	}
	return (
		<div>
			<Select
				value={newAnimal.class}
				onChange={(e) =>
					setNewAnimal({ ...newAnimal, class: e.target.value as ClassType })
				}>
				<MenuItem value={'Mammals'}>Mammals</MenuItem>
				<MenuItem value={'Birds'}>Birds</MenuItem>
				<MenuItem value={'Fish'}>Fish</MenuItem>
				<MenuItem value={'Reptiles'}>Reptiles</MenuItem>
			</Select>
			<Select
				value={newAnimal.biome}
				onChange={(e) =>
					setNewAnimal({ ...newAnimal, biome: e.target.value as BiomeType })
				}>
				<MenuItem value={'Marine'}>Marine</MenuItem>
				<MenuItem value={'Freshwater'}>Freshwater</MenuItem>
				<MenuItem value={'Desert'}>Desert</MenuItem>
				<MenuItem value={'Forest'}>Forest</MenuItem>
				<MenuItem value={'Savanna'}>Savanna</MenuItem>
				<MenuItem value={'Tundra'}>Tundra</MenuItem>
				<MenuItem value={'Arctic'}>Arctic</MenuItem>
			</Select>
			<TextField
				placeholder='Animal name...'
				onChange={(e) => setNewAnimal({ ...newAnimal, name: e.target.value })}
			/>
			<TextField
				placeholder='Animalia...'
				onChange={(e) =>
					setNewAnimal({ ...newAnimal, animalia: e.target.value })
				}
			/>
			<TextField
				placeholder='Image...'
				onChange={(e) => setNewAnimal({ ...newAnimal, img: e.target.value })}
			/>
			<TextField
				placeholder='Url...'
				onChange={(e) => setNewAnimal({ ...newAnimal, url: e.target.value })}
			/>
			<TextField
				placeholder='Number of legs...'
				type='number'
				onChange={(e) =>
					setNewAnimal({ ...newAnimal, legs: parseInt(e.target.value) })
				}
			/>
			<h1>Is it a predator?</h1>
			<Checkbox
				checked={newAnimal.isPredator}
				onChange={(e) =>
					setNewAnimal({ ...newAnimal, isPredator: e.target.checked })
				}
			/>
			<Button onClick={handleSave}>Save animal</Button>
		</div>
	);
};

export default NewAnimal;
