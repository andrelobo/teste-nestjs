import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 200 })
  description: string;

  @Column('double')
  price: number;

  @Column('date')
  expirationDate: Date;

  @Column({ nullable: true })
  image?: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
  user: any;
}
