import { Controller, Get } from '@nestjs/common';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
    constructor( private service: CoffeeService){}
    @Get()
    async getCoffee() {
        return this.service.getCoffee();
    }
}
