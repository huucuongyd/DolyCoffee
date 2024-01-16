import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeeSchema } from './coffee.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name:"Coffee" , schema: CoffeeSchema}])
  ],
  controllers: [CoffeeController],
  providers: [CoffeeService]
})
export class CoffeeModule {}
