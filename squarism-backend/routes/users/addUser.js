const express = require('express');
const router = express.Router();
const User = require('../../schemas/userSchema'); 

const emailRegex = /^[^\s@]+@gmail\.com$/;

const validatePassword = (password) => {
  return password.length >= 8;
};

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    // Validate email
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Validate password
    if (!validatePassword(password)) {
      return res.status(400).json({ message: 'Password must be greater than 8 characters' });
    }

    try {
      const existingUser = await User.findOne({ email });
      
      // User already exists
      if (existingUser) {
        return res.status(400).json({ message: 'Email taken' });
      }
      
      const data = { email, password };
    
      await User.insertMany([data]);
      res.json({ message: 'Added successfully!' });

    } catch (error) {
      res.status(500).send('Error adding user');
    }
  });

module.exports = router;
  
