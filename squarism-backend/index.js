// Database connection
require('./mongo');

// From npm
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// From routes
const apiRoute = require('./routes/api');

// From routes/users
const getUsersRoute = require('./routes/users/getUsers.js');
const addUserRoute = require('./routes/users/addUser.js');
const authUserRoute = require('./routes/users/authUser.js');

//From routes/transactions
const getTransactionsRoute = require('./routes/transactions/getTransactions.js');
const addTransactionRoute = require('./routes/transactions/addTransaction.js');

// From schemas
const user = require('./schemas/userSchema');

// Mounting
app.use('/api', apiRoute);
app.use('/getUsers', getUsersRoute);
app.use('/addUser', addUserRoute);
app.use('/authUser', authUserRoute);
app.use('/getTransactions', getTransactionsRoute);
app.use('/addTransactions', addTransactionRoute);

// Terminal
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});