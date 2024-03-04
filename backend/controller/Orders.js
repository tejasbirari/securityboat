const Order = require('../database/models/Orders');

const confirmOrder = async(req, res) => {
    try {
        const { productId, userId, address, mobile, paymentMode, price } = req.body;

        const newOrder = new Order({
            productId: productId,
            userId: userId,
            address: address,
            mobile: mobile,
            paymentMode: paymentMode,
            price: price,
        });

        const success = await newOrder.save();

        // If it successfully added to database return response
        if(success){
            return res.status(200).json({ message: 'Order Confirmed' });
        } else {
            return res.status(401).json({ message: 'Failed' });
        }


    } catch (error) {
        console.log('Internal Server Error');
    }
}

const getOrdersToAdmin = async(req, res) => {
    try {
        const orders = await Order.find();
        // get order whose orderStatus is confirmed
        const confirmedOrders = orders.filter(order => order.orderStatus === "confirmed");
        return res.status(200).json({ orders: confirmedOrders });
    } catch (error) {
        console.log('Internal Server Error');
    }
}

const placeOrder = async(req, res) => {
    try {
        const orderId = req.params.id;
        const order = await Order.findById(orderId);

        // If the order is found, update its orderStatus to "placed"
        if (order) {
            order.orderStatus = 'placed';
            await order.save();

            // Send a success response back to the client
            return res.status(200).json({ message: 'Order placed successfully' });
        } else {
            // If the order is not found, send a 404 response
            return res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        console.log('Internal Server Error');
    }
}
 
module.exports = { confirmOrder, getOrdersToAdmin, placeOrder }