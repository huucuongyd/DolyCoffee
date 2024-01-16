import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TeaService {
    constructor(@InjectModel('tea') private model: Model<any>){}
    async getTea(){
        return this.model.find();
    }
}
