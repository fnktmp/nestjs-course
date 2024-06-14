import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TaskController } from './tasks/tasks.controller';
import { HelloController } from './hello/hello.controller';
import { TasksService } from './tasks/tasks.service';
import { ProjectService } from './project/project.service';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, ProjectsModule, UsersModule, AuthModule, PaymentsModule],
  controllers: [TaskController, HelloController],
  providers: [TasksService, ProjectService],
})
export class AppModule {}
