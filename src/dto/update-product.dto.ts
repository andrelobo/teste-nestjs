import {
  IsString,
  MaxLength,
  IsNumber,
  IsPositive,
  IsDateString,
  ValidateIf,
  IsOptional,
} from 'class-validator';

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
  @ValidateIf((o) => new Date(o.expiryDate) > new Date())
  expiryDate?: string;

  @IsOptional()
  @IsString()
  imageName?: string;

  @IsOptional()
  @IsNumber()
  categoryId?: number;
}
