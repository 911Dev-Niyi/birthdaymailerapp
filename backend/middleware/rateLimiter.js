import rateLimit from 'express-rate-limit';

const rateLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minute
    max: 5,
    message: {
        status: 429,
        message: 'Too many requests. Please try again later.' 
    }
});

export default rateLimiter;