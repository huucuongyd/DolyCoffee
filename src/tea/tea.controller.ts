import { Controller, Get } from '@nestjs/common';
import { TeaService } from './tea.service';

@Controller('tea')
export class TeaController {
    constructor(private service: TeaService){}
    
    @Get()
    async getTea(){
        return this.service.getTea();
    }
}
