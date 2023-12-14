import { Controller, Get, Param } from '@nestjs/common';

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
}
