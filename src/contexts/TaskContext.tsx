import { createContext, useReducer, useState } from 'react';
import { ITask } from '../util/util';

interface ITaskContext {
	tasks: ITask[];
	addTask: (task: ITask) => void;
	removeTaskByName: (name: string) => void;
	changeStatus: (name: string) => void;
}

const defaultTaskContext: ITaskContext = {
	tasks: [],
	addTask: (task) => {},
	removeTaskByName: (name) => {},
	changeStatus: (name) => {},
};

export const TaskContext = createContext<ITaskContext>(defaultTaskContext);

export const TaskContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [tasks, setTasks] = useState<ITask[]>([]);
	function addTask(task: ITask) {
		if (tasks.find(({ name }) => name === task.name)) {
			console.error(`Name '${task.name}' already taken`);
		} else {
			setTasks([...tasks, task]);
		}
	}
	function removeTaskByName(name: string) {
		let copy = tasks.filter((t) => {
			return t.name !== name;
		});
		setTasks(copy);
	}
	return (
		<TaskContext.Provider value={{ tasks, addTask, removeTaskByName }}>
			{children}
		</TaskContext.Provider>
	);
};
