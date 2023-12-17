import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports: [TypeOrmModule.forFeature([Coffee])],
    controllers: [CoffeesController],
    providers: [CoffeesService],
    exports: [CoffeesModule]
})
export class CoffeesModule {}


// Repository Class act as an abstraction over data sources and exposes a variety of useful methods to interact with the data stored in our database.
