import { Task, Details, Actions } from './styles';

import { ITask } from '../../interfaces/Task';

interface Props {
    taskList:ITask[];
    handleDelete(id:number):void;
    handleEdit(task: ITask):void;
};

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task)=> (
                    <Task key={task.id}>
                        <Details>
                            <h4>{task.title}</h4>
                            <p>Dificuldade: {task.difficulty}</p>
                        </Details>
                        <Actions>
                            <i
                                className='bi bi-pencil'
                                onClick={()=> {
                                    handleEdit(task)
                                }}
                            ></i>
                            <i
                                className='bi bi-trash'
                                onClick={(id)=> {
                                    handleDelete(task.id)
                                }}
                            ></i>
                        </Actions>
                    </Task>
                ))
            ): (
                <p>Não há tarefas cadastradas!</p>
            )}
        </>
    );
};

export default TaskList;
