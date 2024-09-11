import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Irede Produtos API')
    .setDescription('API para gerenciamento de produtos')
    .setVersion('1.0')
    .addTag('products', 'Operações relacionadas a produtos')
    .addTag('categories', 'Operações relacionadas a categorias')
    .setTermsOfService('http://example.com/terms')
    .setContact(
      'Support',
      'https://www.linkedin.com/in/andreloboweb/',
      'loboandre@hotmail.com',
    )
    .setLicense('MIT', 'http://example.com/license')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    console.log(`Application is running on: http://localhost:${port}`);
  });
}

bootstrap().catch((err) => {
  console.error('Failed to start the application:', err);
});
