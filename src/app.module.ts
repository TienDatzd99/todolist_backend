import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TasksModule,
    AuthModule,
    UserModule,
  ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, TasksService],
})
export class AppModule { }
