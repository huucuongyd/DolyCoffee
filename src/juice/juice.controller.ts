import { Controller, Get } from '@nestjs/common';
import { JuiceService } from './juice.service';

@Controller('juice')
export class JuiceController {
    constructor(private service:JuiceService){}
    @Get()
    async getJuice(){
        return this.service.getJuice();
    }
}
