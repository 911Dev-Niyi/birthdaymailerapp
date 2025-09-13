import User from '../models/User.js';
import sendBirthdayEmail from '../utils/sendBirthdayEmail.js';
export const addUser = async (req, res) => {
    try {
        const { username, email, dob } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this Email already exists'});
        }
        const newUser = new User({ username, email, dob});
        await newUser.save();
        res.status(201).json({message: 'User added successfully'})
    } catch (err) { 
        res.status(500).json({ message: 'Server error', error: err.message});
    }
};

export const testEmail = async (req, res) => {
    const { email } = req.body;
    if (!email) { 
        return res.status(400).json({ message: 'Email is required'});
    }

    try { 
        await sendBirthdayEmail({ username: 'Test User', email});
        res.status(200).json({ message: 'Test email sent successfully'});
    } catch  (err) {
        res.status(500).json({ message: 'Failed to send test email', error: err.message})
    }
};

export const unsuscribeUser = async (req, res) => {
    const { email } = req.body;
    
    if (!email) {
        return res.status(400).json({ message: 'Email is required'});
    }

    try {
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(404).json({ message: 'User not found'});
        }

        await User.deleteOne({ email });
        res.status(200).json({ message: 'User deleted succesfully'});
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};