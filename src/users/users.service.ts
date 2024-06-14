import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';  // Asegúrate de que la ruta es correcta
import { PrismaService } from '../prisma.service';  // Ruta relativa corregida

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async getUsers() {
        try {
            return await this.prisma.user.findMany();
        } catch (error) {
            throw new Error(`Error retrieving users: ${error.message}`);
        }
    }

    async createUser(user: CreateUserDto) {
        try {
            return await this.prisma.user.create({ data: user });
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }
}