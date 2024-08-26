import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from './product.entity';
import { IsString, Length, IsEmail, IsBoolean } from 'class-validator';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 50 })
  @IsString()
  @Length(4, 50)
  username: string;

  @Column()
  @IsString()
  password: string; // Armazenar o hash da senha, não a senha em texto claro

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ default: true })
  @IsBoolean()
  isActive: boolean;

  @Column({ type: 'simple-array', nullable: true })
  @IsString({ each: true })
  roles: string[]; // Campos adicionais para ACL

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];
}
