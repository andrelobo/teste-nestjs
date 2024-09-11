import {
  IsString,
  MaxLength,
  IsNumber,
  IsPositive,
  IsDateString,
  IsOptional,
} from 'class-validator';
import { FutureDateValidator } from '../validators/future-date.validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  description?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price?: number;

  @IsOptional()
  @IsDateString()
  @FutureDateValidator()
  expiryDate?: string;

  @IsOptional()
  @IsString()
  imageName?: string;

  @IsOptional()
  @IsNumber()
  categoryId?: number;
}
