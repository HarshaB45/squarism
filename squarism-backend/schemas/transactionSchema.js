const mongoose = require('../mongo');

const transactionSchema = new mongoose.Schema({
    
    transactionId:{
        type: String,
        required: true 
    },
    transactionDate:{
        // type: Date,
        type: String,
        required: true
    },
    transactionTitle:{
        type: String, 
        required: true
    },
    transactionCategory:{
        type: String,
        required: true
    },
    transactionAmount:{
        type: Number, 
        required: true
    },
    transactionStatus:{
        type: String,
        required: true
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;