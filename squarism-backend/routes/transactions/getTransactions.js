const express = require('express');
const router = express.Router();
const Transaction = require('../../schemas/transactionSchema'); 

router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch transactions', error });
    }
});
  
module.exports = router;
