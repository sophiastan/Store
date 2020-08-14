const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Cart = mongoose.model('cart');

module.exports = app => {
  app.get('/api/cart', requireLogin, async (req, res) => {
    const cart = await Cart.find({ _user: req.user.id });

    res.send(cart);
  });

  app.post('/api/cart', requireLogin, async (req, res) => {
    const { name, category, quantity, price } = req.body;
    // console.log('REQ BODY:\n', req.body);

    const cart = new Cart({
      items: [{ name, category, quantity, price}],
      _user: req.user.id
    });

    try {
      await cart.save();

      console.log('OUR CART:\n', cart);
      res.send(cart);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};