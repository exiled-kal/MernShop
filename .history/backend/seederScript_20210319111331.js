require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
try {
    await Product.deleteMany({}
    })
} catch (error) {
    
}
}
