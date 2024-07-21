const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config');

// Register
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) {
                return res.status(400).json({ message: 'User already exists' });
        }
        user = new User({ username, password });
        await user.save();
        const token = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: 3600 });
        res.json({ token });
    } catch (error) {
        res.status(500).send('Server error');
    }    
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: 3600 });
        res.json({ token });
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
