import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
    private coffees: CreateCoffeeDto[] = [
        {
            id:1,
            name: 'Shipwreck',
            brand: 'Buddy Brew',
            flavors: ['choclate'],
        }
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id : string) {
        // throw 'A random error';
        const coffee = this.coffees.find(item => item.id === +id);
        if(!coffee) {
            throw new NotFoundException(`Coffee ${id} not found`);
        }
        return coffee;
    }

    create(createCoffeeDto: CreateCoffeeDto) {
        this.coffees.push(createCoffeeDto);
    }

    update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
        const existingCoffee = this.findOne(id);
        if(existingCoffee){
            
        }
    }

    remove(id:string){
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if(coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex,1);
        }
    }
}
