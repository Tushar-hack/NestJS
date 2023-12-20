import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
    @IsOptional()
    @IsPositive()
    // @Type(() => Number) you can remove those if you have defined transform object in main.ts file
    limit: number;

    @IsOptional()
    @IsPositive()
    // @Type(() => Number)
    offset: number;
}
