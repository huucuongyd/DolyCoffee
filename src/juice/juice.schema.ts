import * as mongoose from 'mongoose';

export const JuiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});
