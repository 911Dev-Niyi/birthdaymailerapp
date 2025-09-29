import cron from 'node-cron';
import User from '../models/User.js';
import sendBirthdayEmail from '../utils/sendBirthdayEmail.js';

const birthdayCron = () => {
    cron.schedule('0 6 * * *', async () => {
        console.log('Running birthday email cron job🎉');

        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1; // Months are zero-indexed

        try { 
            const celebrants= await User.find({
                $expr: {
                    $and: [
                        {$eq: [{ $dayOfMonth: '$dob'}, day] },
                        { $eq: [{ $month: '$dob'}, month] }
                    ]
                }
            });
            for (const user of celebrants) {
                await sendBirthdayEmail(user);
            }

            console.log(` ✅ Sent birthday emails to ${celebrants.length} user(s)`);
        } catch (err) {
            console.error('❌ Error running birthday cron:', err.message);
        }
    });
};

export default birthdayCron;