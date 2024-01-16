import { Module } from '@nestjs/common';
import { TeaService } from './tea.service';
import { TeaController } from './tea.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TeaSchema } from './tea.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:'tea',
      schema: TeaSchema
    }])
  ],
  providers: [TeaService],
  controllers: [TeaController]
})
export class TeaModule {}
