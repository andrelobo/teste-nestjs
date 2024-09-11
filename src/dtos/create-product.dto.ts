import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsNumber,
  IsPositive,
  IsDateString,
  IsOptional,
} from 'class-validator';
import { FutureDateValidator } from '../validators/future-date.validator';

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

  @FutureDateValidator({ message: 'The expiration date must be in the future.' })
  expiryDate: string;

  @IsOptional()
  @IsString()
  imageName?: string;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
