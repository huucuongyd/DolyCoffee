import * as mongoose from 'mongoose';

export const CoffeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});
