const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Item = mongoose.model('items');

module.exports = app => {
  app.get('/api/home', requireLogin, async (req, res) => {
    const items = await Item.find({});

    res.send(items);
  });

  app.post('/api/home', requireLogin, async (req, res) => {
    const { name, category, quantity, price } = req.body.values;

    const item = new Item({
      name,
      category,
      quantity,
      price
    });

    try {
      await item.save();

      console.log('OUR NEW ITEM:\n',item);
      res.send(item);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};