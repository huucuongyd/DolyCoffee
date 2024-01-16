import * as mongoose from 'mongoose';

export const TeaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});
