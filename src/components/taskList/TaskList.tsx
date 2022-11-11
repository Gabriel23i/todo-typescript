import { Task, Details, Actions } from './styles';

import { ITaskList } from '../../interfaces/TaskList';

const TaskList = ({ taskList, handleDelete, handleEdit }: ITaskList) => {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task)=> (
                    <Task key={task.id}>
                        <Details>
                            <p>
                                Tarefa: <span>{task.title}</span>
                            </p>
                            <p>
                                Dificuldade: <span>{task.difficulty}</span>
                            </p>
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
