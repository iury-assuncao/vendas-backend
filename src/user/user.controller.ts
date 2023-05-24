import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    return JSON.stringify({ teste: 'abc' });
  }

  @Post()
  async createUser(@Body() createUser: createUserDto) {
    return {
      ...createUser,
      password: undefined,
    };
  }
}
