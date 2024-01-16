import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';
import { TeaModule } from './tea/tea.module';
import { JuiceModule } from './juice/juice.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CoffeeModule, TeaModule, JuiceModule,
    MongooseModule.forRoot('mongodb+srv://DolyCoffee:DolyCoffee1@dolycoffee.jmsni1b.mongodb.net/DolyCoffee', {
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
