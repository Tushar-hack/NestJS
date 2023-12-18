import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

    constructor( 
        @InjectRepository(Coffee) 
        private readonly coffeeRepository: Repository<Coffee>,
    ) {}

    findAll() {
        return this.coffeeRepository.find({
            relations: ['flavors']
        });
    }

    async findOne(id : number) {
        // throw 'A random error';
        const coffee = await this.coffeeRepository.findOne({ 
            where: {id}, 
            relations: ['falvors']
        });
        if(!coffee) {
            throw new NotFoundException(`Coffee ${id} not found`);
        }
        return coffee;
    }

    create(createCoffeeDto: CreateCoffeeDto) {
        const coffee = this.coffeeRepository.create(createCoffeeDto);
        return this.coffeeRepository.save(coffee);
    }

    async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
        const coffee = await this.coffeeRepository.preload({
            id: id,
            ...updateCoffeeDto,
        });
        if(!coffee) {
            throw new NotFoundException(`Coffee ${id} not found`);
        }
        return this.coffeeRepository.save(coffee);
    }

    async remove( id: number){
        const coffee = await this.findOne(id);
        return this.coffeeRepository.remove(coffee);
    }
}
