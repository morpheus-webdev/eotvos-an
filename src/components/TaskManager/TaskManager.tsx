import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import Task from './Task';

const TaskManager = () => {
	//task állapotváltozó tömb
	const { tasks } = useContext(TaskContext);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				gap: '1rem',
			}}>
			{tasks.map((t, i) => {
				return <Task key={`task-${i}`} task={t} />;
			})}
		</div>
	);
};

export default TaskManager;
