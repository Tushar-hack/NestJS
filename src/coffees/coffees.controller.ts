import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('coffees')
export class CoffeesController {
    @Get('flavors')
    findAll(): String{
        return "This action return all coffees."
    }

    @Get(':id/:username')
    findOne(@Param() param): String{
        return `This action returns ${param.id} coffee for ${param.username}`;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body) {
        return body;
    }
}
