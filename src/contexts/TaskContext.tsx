import { createContext, useEffect, useReducer, useState } from 'react';
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
	useEffect(() => {
		console.log(tasks);
	}, [tasks]);
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
	function changeStatus(name: string) {
		let copy = tasks.map((t) => {
			if (t.name === name) {
				return { ...t, isCompleted: !t.isCompleted };
			} else {
				return t;
			}
		});
		setTasks(copy);
	}
	return (
		<TaskContext.Provider
			value={{ tasks, addTask, removeTaskByName, changeStatus }}>
			{children}
		</TaskContext.Provider>
	);
};
