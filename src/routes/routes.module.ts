import { Module } from '@nestjs/common';
import { CategoryModule } from '../category/category.module';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';

@Module({
  imports: [CategoryModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class RoutesModule {}
