import { Injectable,HttpCode, NotFoundException} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService{

    private tasks = []

    getTasks(){
        return this.tasks;
    }
    "no funciona correctamente ver error no devuelve id"
    getTask(id:number){
        const taskFound = this.tasks.find(task => task.id === id);
        if(!taskFound){
            return new NotFoundException('task id ${id} not found');
            
        }
    }


    createTasks(task : CreateTaskDto){
        console.log(task)
        this.tasks.push({
            ...task,
            id:this.tasks.length+1,
        });
        return task
    }

    updateTasks(task: UpdateTaskDto){
        console.log(task)
        return ['actualizando']
    }

    deleteTasks(){
        return ['eliminando']
    }

    updateTaskStatus(){
        return ['actualizando estado']
    }
}