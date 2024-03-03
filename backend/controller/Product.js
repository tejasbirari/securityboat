const Product = require('../database/models/Product');

const addProduct = async(req, res) => {
    try {
        
        const { title, category, price, image } = req.body;

        // Add all parameter to database
        const create = new Product({ 
            title: title,
            category: category,
            price: price,
            image: image
        });

        const success = await create.save();

        // If it successfully added to database return response
        if(success){
            return res.status(200).json({ message: 'Product Added' });
        } else {
            return res.status(401).json({ message: 'Failed' });
        }

    } catch (error) {
        console.log('Internal Server Error');
    }
}

const getProduct = async(req, res) => {
    try {
        // reterives all products from database and send to frontend
        const products = await Product.find();
        return res.status(200).json({ products });
    } catch (error) {
        console.log('Internal Server Error');
    }
}

const deleteProduct = async(req, res) => {
    try {
        const productId = req.params.id;
        
        // Find the product by ID and delete it
        await Product.findByIdAndDelete(productId);

        return res.status(200).json({ message: 'Product deleted successfully' });

    } catch (error) {
        console.log('Internal Server Error');
    }
}

module.exports = { addProduct, getProduct, deleteProduct };