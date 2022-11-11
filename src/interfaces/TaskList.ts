import { ITask } from "./Task";

export interface ITaskList {
    taskList:ITask[];
    handleDelete(id:number):void;
    handleEdit(task: ITask):void;
};
