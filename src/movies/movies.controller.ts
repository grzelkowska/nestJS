import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with id: ${movieId}`;
  }

  @Post()
  create() {
    return `This will create a movie`;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete a move with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `this will patch a movie with the id: ${movieId}`;
  }
}
