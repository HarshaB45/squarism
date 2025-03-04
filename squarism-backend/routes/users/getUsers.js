const express = require('express');
const router = express.Router();
const User = require('../../schemas/userSchema'); 

router.get('/', async (req, res) => {
    try {
      const users = await User.find(); 
      res.json(users); 
      
    } catch (error) {
      res.status(500).send('Error fetching users');
    }
  });
  

module.exports = router;