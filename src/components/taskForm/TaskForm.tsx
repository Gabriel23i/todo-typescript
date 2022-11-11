import React, { ChangeEvent, FormEvent, Dispatch, SetStateAction,  useEffect, useState } from 'react';

import { FormStyles, Content } from './styles';

import { ITask } from '../../interfaces/Task';

interface Props {
    btnText: string;
    taskList: ITask[];
    setTaskList?: Dispatch<SetStateAction<ITask[]>>
    task?:ITask | null;
    handleUpdate?(id: number, title: string, difficulty: number): void;
};

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [difficulty, setDifficulty] = useState<number>(0);

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(handleUpdate){
            handleUpdate(id, title, difficulty);
        } else {

            const id = Math.floor(Math.random() * 1000);

            const newTask: ITask = { id, title, difficulty };

            setTaskList!([...taskList, newTask]);

            setTitle('');
            setDifficulty(0);
        };
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value);
        } else {
            setDifficulty(parseInt(e.target.value));
        };
    };

    useEffect(()=>{
        if(task){
            setId(task.id);
            setTitle(task.title);
            setDifficulty(task.difficulty);
        };
    },[task]);

    return (
        <FormStyles onSubmit={ addTaskHandler }>
            <Content>
                <label htmlFor="title">Título:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Título da tarefa"
                    onChange={handleChange} 
                    value={title}
                />
            </Content>
            <Content>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input
                    type="number"
                    name="dificulty"
                    placeholder="Dificuldade da tarefa"
                    onChange={handleChange} 
                    value={difficulty}
                />
            </Content>
            <input type="submit" value={btnText} />
        </FormStyles>
    );
};

export default TaskForm;