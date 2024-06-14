import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { query } from 'express';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
 
@Controller('/tasks')
@ApiTags('tasks')
export class TaskController {
    tasksService: TasksService;
    constructor(tasksService: TasksService){
        this.tasksService = tasksService;
    }
    
    @Get()
    @ApiOperation({summary:'get all tasks'})
    @ApiResponse({status: 200, description:'return all tasks.'})
    @ApiResponse({status: 403, description:'forbiden return.'})
    getAllTasks(@Query() query: any){
        console.log(query)
        return this.tasksService.getTasks();
    }

    @Get('/id:')
    getTask(@Param('id') id:string){
        console.log(id)
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    @ApiOperation({summary:'create task'})
    @UsePipes(new ValidationPipe())
    createTasks(@Body() task: CreateTaskDto){
        return this.tasksService.createTasks(task);
    }

    @Put()
    updateTasks(@Body() task: UpdateTaskDto): string[]{
        return this.tasksService.updateTasks(task);
    }

    @Delete()
    deleteTasks(){
        return this.tasksService.deleteTasks;
    }

    @Patch ()
    updateTaskStatus() {
        return this.tasksService.updateTaskStatus
    }


}