const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Server Error'});
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Server Error'});
  }
};
