import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsNumber,
  IsPositive,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { FutureDateValidator } from '../validators/future-date.validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the product',
    example: 'Organic Green Tea',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @ApiProperty({
    description: 'A detailed description of the product',
    example: 'A refreshing green tea made from organic leaves.',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  description: string;

  @ApiProperty({
    description: 'The price of the product in USD',
    example: 19.99,
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'The expiration date of the product',
    example: '2025-12-31',
  })
  @FutureDateValidator({ message: 'The expiration date must be in the future.' })
  expiryDate: string;

  @ApiProperty({
    description: 'Optional image file name for the product',
    example: 'green-tea.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  imageName?: string;

  @ApiProperty({
    description: 'ID of the category the product belongs to',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
