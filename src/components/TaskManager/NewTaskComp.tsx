import { Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { defaultTask, ITask } from '../../util/util';
import { TaskContext } from '../../contexts/TaskContext';

const NewTaskComp = () => {
	const { addTask } = useContext(TaskContext);
	const [newTask, setNewTask] = useState<ITask>(defaultTask);
	function handleAdd() {
		if (newTask.name !== '' || newTask.duration <= 0) {
			addTask(newTask);
		}
	}
	return (
		<div>
			<TextField
				type='text'
				placeholder='Name...'
				value={newTask.name}
				onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
			/>
			<TextField
				type='number'
				placeholder='Duration...'
				onChange={(e) =>
					setNewTask({ ...newTask, duration: parseInt(e.target.value) })
				}
			/>
			<Button onClick={handleAdd}>Add new task</Button>
		</div>
	);
};

export default NewTaskComp;
