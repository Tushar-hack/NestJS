import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query} from '@nestjs/common';
import { off } from 'process';

interface RequestBody{
    "name": String,
    "github" : String
}

@Controller('coffees')
export class CoffeesController {
    @Get('flavors')
    findAll(@Query() paginationQuery): String{
        const {limit, offset} = paginationQuery;
        return `This action return all coffees. Limit: ${limit}, Offset: ${offset}`;
    }

    @Get(':id/:username')
    findOne(@Param() param): String{
        return `This action returns ${param.id} coffee for ${param.username}`;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body): RequestBody{
        return body;
    }

    @Patch(':id')
    update(@Param('id') id:String, @Body() body): String{
        return `This action updates ${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id:String): String{
        return `This action removes ${id} coffee`;
    }
}
