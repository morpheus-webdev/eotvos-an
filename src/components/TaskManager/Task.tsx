import { Button, Checkbox } from '@mui/material';
import { ITask } from '../../util/util';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import DeleteIcon from '@mui/icons-material/Delete';

const Task = (props: { task: ITask }) => {
	const { removeTaskByName } = useContext(TaskContext);
	const t = props.task;
	return (
		<div
			style={{
				width: '25vw',
				height: '35vh',
				margin: '1rem',
				backgroundColor: '#f1c65f',
				borderRadius: '5%',
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'nowrap',
				justifyContent: 'space-evenly',
				alignItems: 'center',
			}}>
			<h4>{t.name}</h4>
			<p>{t.duration} minutes</p>
			<Checkbox />
			<div
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'end',
				}}>
				<Button onClick={() => removeTaskByName(t.name)}>
					<DeleteIcon
						id='delete-icon'
						sx={{ color: 'red', '&:hover': { color: 'white' } }}
					/>
				</Button>
			</div>
		</div>
	);
};
export default Task;
