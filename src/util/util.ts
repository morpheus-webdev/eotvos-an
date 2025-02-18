export interface ITask {
    name: string;
    duration: number;
    isCompleted: boolean;
}

export const defaultTask: ITask = {
    name: '',
    duration: 0,
    isCompleted: false
}