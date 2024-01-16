import { Module } from '@nestjs/common';
import { JuiceController } from './juice.controller';
import { JuiceService } from './juice.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JuiceSchema } from './juice.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:"juice",
      schema: JuiceSchema
    }])
  ],
  controllers: [JuiceController],
  providers: [JuiceService]
})
export class JuiceModule {}
