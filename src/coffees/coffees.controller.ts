import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

interface RequestBody{
    "name": String,
    "github" : String
}

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeesService: CoffeesService) {}


    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto){
        // const {limit, offset} = paginationQuery;
        return this.coffeesService.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        console.log(typeof id);
        return this.coffeesService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id:number, @Body() body: UpdateCoffeeDto){
        return this.coffeesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id:number){
        return this.coffeesService.remove(id);
    }
}
