const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const database = require('./database/Connection');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const ADMIN_ROUTE = require('./routes/Admin');
const ADD_PRODUCT_ROUTE = require('./routes/Product');
const GET_PRODUCT_ROUTE = require('./routes/Product');
const DELETE_PRODUCT_ROUTE = require('./routes/Product');
const SIGN_UP_ROUTE = require('./routes/User');
const LOG_IN_ROUTE = require('./routes/User');
const ORDER_ROUTE = require('./routes/Orders');
const ORDER_INFO_ROUTE = require('./routes/Orders');
const PLACE_ORDER_ROUTE = require('./routes/Orders');

app.use('/api/admin', ADMIN_ROUTE);
app.use('/api/add_product', ADD_PRODUCT_ROUTE);
app.use('/api/get_product', GET_PRODUCT_ROUTE);
app.use('/api/delete_product', DELETE_PRODUCT_ROUTE);
app.use('/api/signup', SIGN_UP_ROUTE);
app.use('/api/login', LOG_IN_ROUTE);
app.use('/api/confirm_order', ORDER_ROUTE);
app.use('/api/order_info', ORDER_INFO_ROUTE);
app.use('/api/place_order', PLACE_ORDER_ROUTE);

const start = async() => {
    await database();
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();