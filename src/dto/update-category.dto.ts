import { IsString, Length, IsOptional } from 'class-validator';

export class UpdateCategoryDto {
  @IsOptional()
  @IsString()
  @Length(1, 100)
  name?: string;
}
