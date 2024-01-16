import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CoffeeService {
    constructor(@InjectModel("Coffee") private model: Model<any>){}

    async getCoffee(){
        return this.model.find();
    }
}
