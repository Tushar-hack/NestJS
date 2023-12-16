import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

interface RequestBody{
    "name": String,
    "github" : String
}

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeesService: CoffeesService) {}


    @Get()
    findAll(@Query() paginationQuery){
        // const {limit, offset} = paginationQuery;
        return this.coffeesService.findAll();
    }

    @Get(':id')
    findOne(@Param() param){
        return this.coffeesService.findOne(param.id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body: UpdateCoffeeDto){
        return this.coffeesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.coffeesService.remove(id);
    }
}
