const express = require('express');
const router = express.Router();

const {} = require('../')

//@desc GET all products from DB
//@route GET /api/products
//@access Public
router.get('/', (req, res) => {});

//@desc GET a product by id from DB
//@route GET /api/products/:id
//@access Public
router.get('/:id', (req, res) => {});

module.exports = router;