const mongoose = require('mongoose');
const { Schema } = mongoose;
const ItemSchema = require('./Item');

const cartSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [ItemSchema]
});

mongoose.model('cart', cartSchema);