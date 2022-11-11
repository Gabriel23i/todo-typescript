import { useState, useRef, useEffect } from 'react';

import Modal from './components/modal/Modal';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TaskForm from './components/taskForm/TaskForm'; 
import TaskList from './components/taskList/TaskList';

import GlobalStyle from './styles/global';

import { ITask } from './interfaces/Task';

function App() {

    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

    const modal = useRef<HTMLDivElement>(null);

    const deleteTask = (id:number) => {
        setTaskList(
            taskList.filter(task=> {
                return task.id !== id
            })
        );
    };

    const hideOrShowModal = (display: boolean) => {

        if(modal.current !== null){

            if(display){
                modal.current.style.display = 'block';
            } else {
                modal.current.style.display = 'none';
            };
        };
    };

    const editTask = (task: ITask):void => {
        hideOrShowModal(true);
        setTaskToUpdate(task);
    };

    const updateTask = (id: number, title: string, difficulty: number) => {

        const updatedTask: ITask = { id, title, difficulty };

        const updatedItems = taskList.map((task)=>{
            return task.id === updatedTask.id ? updatedTask : task;
        });

        setTaskList(updatedItems);

        hideOrShowModal(false);
    };

    useEffect(() => {
        if(modal.current !== null){
            modal.current.style.display = 'none';
        };
    }, []);

    return (
        <div className="App">
            <GlobalStyle />
            <Modal
                reference={ modal }
                children={
                    <TaskForm
                        btnText='Editar Tarefa'
                        taskList={ taskList }
                        task={ taskToUpdate }
                        handleUpdate={ updateTask }
                    />
                }
            />
            <Header />
            <main>
                <div>
                    <h2>O que você vai fazer ?</h2>
                    <TaskForm
                        btnText="Criar tarefa"
                        taskList={ taskList }
                        setTaskList={ setTaskList }
                    />
                </div>
                <div>
                    <h2>Suas tarefas:</h2>
                    <TaskList
                        taskList={ taskList }
                        handleDelete={ deleteTask }
                        handleEdit={ editTask }
                    />
                </div>
            </main>
            <Footer />
        </div >
    );
};

export default App;
