const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  category: String,
  quantity: Number,
  price: Number
});

mongoose.model('items', itemSchema);