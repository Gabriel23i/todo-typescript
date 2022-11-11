import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { FormStyles, Content } from './styles';

import { ITask } from '../../interfaces/Task';
import { ITaskForm } from '../../interfaces/TaskForm';

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: ITaskForm) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [difficulty, setDifficulty] = useState<number | null>(null);

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(handleUpdate && difficulty){
            handleUpdate(id, title, difficulty);
        } else {
            const id = Math.floor(Math.random() * 1000);

            const newTask: ITask = { id, title, difficulty };

            setTaskList!([...taskList, newTask]);

            setTitle('');
            setDifficulty(null);
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
        if(task?.difficulty){
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
                    onChange={ handleChange } 
                    value={ title }
                />
            </Content>
            <Content>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input
                    type="number"
                    name="dificulty"
                    placeholder="Dificuldade da tarefa"
                    onChange={ handleChange } 
                    value={ difficulty ? difficulty : '' }
                />
            </Content>
            <input type="submit" value={ btnText } />
        </FormStyles>
    );
};

export default TaskForm;
