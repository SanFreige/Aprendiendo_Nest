import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  newEndpoint() {
    return 'Nuevo endpoint';
  }

  @Get('product/:productId')
  getProduct(@Param() params: any) {
    return `product ${params.productId}`;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(@Param() { categoryId, productId }) {
    return `Product ${productId}, Category ${categoryId}`;
  }
}
