import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;  // Cambiado a 'string' en lugar de 'String'

    @IsString()
    @IsNotEmpty()
    password: string;
}