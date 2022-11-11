import { Dispatch, SetStateAction } from "react";
import { ITask } from "./Task";

export interface ITaskForm {
    btnText: string;
    taskList: ITask[];
    setTaskList?: Dispatch<SetStateAction<ITask[]>>
    task?:ITask | null;
    handleUpdate?(id: number, title: string, difficulty: number | undefined): void;
};
