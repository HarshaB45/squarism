const express = require('express');
const router = express.Router();
const Transaction = require('../../schemas/transactionSchema'); 

router.post('/', async (req, res) => {
    
    const { transactionId, transactionDate, transactionTitle, transactionCategory, transactionAmount, transactionStatus } = req.body;
    
    try {
        
        const tdata = { transactionId, transactionDate, transactionTitle, transactionCategory, transactionAmount, transactionStatus };
        await Transaction.insertMany([tdata]);
        res.json({ message: 'Added successfully!' });
        

    } catch(error) {
        res.status(500).json({ message: 'Failed to add transaction', error }); //internal server error
    }

})

module.exports = router;