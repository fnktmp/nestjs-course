import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res,UseGuards } from '@nestjs/common';
import {Request, Response} from 'express'
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { get } from 'http';
import { AuthGuard } from './guards/auth/auth.guard' ;
@Controller('/')
export class HelloController {
    
    @Get('/')
    indexedDB( @Req() request: Request, @Res() response: Response){
        console.log(request.url)
        response.status(200).json({
            message: 'hello word'
        });
        return 'home page'
    }

    @Get('new')
    @HttpCode(201)
    somethingNew(): string{
        return 'something new'
    }

    @Get('not found')
    @HttpCode(404)
    NotFoundPage(){
        return 'not found'
    }

    @Get('error')
    @HttpCode(500)
    errorPage(){
        return 'error route!!'
    }

    @Get('ticket/:num')
    getnumber(@Param('num', ParseIntPipe)num:number){
        console.log(typeof num)
        return num +14;
    }

    @Get('active/:status')
    IsUserActive(@Param('status',ParseBoolPipe) status:boolean){
        console.log(typeof status); 'boolean'
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name:string,age:number}): string{
        console.log (typeof query.age)
        console.log (typeof query.name)
        return `hello ${query.name}, you are ${query.age+30} years old`;
    }

}
