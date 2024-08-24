import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsNumber,
  IsPositive,
  IsDateString,
  ValidateIf,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsDateString()
  @ValidateIf((o) => new Date(o.expiryDate) > new Date())
  expiryDate: string;

  @IsOptional()
  @IsString()
  imageName?: string;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
