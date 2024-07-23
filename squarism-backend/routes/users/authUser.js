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

      // User does not exist
      if (!existingUser) {
        return res.status(400).json({ message: 'User not found' });
      }

      // Password mismatch
      if (existingUser.password !== password) {
        return res.status(400).json({ message: 'Password mismatch' });
      }


      res.json({ message: 'Login successful' });

    } catch (error) {
      res.status(500).send('Error logging in');
    }
  });

module.exports = router;
  
