import { IsString, IsNumber } from "class-validator";

export class CreateCoffeeDto {
    @IsNumber()
    readonly id:number;
    @IsString()
    readonly name: string;
    @IsString()
    readonly brand: string;
    @IsString({ each: true })
    readonly flavors: string[];
}

// DTO's are usefull in creating a bit of type safety within our web applications.
// they let us create a definition for the shape od the data that's coming into the body of the API Request. 
