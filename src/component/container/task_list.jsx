import React from 'react';

import { Task } from '../../models/task.class';

import TaskComponent from '../pure/task';
import { LEVEL } from '../../models/level.enum';


const TaskListComponent = () => {
    const defaultTask = new Task('Example','Default description',false,LEVEL.URGENT);
    /* const changeState = (id) =>{
        console.log('TODO: cambiar estado de una tarea')

    } */
    return (
        <div>
            <div>
                Your task:
            </div>
            {/**
             * TODO: aplicar un for  o un map para renderizar una lista de tareas
             */}
             <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;
