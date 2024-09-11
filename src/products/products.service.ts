import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(
    createProductDto: CreateProductDto,
    imageName: string,
  ): Promise<Product> {
    const product = this.productsRepository.create({
      ...createProductDto,
      image: imageName,
    });
    return this.productsRepository.save(product);
  }

  async findAll(
    page: number = 1,
    limit: number = 10,
    search: string = '',
  ): Promise<{ products: Product[]; total: number }> {
    const [products, total] = await this.productsRepository.findAndCount({
      where: [
        { name: Like(`%${search}%`) },
        { description: Like(`%${search}%`) },
      ],
      skip: (page - 1) * limit,
      take: limit,
    });
    return { products, total };
  }

  async findOne(id: number): Promise<Product> {
    return this.productsRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    await this.productsRepository.update(id, updateProductDto);
    return this.productsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
