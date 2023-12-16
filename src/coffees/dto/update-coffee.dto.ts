import {PartialType} from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}


// PartialType utility function helps to reduce redundant code.
// here it inherits all the fields from createCoffeeDto with its validation decorators + add an IsOptional() decorator to all.
